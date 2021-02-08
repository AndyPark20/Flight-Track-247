require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const cors = require('cors');
const fetch = require('node-fetch');
const pg = require('pg');
const jsonMiddleware = express.json();
const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

app.use(cors())
app.use(jsonMiddleware);
app.use(staticMiddleware);


app.post('/api/login', (req, res, next) => {
  const { username, password } = req.body
  if (!username || !password) {
    throw new ClientError(401, 'Invalid Login')
  }
  const sql = `
  select "userId",
         "password"
  from "userInfo"
  where "username" = $1
  `;
  const params = [username];
  db.query(sql, params)
    .then(result => {
      const info = result.rows[0]
      res.json(info)
    })
    .catch(err => {
      return next(err)
    })
})

app.post('/api/flight', (req, res, next) => {
  const userId = 1
  const { icao24, time } = req.body;
  if (!icao24 || !time) {
    throw new ClientError(401, 'Invalid Entry')
  }
  const sql = `
  insert into "flight" ("userId","icao24","time")
  values($1, $2,$3)
  returning *
  `;
  const params = [userId, icao24, time];
  db.query(sql, params)
    .then(result => {
      const info = result.rows
      res.status(201).json(info);
      return;
    })
    .catch(err => {
      return next(err)
    })
})


app.get('/api/get/airport/:code/:date/:end/:start/:type', (req, res, next) => {
  fetch(`https://opensky-network.org/api/flights/${req.params.type}?airport=${req.params.code}&begin=${req.params.start}&end=${req.params.end}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      res.status(200).json(data)

    })
    .catch(err => {
      return next(err);
    })
})


app.post('/api/airport',(req,res,next)=>{
  const userId=1
  console.log(req.body)
  const {code, start,date, end,type}=req.body;
  if(!code || !start || !end || !type){
    throw new ClientError(401,'Invalid Entry')
  }
  const sql=`
  insert into "savedAirport" ("userId", "airportCode", "date" , "startTime", "endTime", "type")
  values ($1, $2, $3, $4, $5, $6)
  returning *
  `;

  const params =[userId,code,date,start,end,type]
  db.query(sql,params)

  .then(result=>{
    const info = result.rows
    console.log(info)
    res.status(201).json(info);
    return;
  })
  .catch(err=>{
    return next(err)
  })

})

app.get('/api/airport',(req,res,next)=>{
  const sql =`
    select *
    from "savedAirport"
  `;

  db.query(sql)
  .then(result=>{
    const info=result.rows
    res.status(200).json(info)
    return;
  })
  .catch(err=>{
    return next(err)
  })
})

app.delete('/api/deleteAirport/:airportId', (req, res, next) => {
  const airport = parseInt(req.params.airportId, 10);
  if (airport !== Math.abs(airport)) {
    return (res.status(400).json('Error'));
  } else {
    const sql = `
   delete from "savedAirport"
   where "savedAirportId" =$1
   returning *;
   `;
    const params = [airport]
    db.query(sql, params)
      .then(result => {
        const [info] = result.rows;
        res.json(info)
      })
      .catch(err => {
        return next(err)
      })
  }
})

app.get('/api/flight', (req, res, next) => {

  const sql = `
      select *
      from "flight"
    `;
  db.query(sql)
    .then(result => {
      const info = result.rows
      res.status(200).json(info)
      return;
    })
    .catch(err => {
      return next(err)
    })
})

app.get('/api/all', (req, res, next) => {
  fetch('https://opensky-network.org/api/states/all', {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      res.status(200).json(data)

    })
    .catch(err => {
      return next(err);
    })
})

app.get('/api/select/:icao', (req, res, next) => {
  fetch(`https://opensky-network.org/api/states/all?icao24=${req.params.icao}&time${0}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      res.status(200).json(data)

    })
    .catch(err => {
      return next(err);
    })
})

app.delete('/api/delete/:flightId', (req, res, next) => {
  const flight = parseInt(req.params.flightId, 10);
  if (flight !== Math.abs(flight)) {
    return (res.status(400).json('Error'));
  } else {
    const sql = `
   delete from "flight"
   where "flightId" =$1
   returning *;
   `;
    const params = [flight]
    db.query(sql, params)
      .then(result => {
        const [info] = result.rows;
        res.json(info)
      })
      .catch(err => {
        return next(err)
      })
  }
})


app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

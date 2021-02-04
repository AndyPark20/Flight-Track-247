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

app.get('/api/all',(req,res,next)=>{
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




app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

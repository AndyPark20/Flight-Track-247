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


app.post('/api/login',(req,res,next)=>{
  const {username, password } =req.body
  if(!username || !password){
    throw new ClientError(401, 'Invalid Login')
  }
  const sql = `
  select "userId",
         "password"
  from "userInfo"
  where "username" = $1
  `;
  const params=[username];
  db.query(sql,params)
    .then(result=>{
      const info =result.rows[0]
      res.json(info)
    })
})

app.post('/api/flight', (req, res, next) => {
console.log(req.body)
res.json(req.body)
})


app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

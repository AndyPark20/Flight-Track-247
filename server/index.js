require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const ClientError = require('./client-error');
const errorMiddleware = require('./error-middleware');
const cors = require('cors');
const fetch = require('fetch')
const jsonMiddleware = express.json();
const app = express();


app.use(cors())
app.use(jsonMiddleware);
app.use(staticMiddleware);


app.get('/api/home',(req,res,next)=>{
  fetch('https://opensky-network.org/api/states/all', {
    method: 'GET',
    headers: { 'Content-type': 'application/json' }
  })
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      const sliced = data.states.slice(0, 750)
      res.json(sliced);
      // this.setState({ value: sliced })
      // console.log(this.state)
    })
    .catch(err => {
      console.error(err)
    })
})


app.use(errorMiddleware);
app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

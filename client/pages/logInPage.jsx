import React from 'react';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ username: 'DemoPressLogIn', password: '123Everyday' });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const req={
      method:'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body:JSON.stringify(this.state)
    }
    event.preventDefault();
    fetch('/api/login', req)
    .then(res=>{
      return res.json()
    })
    .then(result=>{
      console.log(result)
    })
  }

  render() {
    return (
      <div className="logInPageContainer">
        <div className="backgroundColor"></div>
        <img src="/images/logoTitle.png" className="logo" />
        <img src="/images/flighttrak247.jpg" className="backgroundPic" />
        <div className="rowInput">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input name="username" type="username" className="form-control" readOnly value={this.state.username} required />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input name="password" type="password" className="form-control" readOnly value={this.state.password} required />
            </div>
            <div className="logInBtn">
            <button type="submit" className="btn btn-danger">Log In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

// app.post('/api/auth/login', (req, res, next) => {
//   const { userName, password } = req.body;
//   if (!userName || !password) {
//     throw new ClientError(401, 'invalid login');
//   }

//   const sql = `
//     select "userId",
//            "password"
//       from "UserInfo"
//      where "userName" = $1
//   `
//   const params = [userName];
//   return db.query(sql, params)
//     .then(result => {
//       if (!result.rows[0]) {
//         throw new ClientError(401, 'invalid login');
//       }
//       const hashedPw = result.rows[0].password;
//       argon2.verify(hashedPw, password)
//         .then(passwordMatched => {
//           if (!passwordMatched) {
//             throw new ClientError(401, 'invalid login');
//           }
//           const payload = {
//             userId: result.rows[0].userId,
//             userName: userName
//           };
//           res.status(200).json({
//             token: jwt.sign(payload, process.env.TOKEN_SECRET),
//             userName: payload
//           });
//         })
//         .catch(err => next(err));
//     })
//     .catch(err => next(err));
// })

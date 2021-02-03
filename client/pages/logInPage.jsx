import React from 'react';
import MyContext from '../lib/context';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ username: 'DemoPressLogIn', password: '123Everyday' });
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const{valued}=this.props
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
      valued(result)
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

LoginPage.contextType = MyContext

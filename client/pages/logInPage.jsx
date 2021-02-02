import React from 'react';

export default class LoginPage extends React.Component{
  constructor(props) {
    super(props);
    this.state=({ username: "DemoPressLogIn", password: "123Everyday" })
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <div className="LogInPageContainer">
        <div className="black"></div>
        <img src={Title} className="logo" />
        <img src={Back} className="introPic" />
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
            <button type="submit" className="btn btn-danger"><a href="#home" className="submit">Log In</a></button>
          </form>
        </div>
      </div>
    )
  }
}

import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ icao: '' })
  }


  render() {
    return (
      <div className="topNavContainer">
        <div className="searchBar">
          <a href="#"><img className='homeLogo' src="/images/logoTitle.png" alt="logo"/></a>
          <div className="searchLengthBar">
            <input name="username" className="form-group searchWidth" type="username" className="form-control" placeholder="Icao24" onKeyUp={this.props.update} onKeyUp={this.props.update} />
          </div>
          <img className="homeHead" src="/images/profile.png" alt="user"/>
        </div>
      </div>
    )
  }
}

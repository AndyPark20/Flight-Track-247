import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ icao: '' });
  }

  render() {
    return (
      <div className="topNavContainer">
        <div className="searchBar">
          <a href="#"><img className='homeLogo' src="/images/logoTitle.png" alt="logo" /></a>
          <div className="searchLengthBar">
            <input name="username" className="searchWidth form-control" type="username" placeholder="Please enter ICAO 24-bit address " onKeyUp={this.props.update} />
          </div>
          <img className="homeHead" src="/images/profile.png" alt="user" />
        </div>
      </div>
    );
  }
}

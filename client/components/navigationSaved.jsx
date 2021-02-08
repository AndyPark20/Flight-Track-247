import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ icao: '' })
  }

  render() {
    return (
      <div className="topNavContainer">
        <div className="searchBarSaved">
          <a href="#"><img className='homeLogo' src="/images/logoTitle.png" alt="logo" /></a>
          <img className="homeHead" src="/images/profile.png" alt="user" />
        </div>
      </div>
    )
  }
}

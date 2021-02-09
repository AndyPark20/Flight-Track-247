import React from 'react';
import Home from '../pages/home'

export default class NavBottom extends React.Component {

  render() {
    return (
      <div className="navBottomContainer">
        <div className="d-flex justify-content-around">
            <a href="#home" onClick={() => { if (this.props.refresh === 'home') { window.location.reload(true) } }}><img className='bottomLogo' src="/images/airplane2.png" alt="airplane" /></a>
            <a href="#searchAirport"><img className='bottomLogoTwo' src="/images/symbol.png" alt="tower" /></a>
            <a href="#save"><img className='bottomLogoTwo' src="/images/favorite-7-64.png" alt="favorite" /></a>
          </div>
      </div>
    )
  }
}

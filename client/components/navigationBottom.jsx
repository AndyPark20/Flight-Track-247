import React from 'react';


export default class NavBottom extends React.Component {
  render() {
    return (
      <div className="navBottomContainer">
        <div className="searchBarBottom">
          <a href="#home"><img className='bottomLogo' src="/images/airplane2.png" alt="airplane"/></a>
          <a href="#"><img className='bottomLogoTwo' src="/images/symbol.png" alt="tower" /></a>
          <a href="#"><img className='bottomLogoTwo' src="/images/favorite-7-64.png" alt="favorite"/></a>
        </div>
      </div>
    )
  }
}
import React from 'react';

export default class NavBottom extends React.Component {

  render() {
    return (
      <div className="navBottomContainer">
        <div className="d-flex justify-content-around align-items-start">
            <a href="#home" className="iconText" onClick={() => { if (this.props.refresh === 'home') { window.location.reload(true); } }}><img className='bottomLogo' src="/images/airplane2.png" alt="airplane" /><p className="btnIcon">Home</p></a>
          <a href="#searchAirport" className="iconText"><img className='bottomLogoTwo' src="/images/symbol.png" alt="tower" /> <p className="btnIcon">Airport</p></a>
          <a href="#save" className="iconText"><img className="bottomLogoTwo" src="/images/favorite-7-64.png" alt="favorite" /><p className="btnIcon">Saved</p></a>
        </div>
      </div>
    );
  }
}

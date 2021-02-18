import React from 'react';

export default class LandedPlane extends React.Component {

  textLoad() {
    const spin = this.props.spinLoad;
    const selectedplane = this.props.planeArray;
    if (spin && selectedplane.length === 0) {
      return '';
    } else {
      return 'hidden';
    }
  }

  render() {
    return (
      <div className={this.textLoad()}>
        <div className="containerLoading">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <img src="/images/warning.png" alt="warning logo" className="warning" />
            <div className="textStyle">
              <p className="flightSearchLoader">Sorry that Flight has either landed or there is an error!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

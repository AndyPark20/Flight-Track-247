import React from 'react';

export default class Loader extends React.Component {
  loading() {
    const spin = this.props.spinning;
    if (spin) {
      return '';
    } else {
      return 'lds-ring';
    }
  }

  textLoad() {
    const spin = this.props.spinning;
    if (spin) {
      return 'hidden';
    }
  }

  render() {
    return (
      <div className={this.textLoad()}>
        <div className="containerLoadingAirport">
          <div className={this.loading()}><div></div><div></div><div></div><div></div></div>
          <div className="textStyle">
            <p className="loaderAirport">Retrieving Results!</p>
          </div>
        </div>
      </div>
    );
  }
}

import React from 'react';


export default class Loader extends React.Component {
  loading() {
    const spin = this.props.spinLoad
    if (spin) {
      return;
    } else {
      return "lds-ring"
    }
  }

  textLoad() {
    const spin = this.props.spinLoad
    if (spin) {
      return "hidden";
    }
  }
  render() {
    return (
      <div className={this.textLoad()}>
        <div className="containerLoading">
          <div className={this.loading()}><div></div><div></div><div></div><div></div></div>
          <div className="textStyle">
            <p className="loaderText">This might take a while!</p>
            <p className="loaderText">Theres a lot of planes to retrieve in the sky!</p>
            <p className="loaderText">Refresh the page and try it again after 30 seconds</p>
          </div>
        </div>
      </div>
    )
  }
}

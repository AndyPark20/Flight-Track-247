import React from 'react';
import NavTop from '../components/navigationSaved';
import NavBottom from '../components/navigationBottom'

export default class DropDown extends React.Component{

  render(){
    return (

      <div className="container container-sm container-md container-lg container-xl container-fluid">
        <div className="d-flex flex-column">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="fixed-top">
            <NavTop />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="fixed">

            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="footer fixed-bottom">
              <NavBottom />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

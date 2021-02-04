import React from 'react';
import NavTop from '../components/navigationSaved';
import NavBottom from '../components/navigationBottom'

export default class DropDown extends React.Component {

  render() {
    return (

      <div className="container-sm container-md container-lg container-xl container-fluid dropContainer">
        <div className="d-flex flex-column">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="fixed-top">
              <NavTop />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colDrop">
            <div>
              <h3>What would you like to see?</h3>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">Dropdown Button</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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

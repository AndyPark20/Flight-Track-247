import React from 'react';
import NavTop from '../components/navigationSaved';
import NavBottom from '../components/navigationBottom';
import {Dropdown, Toggle, Item, Menu} from 'react-bootstrap';

export default class DropDowns extends React.Component {

  render() {
    return (

      <div className="dropContainer">
        <div className="d-flex flex-column">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colDrop">
            <div className="optionMenu">
              <h5 className="dropDownText">What would you like to see?</h5>
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic-button">Please Select</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#airports">Saved Airports</Dropdown.Item>
                  <Dropdown.Item href="#flights">Saved Flights</Dropdown.Item>
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

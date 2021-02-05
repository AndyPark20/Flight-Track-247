import React from 'react';
import NavBottom from '../components/navigationBottom';
import {Form, Label, Control,Text,Row, Col} from 'react-bootstrap';

export default class SavedAirport extends React.Component{

  render() {
    return (
      <div className="savedFlightContainer">
        <div className="d-flex flex-column">
          <div className="savedFlightContainer">
            <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
            <div className="savedFlightTitle">
              <h3>Search Airport</h3>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colDrop">
            <div className="searchAirportInfo">
              <form>
                <Form.Group controlId="exampleForm.ControlInput1" className="formAirport">
                  <Form.Label >Airport Code:</Form.Label>
                  <Form.Control className="inputSearchAirport" type="email" placeholder="KSNA=John Wayne Airport" />
                  <Form.Row>
                    <Col>
                      <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                      <Form.Control placeholder="Last name" />
                    </Col>
                  </Form.Row>
                </Form.Group>

              </form>
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

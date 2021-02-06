import React, { useState } from "react";
import NavBottom from '../components/navigationBottom';
import Button from 'react-bootstrap/Button';



export default class SavedAirport extends React.Component {

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
          <div className="searchAirportContainer">
            <div className="searchAirportInfo">
              <form className="airport">
                <div className="airportSubmit">
                  <div className="airportRow">
                    <label className="formAirport"> Airport Code:</label>
                    <input className="airportCode" type="text" name="airportCode" placeholder="KSNA=John Wayne Airport" required></input>
                  </div>
                  <div className="airportRow">
                    <label className="formAirport"> Start-Date & time:</label>
                    <input className="airportCode" type="datetime-local" name="startTime"></input>
                  </div>
                  <div className="airportRow">
                    <label className="formAirport">  End-Date & time: </label>
                    <input className="airportCode" type="datetime-local" name="endTime"></input>
                  </div>
                  <div className="airportRow">
                    <label className="formAirport"> Departure or Arrival:  </label>
                    <input className="airportCode" type="text" name="dOrA" placeholder="Departure or Arrival" required></input>
                  </div>
                  <div className="btn">
                  <Button className="buttonStyle" variant="primary">SUBMIT</Button>
                  </div>
                </div>
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

import React, { useState } from "react";
import NavBottom from '../components/navigationBottom';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';



export default class SavedAirport extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      code: '',
      date: null,
      start: null,
      end: null,
      type: ''
    })
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleInputChange(event) {
    const target = event.target.name
    if (target === 'airportCode') {
      this.setState({ code: event.target.value })
    } else if (target === 'startTime') {
      const startUnix = moment(event.target.value).unix()
      const currentDate = moment(new Date()).unix()
      this.setState({ start: startUnix, date:currentDate})
    } else if (target === 'endTime') {
      const endUnix = moment(event.target.value).unix()
      this.setState({ end: endUnix })
    } else if (target === 'dOrA') {
      this.setState({ type: event.target.value })
    }

  }

  reset(){

  }

  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
    const req = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('/api/airport', req)
      .then(res => {
        return res.json()
      })
      .then(result => {
        if(!result.error){
          location.hash = 'savedAirport'
          return result;
        }

      })
      .catch(err => {
        console.error(err)
      })

  }


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
          <div className="airportContainer">
            <div className="airportRow">
              <div className="airportCol">
                <form className="airportForm" onSubmit={this.handleSubmit} >
                  <label className="labelStyle"> Airport Code:</label>
                  <input className="inputStyle" type="text" name="airportCode" placeholder="KSNA=John Wayne Airport" onChange={this.handleInputChange} required></input>
                  <label className="labelStyle"> Start-Date & time:</label>
                  <input className="inputStyle" type="datetime-local" name="startTime" onChange={this.handleInputChange} required></input>
                  <label className="labelStyle"> End-Date & time:</label>
                  <input className="inputStyle" type="datetime-local" name="endTime" onChange={this.handleInputChange} required></input>
                  <label className="labelStyle">  Departure or Arrival:</label>
                  <input className="inputStyle" type="text" name="dOrA" placeholder="Departure or Arrival" onChange={this.handleInputChange} required></input>
                  <div className="btnSubmit">
                    <Button type="submit" className="buttonStyle" variant="primary">SUBMIT</Button>
                  </div>
                </form>
              </div>
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

import React, { useState } from "react";
import NavBottom from '../components/navigationBottom';
import Button from 'react-bootstrap/Button';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';



export default class SearchAirport extends React.Component {
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

  }

  handleInputChange(event) {
    const target = event.target.name
    if (target === 'airportCode') {
      this.setState({ code: event.target.value })
    } else if (target === 'startTime') {
      const startUnix = moment(event.target.value).unix()
      const currentDate = moment(new Date()).unix()
      this.setState({ start: startUnix, date: currentDate })
    } else if (target === 'endTime') {
      const endUnix = moment(event.target.value).unix()
      this.setState({ end: endUnix })
    } else if (target === 'dOrA') {
      this.setState({ type: event.target.value })
    }

  }



  handleSubmit(event) {
    console.log(this.state)
    event.preventDefault()
    fetch(`/api/get/airport/${this.state.code}/${this.state.date}/${this.state.end}/${this.state.start}/${this.state.type}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (!result.error) {
          this.props.find(result)
          location.hash = 'savedAirport'
          return result;
        }
      })
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column">
        <div className="row align-items-start d-flex justify-content-start pl-3">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Search Airport</h3>
        </div>
        <div className="row align-items-center d-flex justify-content-center px-2 vh-100 black">
          <div className="col d-flex justify-content-center">
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
        <div className="row align-items-end black">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <NavBottom />
          </div>
        </div>
      </div>
    )
  }
}

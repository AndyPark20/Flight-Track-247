import React from 'react';
import NavBottom from '../components/navigationBottom';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';
import Button from 'react-bootstrap/Button';
import MyContext from '../lib/context';

export default class Savedflights extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ saved: [] })
    this.renderSavedFlights = this.renderSavedFlights.bind(this)
    this.deleteFlight = this.deleteFlight.bind(this)
  }

  componentDidMount() {
    fetch('api/flight')
      .then(res => res.json())
      .then(result => {
        this.setState({ saved: result })

      })
  }

  deleteFlight(info) {
    fetch(`api/delete/${info}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(result => {
        const filtered = this.state.saved.filter(values => {
          if (values.flightId !== result.flightId) {
            return values
          }
        })
        this.setState({ saved: filtered })
      })
      .catch(err => {
        return err;
      })
  }


  renderSavedFlights() {
    return (
      <div className="mb-10">
        <div className="d-flex text-center">
          <div className="col-3">
            <h5 className="render">Date</h5>
            {this.state.saved.map((values, i) => {
              return <h6 key={i}>{moment.unix(values.time).format("MMM Do YY")}</h6>
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Time</h5>
            {this.state.saved.map((values, i) => {
              return <h6 key={i}>{moment.unix(values.time).format("LT")}</h6>
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Icao24</h5>
            {this.state.saved.map((values, i) => {
              return <a key={i} href="#home" onClick={() => this.props.retrieve(values.icao24)}><h6 className="icaoNumber">{values.icao24}</h6></a>
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Options</h5>
            {this.state.saved.map((values, i) => { return <a key={i} onClick={() => this.deleteFlight(values.flightId)}><h6 className="delete">DELETE</h6></a> })}
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column">
        <div className="row align-items-start d-flex justify-content-start pl-3">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Saved Flights</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black">
          <div>{this.renderSavedFlights()}</div>
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

Savedflights.contextType = MyContext

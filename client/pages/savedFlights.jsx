import React from 'react';
import NavBottom from '../components/navigationBottom';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';

export default class Savedflights extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ saved: [] })
    this.renderSavedFlights = this.renderSavedFlights.bind(this)
  }

  componentDidMount() {
    fetch('api/flight')
      .then(res => res.json())
      .then(result => {
        this.setState({ saved: result })
      })
    }


  renderSavedFlights() {
    console.log(this.state.saved)
    // const savedInfo = this.state.saved.map((values,i)=>{
      return(
        <div className="savedFlightRendered">
          <div className="savedFlightRow">
            <div className="col-3">
              <h5>Date</h5>
              {this.state.saved.map((values,i)=>{
                // return <h6 key={i}><Moment className="size" unix tz="America/Los_Angeles">{values.time}</Moment></h6>
                return <h6 key={i}>{moment.unix(values.time).format("MMM Do YY")}</h6>
              })}
            </div>
            <div className="col-3">
              <h5>Time</h5>
              {this.state.saved.map((values, i) => {
                return <h6 key={i}>{moment.unix(values.time).format("LT")}</h6>
              })}
            </div>
            <div className="col-3">
              <h5>Icao24</h5>
              {this.state.saved.map((values, i) => {
                return <h6 key={i}>{values.icao24}</h6>
              })}
            </div>
            <div className="col-3">
              <h5>Options</h5>
            </div>
          </div>
        </div>
      )
    // })
    // return savedInfo
  }


  render() {
    return (
      <div className="savedFlightContainer">
        <div className="d-flex flex-column">
          <div className="savedFlightContainer">
            <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
            <div className="savedFlightTitle">
              <h3>Saved Flights</h3>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 colDrop">
            <div className="renderSavedInfo">
              <div>{this.renderSavedFlights()}</div>
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

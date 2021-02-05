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
    this.deleteFlight=this.deleteFlight.bind(this)
  }

  componentDidMount() {
    fetch('api/flight')
      .then(res => res.json())
      .then(result => {
        this.setState({ saved: result })

      })
  }

  deleteFlight(info){
    fetch(`api/delete/${info}`,{
      method:'DELETE',
      headers:{
        'Content-type': 'application/json'
      }
    })
    .then(res=>{
        return res.json()
    })
    .then(result=>{
      console.log(result)
      const filtered = this.state.saved.filter(values=>{
        if(values.flightId !==result.flightId){
          return values
        }
        })
        this.setState({saved:filtered})
      })
    .catch(err=>{
      return err;
    })
  }

  testing(){
    console.log(this.context)
  }


  renderSavedFlights() {
    return (
      <div className="savedFlightRendered">
        <div className="savedFlightRow">
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
              return <a key={i} onClick={()=>this.props.retrieve(values.icao24)}><h6 className="icaoNumber">{values.icao24}</h6></a>
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

Savedflights.contextType = MyContext

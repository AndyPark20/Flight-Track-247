import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';
import NavBottom from '../components/navigationBottom'




export default class SavedAirport extends React.Component {
  constructor(props) {
    super(props);
    this.renderSavedAirport = this.renderSavedAirport.bind(this)
    this.renderTimeDate = this.renderTimeDate.bind(this)
  }

  renderTimeDate() {
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <h3>{this.props.result.type}</h3>
        <h5>{`${moment.unix(this.props.result.start).format("l")} ~ ${moment.unix(this.props.result.end).format("l")}`}</h5>
        <h5>{`${moment.unix(this.props.result.start).format('HH:mm')} ~ ${moment.unix(this.props.result.end).format('HH:mm')}`}</h5>
        <h5>({this.props.result.savedAirport.length} Flights Found)</h5>
      </div>
    )
  }

  renderSavedAirport() {
    console.log('IN SAVED AIRPORT', this.props.result.savedAirport)
    console.log('date', this.props.result.date)
    return (
      <div className="mb-10">
        <div className="d-flex text-center">
          <div className="col-3">
            <h5 className="render">Depart:</h5>
            {this.props.result.savedAirport.map((value, i) => {
              if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
                return <h6 key={i}>{value.estDepartureAirport}</h6>
              }
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Arrive:</h5>
            {this.props.result.savedAirport.map((value, i) => {
              if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
                return <h6 key={i}>{value.estArrivalAirport}</h6>
              }
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Flight#:</h5>
            {this.props.result.savedAirport.map((value, i) => {
              if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
                return <h6 key={i}>{value.callsign}</h6>
              }
            })}
          </div>
          <div className="col-3">
            <h5 className="render">Airline:</h5>
            {this.props.result.savedAirport.map((value, i) => {
              if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
                if (String(value.callsign).startsWith('DAL')) {
                } else if (String(value.callsign).startsWith('AAL')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/american.png" alt="United" />
                    </div>
                  )
                } else if (String(value.callsign).startsWith('ASA')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/alaska.jpg" alt="Alaska" />
                    </div>
                  )
                } else if (String(value.callsign).startsWith('SWA')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/southwest.jpg" alt="Alaska" />
                    </div>
                  )
                } else if (String(value.callsign).startsWith('UAL')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/united.jpg" alt="United" />
                    </div>
                  )
                } else if (String(value.callsign).startsWith('SKW')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/skywest.png" alt="skywest" />
                    </div>
                  )
                } else if (String(value.callsign).startsWith('NKS')) {
                  return (
                    <div key={i} className="d-flex justify-content-around align-items-center">

                      <img className="airline" src="/images/airlines/spirit.jpg" alt="spirit" />
                    </div>
                  )
                }
              }
              })}
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
        <div>{this.renderTimeDate()}</div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black">
          <div>{this.renderSavedAirport()}</div>
        </div>
        <div className="row align-items-end black">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <NavBottom />
          </div>
        </div>
      </div >
    )
  }
}

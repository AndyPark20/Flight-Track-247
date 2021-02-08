import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';
import NavBottom from '../components/navigationBottom'
import { Next } from 'react-bootstrap/esm/PageItem';




export default class SavedAirport extends React.Component {
  constructor(props) {
    super(props);
    this.renderTimeDate = this.renderTimeDate.bind(this)
    this.renderSavedAirport = this.renderSavedAirport.bind(this)
    this.saveAirportInfo = this.saveAirportInfo.bind(this)
    this.testing= this.testing.bind(this)
  }


  testing(){
    console.log('UPDATE AIRPORTRESULT',this.props.result)
  }

  renderTimeDate() {
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <h3>{`${this.props.result.code} ${this.props.result.type} `}</h3>
        <h5>{`${moment.unix(this.props.result.start).format("l")} ~ ${moment.unix(this.props.result.end).format("l")}`}</h5>
        <h5>{`${moment.unix(this.props.result.start).format('HH:mm')} ~ ${moment.unix(this.props.result.end).format('HH:mm')}`}</h5>
        <h5 className="flightFound">({this.props.result.savedAirport.length} Flights Found)</h5>
      </div>
    )
  }

  renderSavedAirport() {
    return (
      <div className="mb-10">
        <div className="row d-flex align-self-center">
          <div className="col-12">
            {this.props.result.savedAirport.map((value, i) => {
              if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
                if (String(value.callsign).startsWith('DAL')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom text-left">
                      <img className="airline" src="/images/airlines/delta.jpg" alt="Delta" />
                      <div className="d-flex flex-column">
                      <h6>Flight Number:</h6>
                      <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                      <h6>Departure:</h6>
                      <h5>{value.estDepartureAirport}</h5>
                       </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                      <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('AAL')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/american.png" alt="United" />
                      <div className="d-flex flex-column">
                          <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('ASA')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/alaska.jpg" alt="Alaska" />
                      <div className="d-flex flex-column">
                        <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('SWA')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/southwest.jpg" alt="Alaska" />
                      <div className="d-flex flex-column">
                        <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('UAL')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/united.jpg" alt="United" />
                      <div className="d-flex flex-column">
                        <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('SKW')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/skywest.jpg" alt="skywest" />
                      <div className="d-flex flex-column">
                        <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
                    </div>
                  )
                } else if (String(value.callsign).startsWith('NKS')) {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
                      <img className="airline" src="/images/airlines/spirit.jpg" alt="spirit" />
                      <div className="d-flex flex-column">
                        <h6>Flight Number:</h6>
                        <h5>{value.callsign}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Departure:</h6>
                        <h5>{value.estDepartureAirport}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Arrival:</h6>
                        <h5>{value.estArrivalAirport}</h5>
                      </div>
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

  saveAirportInfo(){
    fetch('/api/airport',{
      method:'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({
        code:this.props.result.code,
        start:this.props.result.start,
        date: this.props.result.date,
        end:this.props.result.end,
        type:this.props.result.type
      })
    })
    .then(res=>{
      return res.json()
    })
    .then(result=>{
      console.log(result)
    })
    .catch(err=>{
      return next(err)
    })
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column">
        {this.testing()}
        <div className="row align-items-start d-flex justify-content-between align-items-center px-4">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
          <a onClick={()=>this.saveAirportInfo()}><img className='save add' src="/images/add.png" alt="logo" /></a>
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

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
    console.log('TEST',this.props.result)
    return (
      <div className="d-flex flex-column align-items-center text-center">
        <h3>{`${this.props.result.type} @${this.props.result.code}`}</h3>
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

{/* <table>
  <thead>
    <tr className="d-flex justify-content-between">
      <th>Airline</th>
      <th>Flight#:</th>
      <th>Origin</th>
      <th>Arrival</th>
    </tr>
  </thead>
  <tbody>
    {this.props.result.savedAirport.map((value, i) => {
      if (value.estDepartureAirport !== null && (String(value.callsign).startsWith('DAL') || String(value.callsign).startsWith('AAL') || String(value.callsign).startsWith('ASA') || String(value.callsign).startsWith('SWA') || String(value.callsign).startsWith('UAL') || String(value.callsign).startsWith('SKW') || String(value.callsign).startsWith('NKS'))) {
        if (String(value.callsign).startsWith('DAL')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/delta.jpg" alt="Delta" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('AAL')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/american.png" alt="United" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('ASA')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/alaska.jpg" alt="Alaska" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('SWA')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/southwest.jpg" alt="Alaska" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('UAL')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/united.jpg" alt="United" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('SKW')) {
          return (
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/skywest.jpg" alt="skywest" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>
          )
        } else if (String(value.callsign).startsWith('NKS')) {
          return (
            // <div key={i} className="d-flex justify-content-between align-items-center border-bottom">
            <tr key={i}>
              <td><img className="airline" src="/images/airlines/spirit.jpg" alt="spirit" /></td>
              <td><h6>{value.callsign}</h6></td>
              <td><h6>{value.estDepartureAirport}</h6></td>
              <td><h6>{value.estArrivalAirport}</h6></td>
            </tr>

          )
        }
      }
    })}
  </tbody>
</table> */}

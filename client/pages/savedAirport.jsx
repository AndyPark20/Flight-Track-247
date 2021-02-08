import React from 'react';
import NavBottom from '../components/navigationBottom';
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';

export default class SavedAirport extends React.Component{
constructor(props){
  super(props);
  this.state=({value:[]})
  this.renderSavedAirport = this.renderSavedAirport.bind(this)
  this.selectAirport = this.selectAirport.bind(this)
}

componentDidMount(){
  fetch('/api/airport')
  .then(res=>{
    return res.json()})
    .then(result=>{
      this.setState({value:result})
    })
    .catch(err=>{
      console.error(err)
    })
}

  deleteAirport(info) {
    fetch(`api/deleteAirport/${info}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        return res.json()
      })
      .then(result => {
        const filtered = this.state.value.filter(values => {
          if (values.savedAirportId !== result.savedAirportId) {
            return values
          }
        })
        this.setState({ value: filtered })
      })
      .catch(err => {
        return err;
      })
  }

  selectAirport(event){
    console.log('airport happening',this.state.value)
    this.state.value.map((values,i)=>{
      if(parseInt(event.target.id) === values.savedAirportId){
        fetch(`/api/get/airport/${values.airportCode}/${values.date}/${values.endTime}/${values.startTime}/${values.type}`)
          .then(res => res.json())
          .then(result => {
            if (!result.error && this.state.value.length !==0) {
              console.log('Is this it?',result)
              this.props.selectedAirport({list:result, otherInfo:values})
              location.hash = 'airportResult';
              return result;
            }
          })
          .catch(err=>{
            console.error(err);
          })
      }
    })
  }

  renderSavedAirport() {
    return (
      <div className="mb-10">
        <div className="row d-flex align-self-center">
          <div className="col-12">
            {this.state.value.map((values, i) => {
                  return (
                    <div key={i} className="d-flex justify-content-between align-items-center border-bottom text-align text-center">
                      <a onClick={(event) => this.selectAirport(event)}><h4 id={values.savedAirportId} className="airportCode">{values.airportCode}</h4></a>
                      <div className="d-flex flex-column">
                        <h6>Start Date:</h6>
                        <h5 className="airportSavedInfo">{moment.unix(values.startTime).format("L")}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>End Date:</h6>
                        <h5 className="airportSavedInfo">{moment.unix(values.endTime).format("L")}</h5>
                      </div>
                      <div className="d-flex flex-column">
                        <h6>Time:</h6>
                        <h5 className="airportSavedInfo">{`${moment.unix(values.startTime).format('LT')}~${moment.unix(values.endTime).format('LT')}`}</h5>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <h6>Options:</h6>
                        <a onClick={()=>this.deleteAirport(values.savedAirportId)}><h5 className="airportSavedInfo delete">DELETE</h5></a>
                      </div>
                    </div>
                  )
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
        <div className="d-flex justify-content-center">
          <h3>Saved Airports</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black">
        <div>{this.renderSavedAirport()}</div>
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

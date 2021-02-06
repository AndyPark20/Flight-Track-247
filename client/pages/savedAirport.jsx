import React from 'react'
import Moment from 'react-moment';
import moment from 'moment';
import 'moment-timezone';
import { unix } from 'moment-timezone';
import NavBottom from '../components/navigationBottom'



export default class SavedAirport extends React.Component{
constructor(props){
  super(props);
  this.testing =this.testing.bind(this)
}

testing(){
  this.render
  console.log('IN SAVED AIRPORT',this.props.result)
}

render(){
  return (
    <div className="savedAirportContainer">
      <div className="row">
        <div className="col align-self-center">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
          <div className="savedFlightTitle">
            <h3>Departure</h3>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

        </div>
        <div className="col align-self-end navBottom">
            <NavBottom />

        </div>
      </div>
    </div>
  )
}
}

import React from 'react';
import MyContext from '../lib/context';
import Moment from 'react-moment';
import 'moment-timezone'

export default class PopUp extends React.Component{
  constructor(props){
    super(props);
    this.planeInfo = this.planeInfo.bind(this);
  }

  renderCountry(){
    const flightCiao = this.props.flight;
    console.log(flightCiao)
    if(this.context !==undefined){
      const flag = this.context.map((values,i)=>{
        if(values[0]===flightCiao){
          if(values[2]==="United States"){
            return <img key={i} className="flag" src="/images/usa.png" alt="American Flag"/>
          }else if(values[2] === "Mexico"){
            return <img key={i} className="flag" src="/images/mexico.png" alt="Mexican Flag" />
          }
        }
      })
      return flag;
    }
  }

  planeInfo(){
    if (this.context !== undefined) {
      const airplane = this.context.map((values, i) => {
        if (values[0] === this.props.flight) {
          return (
            <div className="panel" key={i}>
              <div className="planeInfoRow">
                <div className="col-12 planeInfoSection">
                  <img className="airplaneLogo" src="/images/airplane.png" alt="airplane" />
                  <div className="planeInfo">
                    <p>Country of Reg.</p>
                    {this.renderCountry()}
                  </div>
                  <div className="planeInfo">
                    <p>Flight No.</p>
                    <p>{values[1]}</p>
                  </div>
                  <div className="planeInfo">
                    <p>Last Seen</p>
                    <Moment className="size" unix tz="America/Los_Angeles">{values[3]}</Moment>
                  </div>
                </div>
              </div>
              <div className="col-12 planeInfoSection">
                <img className="airplaneLogo" src="images/gauge.png" alt="instrument cluster" />
                <div className="planeInfo">
                  <p>Altitude</p>
                  <p>{Math.round(values[7] * 3.28084)}ft</p>
                </div>
                <div className="planeInfo">
                  <p>Velocity</p>
                  <p>{Math.round(values[9] * 2.23694)}mph</p>
                </div>
                <div className="planeInfo">
                  <p>Vertical rate</p>
                  <p>{Math.round(values[11] * 2.23694)}mph</p>
                </div>
              </div>
              <div className="col-12 planeInfoSection">
                <img className="airplaneLogo" src="images/altitude.png" alt="altitude meter" />
                <div className="planeInfo">
                  <p>Latitude</p>
                  <p>{values[6]}&deg; </p>
                </div>
                <div className="planeInfo">
                  <p>Longitude</p>
                  <p>{values[5]}&deg; </p>
                </div>
                <div className="planeInfo">
                  <p>Track</p>
                  <p>{values[10]}&deg; </p>
                </div>
              </div>
              <div className="col-12 planeInfoSection">
                <img className="airplaneLogo" src="images/radar.png" alt="radar" />
                <div className="planeInfo">
                </div>
                <div className="planeInfo">
                  <p>ICAO 24-bit</p>
                  <p>{values[0]}</p>
                </div>
                <div className="planeInfo">
                  <p>Squawk</p>
                  <p>{values[14]}</p>
                </div>
              </div>
              <div className="col-12 planeInfoSection ">
                <button>SAVE FLIGHT</button>
              </div>
            </div>

          )
        }
      })
      return airplane;
    }
  }

  render() {
    return (
      <div className="pop">
        <div className="row">
          <div className="column">
            {this.planeInfo()}
          </div>
        </div>
      </div>
    );
  }
}

PopUp.contextType = MyContext

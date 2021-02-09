import React from 'react';
import MyContext from '../lib/context';
import 'moment-timezone';
import moment from 'moment';
import { unix } from 'moment-timezone';

export default class PopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ flight: '', userSaved: false})
    this.planeInfo = this.planeInfo.bind(this);
    this.changeView = this.changeView.bind(this);
    this.notifySaved = this.notifySaved.bind(this);
    this.changeSavedNotification=this.changeSavedNotification.bind(this);
  }


  changeView(event) {
    if (event.target.className === 'saveFlightBtnRed') {
      this.props.click()
    }
  }

  hidePopUp() {
    if (this.props.view) {
      return 'pop hidden';
    } else {
      return 'pop';
    }
  }

  changeSavedNotification(){
    this.setState({userSaved:false})
  }


  renderCountry() {
    const flightCiao = this.props.flight;
    if (this.context !== undefined) {
      const flag = this.context.map((values, i) => {
        if (values[0] === flightCiao) {
          if (values[2] === "United States") {
            return <img key={i} className="flag" src="/images/flags/usa.png" alt="American Flag" />
          } else if (values[2] === "Mexico") {
            return <img key={i} className="flag" src="/images/flags/mexico.png" alt="Mexican Flag" />
          } else if (values[2] === "Austrailia") {
            return <img key={i} className="flag" src="/images/flags/austrailia.jpg" alt="Austrailian Flag" />
          } else if (values[2] === "Austria") {
            return <img key={i} className="flag" src="/images/flags/austria.jpg" alt="Austrian Flag" />
          } else if (values[2] === "Belgium") {
            return <img key={i} className="flag" src="/images/flags/belgium.jpg" alt="Belgium Flag" />
          } else if (values[2] === "Brazil") {
            return <img key={i} className="flag" src="/images/flags/brazil.jpg" alt="Brazilian Flag" />
          } else if (values[2] === "Canada") {
            return <img key={i} className="flag" src="/images/flags/canada.jpg" alt="Canadian Flag" />
          } else if (values[2] === "Chile") {
            return <img key={i} className="flag" src="/images/flags/chile.jpg" alt="Chilean Flag" />
          } else if (values[2] === "China") {
            return <img key={i} className="flag" src="/images/flags/china.jpg" alt="China Flag" />
          } else if (values[2] === "Ethiopia") {
            return <img key={i} className="flag" src="/images/flags/ethiopia.jpg" alt="Ethiopian Flag" />
          } else if (values[2] === "France") {
            return <img key={i} className="flag" src="/images/flags/france.jpg" alt="French Flag" />
          } else if (values[2] === "Germany") {
            return <img key={i} className="flag" src="/images/flags/germany.jpg" alt="German Flag" />
          } else if (values[2] === "Greece") {
            return <img key={i} className="flag" src="/images/flags/greece.jpg" alt="Greek Flag" />
          } else if (values[2] === "Iceland") {
            return <img key={i} className="flag" src="/images/flags/iceland.jpg" alt="Iceland Flag" />
          } else if (values[2] === "India") {
            return <img key={i} className="flag" src="/images/flags/india.jpg" alt="Indian Flag" />
          } else if (values[2] === "Italy") {
            return <img key={i} className="flag" src="/images/flags/italy.jpg" alt="Italian Flag" />
          } else if (values[2] === "Kuwait") {
            return <img key={i} className="flag" src="/images/flags/kuwait.jpg" alt="Kuhwait Flag" />
          } else if (values[2] === "Qatar") {
            return <img key={i} className="flag" src="/images/flags/qatar.jpg" alt="Qatar Flag" />
          } else if (values[2] === "Singapore") {
            return <img key={i} className="flag" src="/images/flags/singapore.jpg" alt="Singapore Flag" />
          } else if (values[2] === "Republic of Korea") {
            return <img key={i} className="flag" src="/images/flags/southKorea.jpg" alt="S. Korean Flag" />
          } else if (values[2] === "Spain") {
            return <img key={i} className="flag" src="/images/flags/spain.jpg" alt="spain Flag" />
          } else if (values[2] === "Taiwan") {
            return <img key={i} className="flag" src="/images/flags/taiwan.jpg" alt="Taiwan Flag" />
          } else if (values[2] === "United Kingdom") {
            return <img key={i} className="flag" src="/images/flags/unitedKingdom.jpg" alt="U.K. Flag" />
          } else if (values[2] === "Turkey") {
            return <img key={i} className="flag" src="/images/flags/turkey.jpg" alt="Turkey Flag" />
          } else if (values[2] === "Switzerland") {
            return <img key={i} className="flag" src="/images/flags/switzerland.jpg" alt="Switzerland Flag" />
          } else if (values[2] === "Portugal") {
            return <img key={i} className="flag" src="/images/flags/portugal.jpg" alt="Portgual Flag" />
          } else if (values[2] === "Indoesia") {
            return <img key={i} className="flag" src="/images/flags/portugal.jpg" alt="Indoesian Flag" />
          } else if (values[2] === "Japan") {
            return <img key={i} className="flag" src="/images/flags/japan.jpg" alt="Japan Flag" />
          }
      }
    })
      return flag;
  }
}

  notifySaved(){
    if(this.state.userSaved){
      return <h6 className="notifySaved">Saved!</h6>
    }
  }

  saveFlight(event, values) {
    event.stopPropagation();
    const unixTime = ((new Date().getTime() / 1000).toFixed(0))
    const req = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({icao24: values, time: unixTime})
    }
    fetch('/api/flight', req)
      .then(res => res.json())
      .then(result => {
        if(result.length === 1){
          this.setState({userSaved:true})
        }
        return result;
      })
      .catch(err=>{
        console.error(err)
      })
  }

  planeInfo() {
    if (this.context !== undefined) {
      const airplane = this.context.map((values, i) => {
        if (values[0] === this.props.flight) {
          return (
            <div className="panel" key={i}>
              <div className="planeInfoRow">
                <div className="col-12 planeInfoSection">
                  <img className="airplaneLogo" src="/images/airplane.png" alt="airplane" />
                  <div className="planeInfo">
                    <p>{values[2]}</p>
                    {this.renderCountry()}
                  </div>
                  <div className="planeInfo">
                    <p>Flight No.</p>
                    <p>{values[1]}</p>
                  </div>
                  <div className="planeInfo">
                    <p>Last Seen</p>
                    <p>{moment.unix(values[3]).format('LT')}</p>
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
                  {this.notifySaved()}
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
              <div className="planeInfoSection flightOption">
                <button className="saveFlightBtn" onClick={(event) => { this.saveFlight(event, values[0]) }}>SAVE FLIGHT</button>
                <button className="saveFlightBtnRed">CLOSE</button>
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
      <div className={this.hidePopUp()} onClick={(event) => this.changeView(event)}>
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

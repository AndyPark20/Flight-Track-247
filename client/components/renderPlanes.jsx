import { popup } from 'leaflet';
import React from 'react';
import { MapContainer, CircleMarker, Popup, TileLayer, Marker } from 'react-leaflet';
import Home from '../pages/home';
import PopUp from './popup';


export default class PlaneRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flightCiao: '', view: false, userSaved:null}
    this.renderPlane = this.renderPlane.bind(this)
    this.accessChildMethod = this.accessChildMethod.bind(this)
  }

  accessChildMethod(){
    this.refs.child.changeSavedNotification()
  }

  renderPlane() {
    if (this.props.planeDot !== undefined) {
      const planes = this.props.planeDot.map((values, i) => {
        if (values[6] !== null && values[5] !== null) {
          return (
            <CircleMarker key={i} center={[values[6], values[5]]} radius={4.5} opacity={.5} color={"#000"} fillColor={'red'} fillOpacity={0.8} eventHandlers={{ click: () => { this.setState({ flightCiao: values[0], view: false, userSaved:false}), this.accessChildMethod()} }}>
            </CircleMarker>)
        }
      })
      return planes;
    }
  }

  render() {
    let popUp = null;
    if (!this.state.view) {
      popUp = <PopUp flight={this.state.flightCiao} ref="child" click={() => this.setState({ view: true})} />;
    }
    return (
      <div>
        {this.renderPlane()}
        {popUp}
      </div>
    )
  }
}

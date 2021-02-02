import React from 'react';
import { MapContainer, CircleMarker, Popup, TileLayer, Marker } from 'react-leaflet';
import Home from '../pages/home';
import PopUp from './popup';

export default class PlaneRender extends React.Component {
  constructor(props) {
    super(props);
    this.state={flightCiao:''}
    this.renderPlane = this.renderPlane.bind(this)
  }

  renderPlane() {
    if (this.props.planeDot !== undefined) {
      const planes = this.props.planeDot.map((values, i) => {
        if (values[6] !== null && values[5] !== null) {
          return (
            <CircleMarker key={i} center={[values[6], values[5]]} radius={4.5} opacity={.5} color={"#000"} fillColor={'red'} fillOpacity={0.8} eventHandlers={{ click: () => { this.setState({ flighted: values[0] }) } }}>
            </CircleMarker>)
        }
      })
      return planes;
    }
  }
  render() {
    return (
    <div>{this.renderPlane()}
        <PopUp flight={this.state.flightCiao} />
    </div>
    )
  }
}

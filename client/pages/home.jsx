import React from 'react';
import Nav from '../components/navigationTop';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <Nav />
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <MapContainer className="leaflet" center={[35.0522, -118.2437]} zoom={4} minZoom={3} maxBoundsViscosity={1.0} worldCopyJump={true} zoomControl={false} >
              <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" zoomControl={false} />
            </MapContainer >
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <Nav />
          </div>
        </div>
      </div>
    )
  }
}

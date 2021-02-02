import React from 'react';
import Nav from '../components/navigationTop';
import NavBottom from '../components/navigationBottom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Home extends React.Component {
  render() {
    return (
      <div className="container container-sm container-md container-lg container-xl container-fluid">
        <div className="d-flex flex-column">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="fixed-top">
              <Nav />
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <MapContainer className="leaflet" center={[35.0522, -118.2437]} zoom={4} minZoom={3} maxBoundsViscosity={1.0} worldCopyJump={true} zoomControl={false} >
              <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" zoomControl={false} />
            </MapContainer >
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="footer fixed-bottom">
            <NavBottom />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

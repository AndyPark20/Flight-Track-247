import React from 'react';
import Nav from '../components/navigationTop';
import NavBottom from '../components/navigationBottom';
import PlaneRender from '../components/renderPlanes';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state=({value:[]})
  }

  componentDidMount(){
    this.getData()
  }

  getData() {
      fetch('https://opensky-network.org/api/states/all', {
        method: 'GET',
        headers: { 'Content-type': 'application/json' }
      })
        .then(res => {
          return res.json()
        })
        .then(data => {
          const sliced = data.states.slice(0, 750)
          this.setState({ value: sliced})
          console.log(this.state)
        })
        .catch(err=>{
          console.error(err)
        })
      }

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
              <PlaneRender planeDot={this.state.value} click={this.testing} />
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

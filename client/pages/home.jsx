import React from 'react';
import Nav from '../components/navigationTop';
import NavBottom from '../components/navigationBottom';
import PlaneRender from '../components/renderPlanes';
import Loader from '../lib/loading';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MyContext from '../lib/context';
import PopUp from '../components/popup';
import LandedPlane from '../lib/landedPlane';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: [], load: false, pinPointPlane: false, icao: '', savedFlight:'' })
    this.updateSearch = this.updateSearch.bind(this)
    this.getData = this.getData.bind(this)
    this.getSinglePlane = this.getSinglePlane.bind(this)
  }

  componentDidMount() {
    this.setState({ savedFlight: this.props.savedPlanes })
    this.getData()
  }

  getData() {
    const fetchController = new AbortController();
    const { signal } = fetchController;
    let time = setTimeout(() => {
      fetchController.abort();
    }, 30000)
    fetch('/api/all', { signal })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if(Boolean(this.state.icao) || Boolean(this.state.savedFlight)){
          fetchController.abort();
        }else{
          clearTimeout(time);
          const sliced = data.states.slice(0, 750)
          this.setState({ value: sliced, load: true, pinPointPlane: false })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  getSinglePlane() {
    clearInterval(this.intervalId)
    fetch(`/api/select/${this.state.icao}`)
      .then(result => {
        return result.json();
      })
      .then(info => {
        if (info !== null || info !== undefined) {
          const slicedSolo = info.states.slice(0, 1)
          this.setState({ value: slicedSolo, load: true, pinPointPlane: true })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidUpdate(pP, pS, sS) {
    if(pS.savedFlight !==this.state.savedFlight){
      clearInterval(this.intervalId)
      const savedicao = this.props.savedPlanes
      fetch(`/api/select/${savedicao}`)
        .then(result => {
          return result.json();
        })
        .then(info => {
          if (info.states ===null) {
            console.log('IT IS RIGHT HERE')
            this.setState({load:true})
          }else if (info.states !== null || info.states !== undefined) {
            const slicedSolo = info.states.slice(0, 1)
            this.setState({ value: slicedSolo, load: true, pinPointPlane: true })
          }
        })
        .catch(err => {
          console.error(err)
        })
    }
    if(this.state.value !== pS.value && !pS.icao && !pS.savedFlight){
       clearInterval(this.intervalId)
       this.intervalId = setInterval(() => this.getData(), 30000)
    }
  }

  updateSearch(event) {
    this.setState({ icao: event.target.value })
    if (event.key === 'Enter') {
      this.setState({ pinPointPlane: true, load: false })
      this.getSinglePlane()
    }
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {
    return (
      <MyContext.Provider value={this.state.value} >
        <div className="container container-sm container-md container-lg container-xl container-fluid">
          <div className="d-flex flex-column">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="fixed-top">
                <Nav update={this.updateSearch} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="fixed">
                <PopUp />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="loader">
                <Loader spinLoad={this.state.load} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="loader">
                <LandedPlane spinLoad={this.state.load} planeArray={this.state.value} />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <MapContainer className="leaflet" center={[43.0522, -118.2437]} zoom={4} minZoom={3} maxBoundsViscosity={1.0} worldCopyJump={true} zoomControl={false} >
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" zoomControl={false} />
                <PlaneRender planeDot={this.state.value} click={this.testing} />
              </MapContainer >
            </div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="footer fixed-bottom">
                <NavBottom refresh={this.props.refresh} />
              </div>
            </div>
          </div>
        </div>
      </ MyContext.Provider>
    );
  }
}

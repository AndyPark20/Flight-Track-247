import React from 'react';
import Home from './pages/home';
import LoginPage from './pages/logInPage';
import { parseRoute } from './lib';
import DropDown from './pages/dropDown';
import SavedFlights from './pages/savedFlights';
import MyContext from './lib/context';
import SearchAirport from './pages/searchAirport';
import AirportResult from './pages/airportResult';
import SavedAirport from './pages/savedAirport';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icao24: '',
      user: false,
      route: parseRoute(window.location.hash),
      savedAirport: [],
      code:[]
    };

    this.signIn = this.signIn.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.retrievePlane = this.retrievePlane.bind(this);
    this.retrieveAirport = this.retrieveAirport.bind(this);
    this.savedAirportRetrieve = this.savedAirportRetrieve.bind(this)
    this.testing = this.testing.bind(this)

  }

  signIn(message) {
    const { password, userId } = message;
    if (password && userId) {
      this.setState({ user: true })
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const changedHash = window.location.hash;
      const parsed = parseRoute(changedHash);
      this.setState({ route: parsed });
    });
  }

  retrievePlane(event) {
    this.setState({ icao24: event })
  }

  retrieveAirport(event) {
    this.setState({
      savedAirport: event.list,
      code: event.code,
      date: event.date,
      start: event.start,
      end: event.end,
      type: event.type.charAt(0).toUpperCase() + event.type.slice(1)
    });
  }

  savedAirportRetrieve(event){
    console.log('LOOK HERE!',event)
    console.log('WHAT IS THE CODE', event.otherInfo.airportCode)
    this.setState({
      savedAirport:event.list,
      code: event.otherInfo.airportCode,
      date: event.otherInfo.date,
      start:event.otherInfo.startTime,
      end:event.otherInfo.endTime,
      type: event.otherInfo.type.charAt(0).toUpperCase() + event.otherInfo.type.slice(1)
    });
  }

  testing(){
    console.log(this.state)
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === "home") {

      return <Home refresh={this.state.route.path} savedPlanes={this.state.icao24} />;
    }
    if (route.path === "") {
      return <LoginPage signIn={this.signIn} />;
    }
    if (route.path === "save") {
      return <DropDown />;
    }
    if (route.path === "flights") {
      return <SavedFlights retrieve={this.retrievePlane} />
    }
    if (route.path === 'searchAirport') {
      return <SearchAirport find={this.retrieveAirport} />
    }
    if (route.path === 'airportResult') {
      return <AirportResult result={this.state} airportData={this.state} />
    }
    if(route.path ==='savedAirport'){
      return <SavedAirport airportData={this.state} selectedAirport={this.savedAirportRetrieve} />
    }
  }

  render() {
    return(
      <div>
        {this.testing()}
    <div className="mainContainer">{this.renderPage()}</div>
      </div>
    )

  }
}

App.contextType = MyContext

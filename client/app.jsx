import React from 'react';
import Home from './pages/home';
import LoginPage from './pages/logInPage';
import { parseRoute } from './lib';
import DropDown from './pages/dropDown';
import SavedFlights from './pages/savedFlights';
import MyContext from './lib/context';
import SearchAirport from './pages/searchAirport';
import SavedAirport from './pages/savedAirport';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icao24: '',
      user: false,
      route: parseRoute(window.location.hash),
      savedAirport: [
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA",callsign:'DAL1234'},
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign:'UAL'},
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign:'AAL'},
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign:'ASA'},
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign:'SWA'},
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign:'UAL'},
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign:'SKW'},
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign:'NKS'},
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA", callsign: 'DAL' },
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign: 'AAL' },
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign: 'ASA' },
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign: 'SWA' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' },
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA", callsign: 'DAL' },
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign: 'AAL' },
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign: 'ASA' },
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign: 'SWA' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' },
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA", callsign: 'DAL' },
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign: 'AAL' },
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign: 'ASA' },
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign: 'SWA' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' },
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA", callsign: 'DAL' },
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign: 'AAL' },
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign: 'ASA' },
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign: 'SWA' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' },
        { icao24: "adbdd9", firstSeen: 1612477701, estDepartureAirport: "KSNA", lastSeen: 1612480150, estArrivalAirport: "KSNA", callsign: 'DAL' },
        { icao24: "abeb7c", firstSeen: 1612476374, estDepartureAirport: "KOAK", lastSeen: 1612480129, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a96ad2", firstSeen: 1612475254, estDepartureAirport: "KSNA", lastSeen: 1612479890, estArrivalAirport: "KSNA", callsign: 'AAL' },
        { icao24: "ad7c57", firstSeen: 1612478320, estDepartureAirport: "KSNA", lastSeen: 1612479257, estArrivalAirport: "KSNA", callsign: 'ASA' },
        { icao24: "a118cb", firstSeen: 1612476152, estDepartureAirport: "95CA", lastSeen: 1612479100, estArrivalAirport: "KSNA", callsign: 'SWA' },
        { icao24: "a88ccf", firstSeen: 1612475470, estDepartureAirport: "KPHX", lastSeen: 1612479000, estArrivalAirport: "KSNA", callsign: 'UAL' },
        { icao24: "a0efa9", firstSeen: 1612477481, estDepartureAirport: "KSNA", lastSeen: 1612478880, estArrivalAirport: "KSNA", callsign: 'SKW' },
        { icao24: "a5050e", firstSeen: 1612476545, estDepartureAirport: "KLAS", lastSeen: 1612478825, estArrivalAirport: "KSNA", callsign: 'NKS' }
      ]
    };

    this.signIn = this.signIn.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.retrievePlane = this.retrievePlane.bind(this);
    this.retrieveAirport = this.retrieveAirport.bind(this);

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
      code: event,
      date: event.date,
      start: event.start,
      end: event.end,
      type: event.type.charAt(0).toUpperCase() + event.type.slice(1)
    });
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
    if (route.path === 'savedAirport') {
      return <SavedAirport result={this.state} />
    }
  }

  render() {
    return <div className="mainContainer">{this.renderPage()}</div>

  }
}

App.contextType = MyContext

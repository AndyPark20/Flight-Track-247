import React from 'react';
import Home from './pages/home';
import LoginPage from './pages/logInPage';
import { parseRoute } from './lib';
import DropDown from './pages/dropDown';
import SavedFlights from './pages/savedFlights';
import MyContext from './lib/context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icao24:'',
      user: false,
      route: parseRoute(window.location.hash),

    };
    this.signIn=this.signIn.bind(this);
    this.renderPage=this.renderPage.bind(this);
    this.retrievePlane = this.retrievePlane.bind(this)

  }

  signIn(message) {
    const { password, userId } = message;
    if (password && userId) {
      this.setState({ user: true})
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const changedHash = window.location.hash;
      const parsed = parseRoute(changedHash);
      this.setState({ route: parsed });
    });
  }

  retrievePlane(event){
    this.setState({icao24:event})
  }


  renderPage() {
    const { route } = this.state;
    if (route.path === "home") {

      return <Home refresh={this.state.route.path} savedPlanes={this.state.icao24} />;
    }
    if(route.path === "") {
      return <LoginPage signIn={this.signIn}/>;
    }
    if(route.path ==="save"){
      return <DropDown />;
    }
    if(route.path ==="flights"){
      return <SavedFlights retrieve={this.retrievePlane} />
    }
  }

  render() {
    return <div className="mainContainer">{this.renderPage()}</div>

  }
}

App.contextType = MyContext

import React from 'react';
import Home from './pages/home';
import LoginPage from './pages/logInPage';
import { parseRoute } from './lib';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      route: parseRoute(window.location.hash),

    };
    this.signIn=this.signIn.bind(this);

  }

  signIn(message) {
    console.log(message)
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

  renderPage() {
    const { route } = this.state;
    if (this.state.user || route.path ==='home') {
      return <Home />;
    }
    if (route.path === '') {
      return <LoginPage signIn={this.signIn}/>;
    }
  }

  render() {
    return (
        <div className="mainContainer">{this.renderPage()}</div>
    );

  }
}

import React from 'react';
import NavBottom from '../components/navigationBottom';
import moment from 'moment';
import MyContext from '../lib/context';

export default class Savedflights extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ saved: [], airplaneId: null, listHide: true });
    this.renderSavedFlights = this.renderSavedFlights.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
    this.modal = this.modal.bind(this);
    this.cancel = this.cancel.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount() {
    fetch('api/flight')
      .then(res => res.json())
      .then(result => {
        this.setState({ saved: result });
      });
  }

  modal() {
    if (this.state.airplaneId) {
      return 'textStyleModal';
    } else {
      return 'hidden';
    }
  }

  hide() {
    if (this.state.listHide) {
      return '';
    } else {
      return 'hidden';
    }
  }

  cancel() {
    this.setState({ airplaneId: null, listHide: true });
  }

  deleteFlight() {
    fetch(`api/delete/${this.state.airplaneId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        const filtered = this.state.saved.filter(values => {
          if (values.flightId !== result.flightId) {
            return values;
          }
        });
        this.setState({ saved: filtered, listHide: true, airplaneId: null });
      })
      .catch(err => {
        return err;
      });
  }

  renderSavedFlights() {
    const savedFlight = this.state.saved.map((values, i) => {
      return (
        <div key={i} className="d-flex justify-content-between align-items-center border-bottom text-align text-center">
          <a href="#home" onClick={() => this.props.retrieve(values.icao24)}><h4 className="icaoNumber">{values.icao24}</h4></a>
          <div className="d-flex flex-column">
            <h6>Date:</h6>
            <h5 className="renderSavedTime" key={i}>{moment.unix(values.time).format('MMM Do YY')}</h5>
          </div>
          <div className="d-flex flex-column">
            <h6>Time:</h6>
            <h5 className="renderSavedTime" key={i}>{moment.unix(values.time).format('LT')}</h5>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h6>Options:</h6>
            <a onClick={() => this.setState({ airplaneId: values.flightId, listHide: false })}><h5 className="airportSavedInfo delete">DELETE</h5></a>
          </div>
        </div>
      );
    });

    return savedFlight;
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column">
        <div className="row align-items-start d-flex justify-content-start pl-3">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Saved Flights</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black">
          <div className={this.hide()}>{this.renderSavedFlights()}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black fix">
          <div className={this.modal()}>
            <div className="deleteConfirmation">
              <p className="loaderTextDelete">{`Are you sure you want to delete ${this.state.airportCode}?`}</p>
              <div className="d-flex justify-content-around">
                <button onClick={this.deleteFlight} type="button" className="btn btn-danger">Delete</button>
                <button onClick={this.cancel} type="button" className="btn btn-warning">Cancel</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-end black">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
            <NavBottom />
          </div>
        </div>
      </div>
    );
  }
}

Savedflights.contextType = MyContext;

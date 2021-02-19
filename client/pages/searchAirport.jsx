import React from 'react';
import NavBottom from '../components/navigationBottom';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Loader from '../lib/loadingAirport';

export default class SearchAirport extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      code: '',
      date: null,
      start: null,
      end: null,
      type: '',
      list: [],
      loader: true,
      firstModal: false
    });
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formView = this.formView.bind(this);
    this.modal = this.modal.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  formView() {

    if (this.state.loader && this.state.firstModal) {
      return 'col d-flex justify-content-center';
    } else {
      return 'hidden';
    }
  }

  modal() {
    if (this.state.firstModal) {
      return 'hidden';
    } else {
      return 'textStyleModal';
    }
  }

  cancel() {
    this.setState({ firstModal: true });
  }

  handleInputChange(event) {
    const target = event.target.name;
    if (target === 'airportCode') {
      this.setState({ code: event.target.value });
    } else if (target === 'startTime') {
      const startUnix = moment(event.target.value).unix();
      const currentDate = moment(new Date()).unix();
      this.setState({ start: startUnix, date: currentDate });
    } else if (target === 'endTime') {
      const endUnix = moment(event.target.value).unix();
      this.setState({ end: endUnix });
    } else if (target === 'dOrA') {
      const typeLowered = event.target.value.toLowerCase();
      this.setState({ type: typeLowered });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ loader: false });
    fetch(`/api/get/airport/${this.state.code}/${this.state.date}/${this.state.end}/${this.state.start}/${this.state.type}`)
      .then(res => res.json())
      .then(result => {
        if (!result.error) {
          this.setState({ list: result, loader: true });
          this.props.find(this.state);
          location.hash = 'airportResult';
          return result;
        }
      });
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column">
        <div className="row align-items-start d-flex justify-content-start pl-3">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Search Airport</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black fix">
          <div className={this.modal()}>
            <div className="deleteConfirmation">
              <p className="loaderTextDelete">1. Please note that search airport can only retrieve arrival and departure schedule up to 7 days prior to current date.</p>
              <p></p>
              <p className="loaderTextDelete">2. Current date search will be available after 7:00pm pacfic time after server has been updated</p>
              <div className="d-flex justify-content-around">
                <button onClick={this.cancel} type="button" className="btn btn-warning">Ok</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center d-flex justify-content-center px-2 vh-100 black">
          <Loader spinning={this.state.loader} />
          <div className={this.formView()}>
            <form className="airportForm" onSubmit={this.handleSubmit} >
              <label className="labelStyle"> Airport Code:</label>
              <input className="inputStyle" type="text" name="airportCode" placeholder="KSNA=John Wayne Airport" onChange={this.handleInputChange} required></input>
              <label className="labelStyle">Airport schedule start-time:</label>
              <input className="inputStyle" type="datetime-local" name="startTime" onChange={this.handleInputChange} required></input>
              <label className="labelStyle">Airport schedule end-time:</label>
              <input className="inputStyle" type="datetime-local" name="endTime" onChange={this.handleInputChange} required></input>
              <label className="labelStyle selectForm">  Departure or Arrival:
                <select name="dOrA" onChange={this.handleInputChange} required>
                  <option value="">Please Select</option>
                  <option value="Arrival" >Arrival</option>
                  <option value="Departure" >Departure</option>
                </select>
              </label>
              <div className="btnSubmit">
                <Button type="submit" className="buttonStyle" variant="primary">SUBMIT</Button>
              </div>
            </form>
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

{ /* <input className="inputStyle" type="text" name="dOrA" placeholder="departure or arrival" onChange={this.handleInputChange} required></input> */ }

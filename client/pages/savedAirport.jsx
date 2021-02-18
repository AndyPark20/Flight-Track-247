import React from 'react';
import NavBottom from '../components/navigationBottom';
import moment from 'moment';
import Loader from '../lib/loadingAirport';

export default class SavedAirport extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: [], loader: true, listHide: true, airportId: null, airportCode: '' });
    this.renderSavedAirport = this.renderSavedAirport.bind(this);
    this.selectAirport = this.selectAirport.bind(this);
    this.formView = this.formView.bind(this);
    this.deleteAirport = this.deleteAirport.bind(this);
    this.modal = this.modal.bind(this);
    this.cancel = this.cancel.bind(this);

  }

  componentDidMount() {
    fetch('/api/airport')
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({ value: result });
      })
      .catch(err => {
        console.error(err);
      });
  }

  formView() {
    if (this.state.listHide) {
      return '';
    } else {
      return 'hidden';
    }
  }

  modal() {
    if (this.state.airportId) {
      return 'textStyleModal';
    } else {
      return 'hidden';
    }
  }

  cancel() {
    this.setState({ airportId: null, listHide: true });
  }

  deleteAirport() {
    fetch(`api/deleteAirport/${this.state.airportId}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        const filtered = this.state.value.filter(values => {
          if (values.savedAirportId !== result.savedAirportId) {
            return values;
          } else {
            return false;
          }
        });
        this.setState({ value: filtered, airportId: null, listHide: true });
      })
      .catch(err => {
        return err;
      });
  }

  selectAirport(event) {
    this.setState({ loader: false, listHide: false });
    this.state.value.forEach((values, i) => {
      if (parseInt(event.target.id) === values.savedAirportId) {
        fetch(`/api/get/airport/${values.airportCode}/${values.date}/${values.endTime}/${values.startTime}/${values.type}`)
          .then(res => res.json())
          .then(result => {
            if (!result.error && this.state.value.length !== 0) {
              this.setState({ list: result, loader: true, listHide: true });
              this.props.selectedAirport({ list: result, otherInfo: values });
              location.hash = 'airportResult';
              return result;
            }
          })
          .catch(err => {
            console.error(err);
          });
      }
    });
  }

  renderSavedAirport() {
    const airportArray = this.state.value.map((values, i) => {
      return (
        <div key={i} className="d-flex justify-content-between align-items-center border-bottom text-align text-center">
          <a onClick={event => this.selectAirport(event)}><h4 id={values.savedAirportId} className="airportCode">{values.airportCode}</h4></a>
          <div className="d-flex flex-column">
            <h6>Start Date:</h6>
            <h5 className="airportSavedInfo">{moment.unix(values.startTime).format('L')}</h5>
          </div>
          <div className="d-flex flex-column">
            <h6>End Date:</h6>
            <h5 className="airportSavedInfo">{moment.unix(values.endTime).format('L')}</h5>
          </div>
          <div className="d-flex flex-column">
            <h6>Time:</h6>
            <h5 className="airportSavedInfo">{`${moment.unix(values.startTime).format('LT')}~${moment.unix(values.endTime).format('LT')}`}</h5>
          </div>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h6>Options:</h6>
            <a onClick={() => this.setState({ airportId: values.savedAirportId, airportCode: values.airportCode, listHide: false }, this.modal)}><h5 className="airportSavedInfo delete">DELETE</h5></a>
          </div>
        </div>
      );
    });
    return (
      <div className="mb-10">
        <div className="row d-flex align-self-center">
          <div className="col-12">
            {airportArray}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="vh-100 w-100 black d-flex flex-column position-relative">
        <div className="row align-items-start d-flex justify-content-start pl-3">
          <a href="#save"><img className='homeLogo save' src="/images/back.png" alt="logo" /></a>
        </div>
        <div className="d-flex justify-content-center">
          <h3>Saved Airports</h3>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black">
          <Loader spinning={this.state.loader} />
          <div className={this.formView()}>{this.renderSavedAirport()}</div>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 black fix">
          <div className={this.modal()}>
            <div className="deleteConfirmation">
              <p className="loaderTextDelete">{`Are you sure you want to delete ${this.state.airportCode}?`}</p>
              <div className="d-flex justify-content-around">
                <button onClick={this.deleteAirport} type="button" className="btn btn-danger">Delete</button>
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

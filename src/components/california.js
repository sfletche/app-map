import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchActiveApplications,
  fetchFundedApplications,
  fetchAvailabilityRequests,
} from '../actions';
import { greenIcon, blueIcon, greyIcon } from '../constants/icons';
import Loading from './loading';
import RfMap from './rf-map';

class California extends Component {
  componentDidMount() {
    this.props.fetchActiveApplications();
    this.props.fetchFundedApplications();
    this.props.fetchAvailabilityRequests();
    this.startPoll();
  }

  startPoll() {
    setInterval(() => this.props.fetchAvailabilityRequests(), 300);
  }

  getMapLayers(activeApps, fundedApps, cities) {
    return [
      {
        name: 'Active Applications',
        data: activeApps,
        icon: blueIcon,
      },
      {
        name: 'Funded Applications',
        data: fundedApps,
        icon: greenIcon,
      },
      {
        name: 'Cities',
        checked: true,
        data: cities,
        icon: greyIcon,
      },
    ];
  }

  getMap(activeApps, fundedApps, cities) {
    const layers = [activeApps, fundedApps, cities];
    const hasApps = _.every(layers, 'length');
    const layerObjs = hasApps && this.getMapLayers(activeApps, fundedApps, cities);
    return hasApps ? <RfMap center={[37.5, -120]} zoom={6} layers={layerObjs} /> : <Loading />
  }

  getCityList(cities) {
    const orderedCities = _.takeRight(cities, 3).reverse();
    return (
      <div>
        {orderedCities[0] && <p key={orderedCities[0].name} className="fade-in">{orderedCities[0].name}</p>}
        {orderedCities.slice(1,3).map(city => <p key={city.name}>{city.name}</p>)}
      </div>
    );
  }

  render() {
    const { activeApps, fundedApps, cities } = this.props;
    return (
      <div>
        <h1>California Availability Checks</h1>
        {this.getMap(activeApps, fundedApps, cities)}
        {this.getCityList(cities)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeApps: state.map.applications.activeApps,
  fundedApps: state.map.applications.fundedApps,
  cities: state.map.applications.caCities,
});

export default connect(
  mapStateToProps,
  { fetchActiveApplications, fetchFundedApplications, fetchAvailabilityRequests }
)(California)

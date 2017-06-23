import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  fetchActiveApplications,
  fetchFundedApplications,
  fetchAvailabilityRequests,
} from '../actions';
import { greenIcon, blueIcon, greyIcon } from '../constants/icons';
import { california as caCoords } from '../constants/map-coords';
import CityList from './city-list';
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
    const { center, zoom } = caCoords;
    return hasApps ?
      <RfMap
        center={center}
        zoom={zoom}
        layers={this.getMapLayers(activeApps, fundedApps, cities)}
      /> :
      <Loading />
  }

  render() {
    const { activeApps, fundedApps, cities } = this.props;
    return (
      <div>
        <h1>California Availability Checks</h1>
        {this.getMap(activeApps, fundedApps, cities)}
        <CityList cities={cities} />
      </div>
    );
  }
}

const markerDataShape = {
  lat_lon: PropTypes.arrayOf(PropTypes.number).isRequired,
  name: PropTypes.string.isRequired,
};

RfMap.propTypes = {
  activeApps: PropTypes.shape(markerDataShape),
  fundedApps: PropTypes.shape(markerDataShape),
  cities: PropTypes.shape(markerDataShape),
  fetchActiveApplications: PropTypes.func.isRequired,
  fetchFundedApplications: PropTypes.func.isRequired,
  fetchAvailabilityRequests: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeApps: state.map.applications.activeApps,
  fundedApps: state.map.applications.fundedApps,
  cities: state.map.applications.caCities,
});

export default connect(
  mapStateToProps,
  { fetchActiveApplications, fetchFundedApplications, fetchAvailabilityRequests }
)(California)

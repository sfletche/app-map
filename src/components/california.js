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
  }

  getMapLayers(activeApps, fundedApps, caCities) {
    return [
      {
        name: 'Active Applications',
        checked: true,
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
        data: caCities,
        icon: greyIcon,
      },
    ];
  }

  getMap(activeApps, fundedApps, caCities) {
    const layers = [activeApps, fundedApps, caCities];
    const hasApps = _.every(layers, 'length');
    const layerObjs = hasApps && this.getMapLayers(activeApps, fundedApps, caCities);
    return hasApps ? <RfMap center={[37.5, -120]} zoom={6} layers={layerObjs} /> : <Loading />
  }

  render() {
    const { activeApps, fundedApps, caCities } = this.props;
    return (
      <div>
        <h1>California Applications</h1>
        {this.getMap(activeApps, fundedApps, caCities)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeApps: state.map.applications.activeApps,
  fundedApps: state.map.applications.fundedApps,
  caCities: state.map.applications.caCities,
});

export default connect(
  mapStateToProps,
  { fetchActiveApplications, fetchFundedApplications, fetchAvailabilityRequests }
)(California)

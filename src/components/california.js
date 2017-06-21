import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchActiveApplications } from '../actions';
import { fundedApps } from '../applications/funded-apps';
import { caCities } from '../applications/ca-cities';
import { greenIcon, blueIcon, greyIcon } from '../constants/icons';
import Loading from './loading';
import RfMap from './rf-map';

class California extends Component {
  componentDidMount() {
    this.props.fetchActiveApplications();
  }

  getMapLayers(activeApps) {
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

  getMap(activeApps) {
    const layers = [activeApps, fundedApps, caCities];
    const hasApps = _.every(layers, 'length');
    const layerObjs = hasApps && this.getMapLayers(activeApps);
    return hasApps ? <RfMap center={[37.5, -120]} zoom={6} layers={layerObjs} /> : <Loading />
  }

  render() {
    const { activeApps } = this.props;
    return (
      <div>
        <h1>California Applications</h1>
        {this.getMap(activeApps)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeApps: state.map.applications.activeApps,
});

export default connect(mapStateToProps, { fetchActiveApplications })(California)

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import { fetchActiveApplications } from '../actions';
import { fundedApps } from '../applications/funded-apps';
import { basemaps } from '../constants/basemaps';
import { greenIcon, blueIcon } from '../constants/icons';
import Loading from './loading';

const { BaseLayer, Overlay } = LayersControl;

function getBasemaps(basemaps) {
  return basemaps.map(basemap => (
    <BaseLayer key={basemap.name} name={basemap.name} checked={basemap.checked}>
      <TileLayer url={basemap.url} />
    </BaseLayer>
  ));
}

function getMarkers(apps, icon) {
  return apps.map(app => (
    <Marker key={app.lat_lon} position={app.lat_lon} icon={icon}>
      <Popup><span>{app.message}</span></Popup>
    </Marker>
  ));
}

function getMap(activeApps) {
  const mapCenter = [37.5, -120];
  const zoomLevel = 6;
  return (
    <Map center={mapCenter} zoom={zoomLevel}>
      <LayersControl position="topright">
        {getBasemaps(basemaps)}

        <Overlay checked name="Active Applications">
          <LayerGroup>{getMarkers(activeApps, blueIcon)}</LayerGroup>
        </Overlay>
        <Overlay name="Funded Applications">
          <LayerGroup>{getMarkers(fundedApps, greenIcon)}</LayerGroup>
        </Overlay>

      </LayersControl>
    </Map>
  )
}


class California extends Component {
  componentDidMount() {
    console.log('dispatching fetchActiveApplications...');
    this.props.fetchActiveApplications();
  }

  render() {
    const { activeApps } = this.props;
    console.log('rendering...', activeApps);
    return (
      <div>
        <h1>California Applications</h1>
        {activeApps.length ? getMap(activeApps) : <Loading />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeApps: state.map.applications.activeApps,
});

export default connect(mapStateToProps, { fetchActiveApplications })(California)

import React from 'react';
import PropTypes from 'prop-types';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import L from 'leaflet';
import { getOpacity } from '../helpers';
import { basemaps } from '../constants/basemaps';

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
    <Marker key={app.name} position={app.lat_lon} icon={icon} opacity={getOpacity(app.age)}>
      <Popup><span>{app.name}</span></Popup>
    </Marker>
  ));
}

function getOverlays(layers) {
  return layers.map(layer => (
    <Overlay key={layer.name} checked={layer.checked} name={layer.name}>
      <LayerGroup>{getMarkers(layer.data, layer.icon)}</LayerGroup>
    </Overlay>
  ));
}

function RfMap({ center, zoom, layers }) {
  return (
    <Map center={center} zoom={zoom}>
      <LayersControl position="topright">
        {getBasemaps(basemaps)}
        {getOverlays(layers)}
      </LayersControl>
    </Map>
  );
}

RfMap.propTypes = {
  center: PropTypes.arrayOf(PropTypes.number).isRequired,
  zoom: PropTypes.number.isRequired,
  layers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.shape({
      lat_lon: PropTypes.arrayOf(PropTypes.number).isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
    icon: PropTypes.instanceOf(L.Icon).isRequired,
  })).isRequired,
};

export default RfMap;

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { prospectApps } from '../applications/prospect';

const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const mapCenter = [37.5, -120];
const zoomLevel = 6;

function getMarkers(apps) {
  return apps.map(app => (
    <Marker key={app.lat_lon} position={app.lat_lon}>
      <Popup><span>{app.message}</span></Popup>
    </Marker>
  ));
}

export default () => (
  <div>
    <h1>California Applications</h1>
    <Map center={mapCenter} zoom={zoomLevel}>
      <TileLayer url={stamenTonerTiles} />
      {getMarkers(prospectApps)}
    </Map>
  </div>
);

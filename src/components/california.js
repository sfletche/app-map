import React from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
} from 'react-leaflet';
import { activeApps } from '../applications/active-apps';
import { basemaps } from '../constants/basemaps';

const { BaseLayer, Overlay } = LayersControl;
const mapCenter = [37.5, -120];
const zoomLevel = 6;

function getBasemaps(basemaps) {
  return basemaps.map(basemap => (
    <BaseLayer key={basemap.name} name={basemap.name} checked={basemap.checked}>
      <TileLayer url={basemap.url} />
    </BaseLayer>
  ));
}

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
      <LayersControl position="topright">
        {getBasemaps(basemaps)}

        <Overlay checked name="Prospects">
          <LayerGroup>
            {getMarkers(activeApps)}
          </LayerGroup>
        </Overlay>

      </LayersControl>
    </Map>
  </div>
);

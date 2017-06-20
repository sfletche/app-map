export const basemaps = [
  {
    name: 'ESRI.WorldGrayCanvas',
    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}.png',
  },
  {
    name: 'ESRI.WordImagery',
    url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  },
  {
    name: 'Hydda.Base',
    url: 'http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png',
  },
  {
    name: 'OSM.MapSurfer',
    url: 'http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}',
  },
  {
    name: 'Stamen.WaterColor',
    url: 'http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png',
  },
  {
    name: 'Stamen.TonerTiles',
    url: 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png',
    checked: true,
  }
];

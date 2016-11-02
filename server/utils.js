/**
 * Created by tianzx on 2016/11/2.
 */
const data = [
  {
    "vechicleId": 33,
    "ts": 0,
    "gpsTime": 1469894406498,
    "longitude": 113.9086865,
    "latitude": 22.5442125,
    "speed": 0.13272665
  },
  {
    "vechicleId": 33,
    "ts": 0,
    "gpsTime": 1469980866498,
    "longitude": 113.9086865,
    "latitude": 22.5442125,
    "speed": 0.13272665
  },
]
function convertData(data) {
  let routes = [];
  for (const map of data) {
    let m = {lat: 0, lng: 0};
    m.lat = map.latitude;
    m.lng = map.longitude;
    routes.push(m);
  }
  console.log(routes);
  let mapData = {
    data: {
      defaultZoom: 18,
      defaultCenter:routes[routes.length/2],
      routes:routes
    }
  }
  return mapData
};
const test = convertData(data);
console.log(test.routes);

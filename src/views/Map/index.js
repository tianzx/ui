/**
 * Created by tianzx on 2016/10/24.
 */
import React from 'react';
import {
  withGoogleMap, GoogleMap,Polyline,
  Marker,
} from "react-google-maps";

import Helmet from "react-helmet";

const polyline = (<Polyline
  path={flightPlanCoordinates}
  defaultZoom={18}
  defaultCenter={{lat: 40.0365532, lng: 116.3078697}}
>
</Polyline>)
const flightPlanCoordinates = [
  {lat: 40.0365532, lng: 116.3078697},
  {lat: 40.036631, lng: 116.309173},
  {lat: 40.037058, lng: 116.311045},
];

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={18}
    defaultCenter={{lat: 40.0365532, lng: 116.3078697}}
  >
    <Polyline
      path={flightPlanCoordinates}
      defaultZoom={18}
      defaultCenter={{lat: 40.0365532, lng: 116.3078697}}
    >
    </Polyline>
  </GoogleMap>))
//
// ));

export default class Map extends React.Component {
  render() {
    return (
      <div style={{height: `100%`}}>
        <Helmet
          title="Getting Started"
        />
        <GettingStartedGoogleMap
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `100%`}}/>
          }
        />
      </div>
    );
  }
}

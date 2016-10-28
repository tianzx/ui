/**
 * Created by tianzx on 2016/10/25.
 */
import React from 'react';
import {
  withGoogleMap, GoogleMap, Polyline,
} from "react-google-maps";
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RoutesDetail extends React.Component {

  render() {
    const {maps:{map}} = this.props;
    const GettingStartedGoogleMap =
      withGoogleMap(props => (
        <GoogleMap
          defaultZoom={map.defaultZoom}
          center={{lat: 40.0365532, lng: 116.3078697}}
        >
          <Polyline
            path={ map.routes}
            defaultZoom={map.defaultZoom}
          >
          </Polyline>
        </GoogleMap>)
      );
    return (
      <div >
        {/*<Helmet*/}
        {/*title="Getting Started"*/}
        {/*/>*/}
        <GettingStartedGoogleMap
          containerElement={
            <div style={{height: `100%`}}/>
          }
          mapElement={
            <div style={{height: `80%`}}/>
          }
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  const {maps} = state;
  return {
    maps
  };
}

// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators({}, dispatch)};
// }

RoutesDetail.propTypes = {
  actions: React.PropTypes.object,
};
export default connect(
  mapStateToProps,
  null
)(RoutesDetail);

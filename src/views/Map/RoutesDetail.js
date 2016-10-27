/**
 * Created by tianzx on 2016/10/25.
 */
import React from 'react';
import {
  withGoogleMap, GoogleMap, Polyline,
} from "react-google-maps";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class RoutesDetail extends React.Component {

  render() {
    const {maps} = this.props;
    const GettingStartedGoogleMap =
      withGoogleMap(props => (
        <GoogleMap
          ref={props.onMapLoad}
        >
          <Polyline
            path={maps.routes}
            defaultZoom={maps.defaultZoom}
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

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({}, dispatch)};
}

RoutesDetail.propTypes = {
  actions: React.PropTypes.object,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesDetail);

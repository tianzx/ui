/**
 * Created by tianzx on 2016/10/25.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {LIST,DETAIL} from '../../actions/base';
import {retrieveMap} from '../../actions/map';
import RoutesDetail from './RoutesDetail';
import RoutesSearch from './RoutesSearch';

class RoutesList extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const {actions} = this.props;
  }


  renderList() {
    return (
      <div>
        <RoutesSearch />
      </div>
    );
  }

  renderDetail() {
    return (
      <div>
        <RoutesSearch />
        <RoutesDetail/>
      </div>
    );
  }


  render() {
    const {actions,maps:{status}} = this.props;
    let page;
    // switch
    if (status == LIST) {
      page = this.renderList();
    } else if (status == DETAIL) {
      page = this.renderDetail();
    }
    return (
      page
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
  return {actions: bindActionCreators({retrieveMap}, dispatch)};

}

RoutesList.propTypes = {
  actions: React.PropTypes.object,
  routes: React.PropTypes.object
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoutesList);

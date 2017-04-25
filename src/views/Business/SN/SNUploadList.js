/**
 * Created by tianzx on 2017/4/18.
 */
import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import  UploadModel from './UploadModel';
import {uploadSNModel} from '../../../actions/business/sn'
class SNUploadList extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const {actions} = this.props;
  }

  uploadSNModel() {
    const {actions, sns} = this.props;
    actions.uploadSNModel();
  }

  render() {
    return (
      <div>
        <Button onClick={this.uploadSNModel.bind(this)}>
          <Icon type="upload"/> Upload
        </Button>
        <UploadModel/>
      </div>
    )
  }
}

SNUploadList.propTypes = {
  actions: PropTypes.object,
  sns: PropTypes.object
}

function mapStateToProps(state) {
  const {sns} = state;
  return {
    sns
  };
}
// function mapDispatchToProps(dispatch) {
//   return {actions: bindActionCreators({uploadSNModel},dispatch) };
// }
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({
      uploadSNModel
    }, dispatch)
  };
}
SNUploadList.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SNUploadList);

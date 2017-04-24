/**
 * Created by tianzx on 2017/4/18.
 */

import React, {Component} from 'react';
import {Button, Icon} from 'antd';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import  UploadModel from './UploadModel';
import {uploadSNModel } from '../../../actions/business/sn'
class SNUploadList extends Component {


  render() {
    const {actions} = this.props;

    return (
      <div>
        <Button>
          <Icon type="upload" onClick={actions.uploadSNModel}/> Upload
        </Button>
        <UploadModel/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {sns} = state;
  return {
    sns
  };
}
function mapDispatchToProps(dispatch) {
  // return {actions: bindActionCreators({fetchFiles, editFile, retrieveCommitLog, deleteFile, fetchNavPath}, dispatch)};
  return {actions: bindActionCreators({uploadSNModel}), dispatch};
}

SNUploadList.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SNUploadList);

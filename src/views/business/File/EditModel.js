/**
 * Created by tianzx on 2017/3/27.
 */
import React from 'react';
import {Modal, Button,Input} from 'antd';
import {editCommitLog} from '../../../actions/business/file';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
class EditModel extends React.Component {

  constructor(props) {
    super(props);
  }

  handleOk = (e) => {
    console.log(e);
  }
  handleCancel = (e) => {
    console.log(e);
  }

  render() {
    const {actions, files: {commit_log, model_status}} = this.props;
    console.log("___________________");
    console.log( commit_log);
    console.log( model_status);
    console.log("___________________")
    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="edit commit log" visible={model_status}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          {/*<textarea value={commit_log}/>*/}
          <Input type="textarea" value={commit_log} autosize />
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {files} = state;
  return {
    files
  };
}

function mapDispatchToProps(dispatch) {
  // return {actions: bindActionCreators({fetchFiles, editFile, retrieveCommitLog, deleteFile, fetchNavPath}, dispatch)};
  return {actions: bindActionCreators({editCommitLog}),dispatch};
}

EditModel.propTypes = {
  actions: React.PropTypes.object,
  files: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModel);

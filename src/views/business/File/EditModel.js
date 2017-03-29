/**
 * Created by tianzx on 2017/3/27.
 */
import React from 'react';
import {Modal, Button} from 'antd';
import {editCommitlog} from '../../../actions/business/file';
import {connect} from "react-redux";
class EditModel extends React.Component {

  handleOk = (e) => {
    console.log(e);
  }
  handleCancel = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="edit commit log"
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <textarea>
            some text
          </textarea>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {commitLog} = state;
  return {
    commitLog
  };
}

function mapDispatchToProps(dispatch) {
  // return {actions: bindActionCreators({fetchFiles, editFile, retrieveCommitLog, deleteFile, fetchNavPath}, dispatch)};
  return {actions: editCommitlog};
}

FileList.propTypes = {
  actions: React.PropTypes.object,
  files: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModel);

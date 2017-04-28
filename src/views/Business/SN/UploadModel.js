/**
 * Created by tianzx on 2017/4/24.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form, Row, Upload, Col, Icon,message} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {uploadSNModel} from '../../../actions/business/sn';
const Dragger = Upload.Dragger;
const FormItem = Form.Item;

class UploadModel extends Component {


  handleOk = () => {
    const {actions} = this.props;
    console.log('ok');
    actions.uploadSNModel(false);
  }

  handleCancel = () => {
    const {actions} = this.props;
    console.log('cancel');
    actions.uploadSNModel(false);
  }

  render() {
    const {actions, sns: {model_status}} = this.props;
    const {getFieldDecorator} = this.props.form;
    const props = {
      name: 'file',
      multiple: true,
      showUploadList: false,
      action: 'http://localhost:7777/api/upload',
      onChange(info) {
        const status = info.file.status;
        if (status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };
    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="upload" visible={model_status} style={{marginTop: 16, height: 200}}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <Icon type="inbox"/>
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading
                company data or other band files</p>
            </Dragger>
          </Form>
        </Modal>

      </div>
    );
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
  return {actions: bindActionCreators({uploadSNModel},dispatch)};
}

UploadModel.propTypes = {};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(UploadModel));

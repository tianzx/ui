/**
 * Created by tianzx on 2017/4/24.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Form, Row,Upload} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
const Dragger = Upload.Dragger;
const FormItem = Form.Item;
class UploadModel extends Component {

  render() {
    const {actions, sns: { model_status}} = this.props;
    const {getFieldDecorator} = this.props.form;
    const props = {
      name: 'file',
      multiple: true,
      showUploadList: false,
      action: '',
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
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="upload" visible={model_status}
               onOk={this.handleSubmit} onCancel={this.handleCancel}
        >

          <Form >
            <Row >
              <Col span={20} className={'col'}>
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
              </Col>
            </Row>
            {/*{getFieldDecorator('file', {*/}
            {/*rules: [{required: true, message: 'commit_log is required!'}],*/}
            {/*initialValue: commit_log*/}
            {/*})(<Input type="textarea" autosize={{minRows: 2, maxRows: 6}}/>)}*/}
          </Form>
        </Modal>

      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  // return {actions: bindActionCreators({fetchFiles, editFile, retrieveCommitLog, deleteFile, fetchNavPath}, dispatch)};
  return {actions: bindActionCreators({}), dispatch};
}

UploadModel.propTypes = {

};
export default connect(
  null,
  mapDispatchToProps
)(Form.create()(UploadModel));

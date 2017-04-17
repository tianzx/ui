/**
 * Created by tianzx on 2017/3/27.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Input, Form} from 'antd';
import {editCommitLog} from '../../../actions/business/file';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const FormItem = Form.Item;

class EditModel extends Component {

  constructor(props) {
    super(props);
  }

  handleSubmit (e) {
    // const {actions, files, form} = this.props;
    e.preventDefault();
    // console.log(this.props.form.getFieldsValue())
  }

  render() {
    const {actions, files: {commit_log, model_status}} = this.props;
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };

    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="edit commit log" visible={model_status}
               onOk={this.handleSubmit} onCancel={this.handleCancel}
        >

          <Form >

            {getFieldDecorator('commit_log', {
              rules: [{required: true, message: 'commit_log is required!'}],
              initialValue: commit_log
            })(<Input  type="textarea" autosize={{minRows: 2, maxRows: 6}}/>)}
          </Form>
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
  return {actions: bindActionCreators({editCommitLog}), dispatch};
}

EditModel.propTypes = {
  form: PropTypes.object.isRequired,
  actions: PropTypes.object,
  files: PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(EditModel));

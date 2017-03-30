/**
 * Created by tianzx on 2017/3/27.
 */
import React from 'react';
import {Modal, Button, Input, Form} from 'antd';
import {editCommitLog} from '../../../actions/business/file';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const FormItem = Form.Item;

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

  onChange = (e) => {
    console.log('hehe');
  }

  render() {
    const {actions, files: {commit_log, model_status}} = this.props;
    const {getFieldProps} = this.props.form;
    const formItemLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 14},
    };
    return (
      <div>
        {/*<Button type="primary" onClick={this.showModal}>Edit Commit Log</Button>*/}
        <Modal title="edit commit log" visible={model_status}
               onOk={this.handleOk} onCancel={this.handleCancel}
        >

          {/*<textarea value={commit_log}/>*/}
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              label="commitLog"
            >
            </FormItem>
          </Form>
        </Modal>

        <Input type="textarea" onChange={this.onChange} value={commit_log} autosize={{minRows: 2, maxRows: 6}}/>

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
  form: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object,
  files: React.PropTypes.object
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create()(EditModel));

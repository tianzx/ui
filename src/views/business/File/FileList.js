/**
 * Created by tianzx on 2017/3/20.
 */
import * as React from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {fetchNavPath} from '../../../actions/menu';
import * as base from '../../../actions/base';
import {Table, Icon, Popconfirm, Pagination} from 'antd';
import {
  fetchFiles,
  editFile,
  retrieveFile,
  deleteFile,
  editCommitLog,
  editCommitLogFile
} from '../../../actions/business/file';

// import {EditFile} from './EditFile';
import EditModel from './EditModel';

class FileList extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const {actions} = this.props;
    actions.fetchFiles();
    actions.fetchNavPath('file');
    // actions.updateNavPath(nav.keyPath,nav.key);
    // console.log(nav);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log("file");
  }

  renderList(actions, columns, data, meta) {

    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} rowKey={data => data.key}
        />
        {/*<Pagination*/}
        {/*className="ant-table-pagination"*/}
        {/*total={meta.total}*/}
        {/*current={meta.current}*/}
        {/*pageSize={meta.pageSize}*/}
        {/*onChange={this.handleChange}*/}
        {/*/>*/}
        <EditModel/>
      </div>
    );
  }

  renderModel() {
    return (
      <div>
        <EditModel/>
        {/*<p>123</p>*/}
      </div>
    )
  }

  render() {
    const {actions, files: {data, meta, status}} = this.props;

    function retrieveFile(id) {
      actions.retrieveFile(id);
    }

    function confirm(id) {
      actions.deleteFile(id);
      actions.fetchFiles();
    }

    function retrieveCommitLog(id) {
      actions.editCommitLogFile();
      actions.editCommitLog(id);
    }

    const columns = [{
      title: '源版本',
      dataIndex: 'sourceVersion',
      key: 'sourceVersion',
    }, {
      title: '目标版本',
      dataIndex: 'destVersion',
      key: 'destVersion',
    }, {
      title: '文件路径',
      dataIndex: 'filePath',
      key: 'filePath',
      width: 300
    }, {
      title: '时间',
      dataIndex: 'createTime',
      key: 'createTime'
    },
      {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
          <p>
            <a onClick={retrieveCommitLog.bind(this, record.id)}><Icon type="edit"/></a>
            &nbsp;&nbsp;
            <Popconfirm title="确定要删除吗？" onConfirm={confirm.bind(this, record.id)}>
              <a><Icon type="delete"/></a>
            </Popconfirm>
          </p>
        )
      }];

    let page;
    // switch
    if (status == base.LIST) {
      page = this.renderList(actions, columns, data, meta);
    } else if (status == base.ADD || status == base.EDIT) {
      page = this.renderAdd();
    } else if (status == base.MODEL) {
      page = this.renderModel();
    }
    return (
      page
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
  return {
    actions: bindActionCreators({
      fetchFiles,
      editFile,
      retrieveFile,
      deleteFile,
      fetchNavPath,
      editCommitLog,
      editCommitLogFile
    }, dispatch)
  };

}

FileList.propTypes = {
  actions: React.PropTypes.object,
  files: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileList);

/**
 * Created by tianzx on 2017/3/20.
 */
import * as React from "react";
import {connect} from 'react-redux';

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
    // console.log(page);
  }

  renderList(actions, columns, data, meta) {

    return (
      <div>
        <FenceSearch />
        <Table columns={columns} dataSource={data} pagination={false}
        />
        <Pagination
          className="ant-table-pagination"
          total={meta.total}
          current={meta.current}
          pageSize={meta.pageSize}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  renderAdd() {
    return (
      <EditList />
    );
  }


  render() {
    const {actions, fences: {data, meta, status}} = this.props;

    function retrieveFence(id) {
      actions.retrieveFence(id);
    }

    function confirm(id) {
      actions.deleteFence(id);
      actions.fetchFences();
    }

    const columns = [{
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '时间',
      dataIndex: 'creatTime',
      key: 'creatTime'
    },
      {
        title: '操作',
        key: 'operation',
        render: (text, record) => (
          <p>
            <a onClick={retrieveFile.bind(this, record.id)}><Icon type="edit"/></a>
            &nbsp;&nbsp;
            <Popconfirm title="确定要删除吗？" onConfirm={confirm.bind(this, record.id)}>
              <a><Icon type="delete"/></a>
            </Popconfirm>
          </p>
        )
      }];

    let page;
    // switch
    if (status == LIST) {
      page = this.renderList(actions, columns, data, meta);
    } else if (status == ADD || status == EDIT) {
      page = this.renderAdd();
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
  return {actions: bindActionCreators({fetchFiles, editFile, retrieveFile, deleteFile, fetchNavPath}, dispatch)};

}

FileList.propTypes = {
  actions: React.PropTypes.object,
  files: React.PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileList);

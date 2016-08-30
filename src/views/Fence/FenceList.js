/**
 * Created by tianzx on 16/8/26.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Modal, Pagination, message, Button, loading} from 'antd';
import {fetchFences} from '../../actions/fence';

class FenceList extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchFences: React.PropTypes.func,
        fences: React.PropTypes.object
    };

    componentDidMount() {
        const {actions, routing, fences} = this.props;
        actions.fetchFences();
    }

    render() {
        const {fences: {data2, meta, isFetching}} = this.props;
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="#">{text}</a>,
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <span>
      <a href="#">操作一{record.name}</a>
      <span className="ant-divider"></span>
      <a href="#">操作二</a>
      <span className="ant-divider"></span>
      <a href="#" className="ant-dropdown-link">
        更多 <Icon type="down"/>
      </a>
    </span>
            ),
        }];

        const data = [{
            key: '1',
            name: '胡彦斌',
            age: 32,
            address: '西湖区湖底公园1号',
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号',
        }, {
            key: '3',
            name: '李大嘴',
            age: 32,
            address: '西湖区湖底公园1号',
        }];

        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}
function mapStateToProps(state) {
    const {fences} = state;
    return {
        fences
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({fetchFences}, dispatch)};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceList);

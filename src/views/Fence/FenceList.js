/**
 * Created by tianzx on 16/8/26.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Modal, Pagination, message, Button, loading} from 'antd';
import {fetchFences, addFence} from '../../actions/fence';
import EditFence from './EditFence'
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

    renderList(actions, columns, data) {

        return (
            <div>
                <div className="normal">
                    <Button type="ghost" onClick={actions.addFence}>新增</Button>
                </div>
                <Table columns={columns} dataSource={data}/>
            </div>
        )
    }
    renderAdd(){
        return(
            <EditFence/>
        )
    }

    render() {
        const {actions, fences: {data2, meta, isFetching, status}} = this.props;
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

        let page ;
        // switch
        if(status=="list"){
            page = this.renderList(actions, columns, data)
        }else if(status=="add"){
            page = this.renderAdd();
        }
        return (
            page
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
    return {actions: bindActionCreators({fetchFences, addFence}, dispatch)};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceList);

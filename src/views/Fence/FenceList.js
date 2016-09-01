/**
 * Created by tianzx on 16/8/26.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Modal, Pagination, message, Button, loading} from 'antd';
import {fetchFences, addFence,editFence,LIST,ADD,EDIT} from '../../actions/fence';
import EditFence from './EditFence'
const ButtonGroup = Button.Group;
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

    renderAdd() {
        return (
            <EditFence/>
        )
    }


    render() {
        const {actions, fences: {data, meta, isFetching, status}} = this.props;

        function editFence(id){
            actions.editFence(id);
            // actions.addFence();
        }
        const columns = [{
            title: '姓名',
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
                        <a onClick={editFence.bind(this,record.id)}><Icon type="edit" /></a>
                        &nbsp;&nbsp;
                        <Popconfirm title="确定要删除吗？">
                            <a><Icon type="delete"/></a>
                        </Popconfirm>
                    </p>
                )
            }];

        let page;
        // switch
        if (status == LIST) {
            page = this.renderList(actions, columns, data)
        } else if (status == ADD || status == EDIT) {
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
    return {actions: bindActionCreators({fetchFences, addFence,editFence}, dispatch)};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceList);

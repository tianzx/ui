/**
 * Created by tianzx on 16/8/26.
 */
import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Modal, Pagination, message, Button, loading} from 'antd';
import {fetchFences, editFence, retrieveFence, deleteFence, LIST, ADD, EDIT} from '../../actions/fence';
import EditFence from './EditFence';
import FenceSearch from './FenceSearch';
const ButtonGroup = Button.Group;
class FenceList extends React.Component {
    constructor(props) {
        super(props);
    }

    // static propTypes = {
    //     fetchFences: React.PropTypes.func,
    //     fences: React.PropTypes.object
    // };

    componentDidMount() {
        const {actions, routing} = this.props;
        actions.fetchFences();
    }

    handleChange(page) {
        console.log(page);
    }

    renderList(actions, columns, data) {
        const {fences} = this.props;

        return (
            <div>
                <FenceSearch/>
                <Table columns={columns} dataSource={data} pagination={false}
                />
                {/*<Pagination*/}
                {/*className="ant-table-pagination"*/}
                {/*total={fences.meta.total}*/}
                {/*current={fences.meta.current}*/}
                {/*pageSize={fences.meta.pageSize}*/}
                {/*onChange={this.handleChange}*/}
                {/*/>*/}
            </div>

        )
    }

    renderAdd() {
        return (
            <EditFence />
        )
    }


    render() {
        const {actions, fences: {data, meta, isFetching, status},dispatch} = this.props;
        function retrieveFence(id) {
            actions.retrieveFence(id);
            // actions.addFence();
        }

        function confirm(id) {
            actions.deleteFence(id);
            actions.fetchFences();
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
                        <a onClick={retrieveFence.bind(this, record.id)}><Icon type="edit"/></a>
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
            page = this.renderList(actions, columns, data)
        } else if (status == ADD || status == EDIT) {
            page = this.renderAdd(dispatch);
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
    console.log(dispatch)
    return {actions: bindActionCreators({fetchFences, editFence, retrieveFence, deleteFence}, dispatch)};

}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceList);

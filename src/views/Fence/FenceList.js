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

    renderAdd() {
        return (
            <EditFence/>
        )
    }

    render() {
        const {actions, fences: {data, meta, isFetching, status}} = this.props;
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '时间',
            dataIndex: 'dateTime',
            key: 'dateTime'
        },
            {
                title: '操作',
                key: 'operation',
                render: (text, record) => (
                    <span>

                </span>
                ),
            }];

        let page;
        // switch
        if (status == "list") {
            page = this.renderList(actions, columns, data)
        } else if (status == "add") {
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
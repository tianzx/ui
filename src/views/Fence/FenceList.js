/**
 * Created by tianzx on 16/8/26.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Icon, Popconfirm, Pagination} from 'antd';
import {fetchFences, editFence, retrieveFence, deleteFence, LIST, ADD, EDIT} from '../../actions/fence';
import {fetchNavPath} from '../../actions/menu';

import EditFence from './EditFence';
import FenceSearch from './FenceSearch';

class FenceList extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        const {actions} = this.props;
        actions.fetchFences();
        actions.fetchNavPath('fence');
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
                <Table columns={columns} dataSource={data} pagination={false} rowKey={data => data.id}
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
            <EditFence />
        );
    }


    render() {
        const {actions, fences:{data, meta, status}} = this.props;

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
    const {fences} = state;
    return {
        fences
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({fetchFences, editFence, retrieveFence, deleteFence,fetchNavPath}, dispatch)};

}

FenceList.propTypes = {
    actions: PropTypes.object,
    fences: PropTypes.object
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceList);

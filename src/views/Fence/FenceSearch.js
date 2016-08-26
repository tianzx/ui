/**
 * Created by tianzx on 16/8/26.
 */
import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Select} from 'antd';
import { connect } from 'react-redux';

class FenceSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        fetchFences: React.PropTypes.func,
        fences: React.PropTypes.object
    };

    componentWillMount() {
        const {actions, isAuthenticated,routing,user} = this.props;
        actions.fetchFences();
        this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);
    }
    render() {
        const { users: { data, meta, isFetching } } = this.props;
        const roleFilter = [{
            text: '管理员',
            value: 'admin'
        },{
            text: "普通用户",
            value: "normal"
        }];
        const columns = [
            {
                title: "ID",
                dataIndex: "id",
                key: "id"
            },
            {
                title: "邮箱",
                dataIndex: "email",
                key: "email"
            },
            {
                title: "姓名",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "角色",
                dataIndex: "roles",
                key: "roles",
            },
            {
                title: "创建时间",
                dataIndex: "created_at",
                key: "created_at",
                sorter: true,
            },
            {
                title: '操作',
                key: 'operation',
                render: () => (
                    <ButtonGroup>
                        <Button type="primary">操作一</Button>
                        <Button type="ghost">操作二</Button>
                    </ButtonGroup>
                )
            }
        ];

        const pagination = {
            showSizeChanger: true,
            total: meta.total,
            pageSize: 10,
        };
        return (
            <div>
                <Row>
                    <Col span={8}>
                        <div className="ant-search-input-wrapper">
                            <InputGroup className="ant-search-input">
                                <Input placeholder="高级搜索"/>
                                <div className="ant-input-group-wrap">
                                    <Button icon="search" className="ant-search-btn" />
                                </div>
                            </InputGroup>
                        </div>
                    </Col>
                </Row>
                {/*<CustomTable*/}
                    {/*columns={columns}*/}
                    {/*dataSource={data}*/}
                    {/*pagination={pagination}*/}
                    {/*rowKey={(record) => record.id}*/}
                    {/*loading={isFetching}*/}
                    {/*bordered*/}
                {/*/>*/}
            </div>
        );
    }
}
function mapStateToProps(state) {
    const { fences } = state;
    return {
        fences
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFences: (params) => dispatch(fetchFences(params))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FenceSearch);

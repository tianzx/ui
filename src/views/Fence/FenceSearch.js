/**
 * Created by tianzx on 16/8/29.
 */
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Table, Button, Form, Select, Input, Row, Col} from 'antd';
import './index.less';
import {editFence,fetchFences}from '../../actions/fence'
const FormItem = Form.Item;
class FenceSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {};

    componentDidMount() {
        // const {actions, routing, fences} = this.props;
        // actions.fetchFences();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const {actions} = this.props;
        let val = this.props.form.getFieldsValue();
        console.log(val.field+''+val.keyword);
        actions.fetchFences(val)
        console.log(val)
    }

    render() {
        const {getFieldProps} = this.props.form;
        const {actions} = this.props;

        const keywordRules = [
            {
                required: true,
                message: '不能为空',
            },
        ];
        return (
            <Row >
                <Col span={20} className={'col'}>
                    <Form inline onSubmit={this.handleSubmit}>
                        <Form.Item className={'normal'}>
                            <Select { ...getFieldProps('field', {initialValue: 'name'}) }>
                                <Select.Option value="name">名字</Select.Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            hasFeedback
                        >
                            <Input
                                { ...getFieldProps('keyword', {
                                    initialValue: '',
                                    rules: keywordRules,
                                }) }
                            />
                        </Form.Item>
                        <Button style={{marginRight: '10px'}} type="primary" htmlType="submit">搜索</Button>
                    </Form>
                </Col>
                <Col >
                    <Button type="ghost" onClick={actions.editFence}>新增</Button>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    const {fences} = state;
    return {
        fences
    };
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({editFence,fetchFences}, dispatch)};

}
export default connect(
    null,
    mapDispatchToProps
)(Form.create()(FenceSearch));

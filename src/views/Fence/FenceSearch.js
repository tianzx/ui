/**
 * Created by tianzx on 16/8/29.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Form, Select, Input, Row, Col} from 'antd';
import './index.less';

import {editFence,fetchFences}from '../../actions/fence';

class FenceSearch extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // const {actions, routing, fences} = this.props;
        // actions.fetchFences();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const {actions} = this.props;
        let val = this.props.form.getFieldsValue();
        // console.log(val.field+''+val.keyword);
        actions.fetchFences(val);
        // console.log(val)
    }

    render() {
        const {getFieldDecorator} = this.props.form;
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
                    <Form layout="inline" onSubmit={this.handleSubmit}>
                        <Form.Item className={'normal'}>
                            {/*<Select {...getFieldProps('field', {initialValue: 'name'})}>*/}
                                {/*<Select.Option value="name">名字</Select.Option>*/}
                            {/*</Select>*/}

                        </Form.Item>
                        <Form.Item
                            hasFeedback
                        >
                          {getFieldDecorator('keyword', {
                            initialValue: '',
                            rules: keywordRules,
                          })(
                            <Input />
                          )}
                        </Form.Item>
                        <Button style={{marginRight: '10px'}} type="primary" htmlType="submit">搜索</Button>
                    </Form>
                </Col>
                <Col >
                    <Button type="ghost" onClick={actions.editFence}>新增</Button>
                </Col>
            </Row>
        );
    }
}

// function mapStateToProps(state) {
//     const {fences} = state;
//     return {
//         fences
//     };
// }

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({editFence,fetchFences}, dispatch)};
}

FenceSearch.propTypes = {
    actions: PropTypes.object,
    form: PropTypes.object
};
export default connect(
    null,
    mapDispatchToProps
)(Form.create()(FenceSearch));

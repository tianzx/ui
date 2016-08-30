/**
 * Created by tianzx on 16/8/30.
 */
import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Radio, Tooltip, Icon} from 'antd';
import {connect} from 'react-redux';
const createForm = Form.create;
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
function noop() {
    return false;
}
class EditFence extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('收到表单值：', this.props.form.getFieldsValue());
    }

    render() {
        const {getFieldProps} = this.props.form;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    {...formItemLayout}
                    label="围栏名称"
                >
                    <Input id="fenceName" name="fenceName" {...getFieldProps('fenceName')}/>
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={<span>是否开启</span>}
                >
                    <Checkbox {...getFieldProps('agreement', {
                        initialValue: false,
                        valuePropName: 'checked'
                    })}>是</Checkbox>
                </FormItem>
                <FormItem wrapperCol={{span: 16, offset: 6}} style={{marginTop: 24}}>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
}


EditFence.propTypes = {
    form: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    const {fence} = state;
    return {
        fence
    };
}

export default connect(mapStateToProps)(createForm()(EditFence));

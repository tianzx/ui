/**
 * Created by tianzx on 16/8/30.
 */
import React, {Component, PropTypes} from 'react';
import {Form, Input, Button, Checkbox, Radio, Tooltip, Icon} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {submitFence,fetchFences} from '../../actions/fence'
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
class EditFence extends React.Component {

    static propTypes = {
        submitFence: React.PropTypes.func,
        fetchFences: React.PropTypes.func
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {actions}  = this.props;
        e.preventDefault();
        actions.submitFence(this.props.form.getFieldsValue());
        actions.fetchFences();
    }

    render() {
        const {getFieldProps} = this.props.form;
        // console.log(actions);

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
    const {fences} = state;
    return {
        fences
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({submitFence,fetchFences}, dispatch)};

}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditFence));
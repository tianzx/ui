/**
 * Created by tianzx on 16/8/30.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Checkbox} from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createFence,fetchFences,updateFence,ADD,EDIT} from '../../actions/fence';
const FormItem = Form.Item;
class EditFence extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        const {actions}  = this.props;
        actions.fetchFences();
    }

    handleSubmit(e) {
        const {actions,fences}  = this.props;
        e.preventDefault();
        if(fences.status == ADD) {
            actions.createFence(this.props.form.getFieldsValue());
        }else if(fences.status == EDIT) {
            actions.updateFence(this.props.form.getFieldsValue());
        }
        actions.fetchFences();
    }

    render() {
        const {getFieldProps} = this.props.form;
        const {getFieldDecorator} = this.props.form;

        // console.log(actions);
        const {fences:{fence}} = this.props;
        const formItemLayout = {
            labelCol: {span: 6},
            wrapperCol: {span: 14},
        };
        return (
            <Form layout="horizontal" onSubmit={this.handleSubmit}>
                {/*<Input id="id" name="id" {...getFieldProps('id',{initialValue:fence.id})} type="hidden"/>*/}
              {getFieldDecorator('fenceName', {
                initialValue: fence.id
              })(<Input id="fenceName" name="fenceName" type="hidden"/>)}
                <FormItem
                    {...formItemLayout}
                    label="围栏名称"
                >
                    {/*<Input id="fenceName" name="fenceName" {...getFieldProps('fenceName',{initialValue:fence.name})}/>*/}

                  {getFieldDecorator('fenceName', {
                    rules: [{required: true, message: 'fenceName is required!'}],
                    initialValue: fence.name
                  })(<Input id="fenceName" name="fenceName"/>)}
                </FormItem>
                <FormItem
                    {...formItemLayout}
                    label={<span>是否开启</span>}
                >
                    {/*<Checkbox {...getFieldProps('agreement', {*/}
                        {/*initialValue: fence.agreement,*/}
                        {/*valuePropName: 'checked'*/}
                    {/*})}>是</Checkbox>*/}
                  {getFieldDecorator('agreement', {
                    rules: [{required: true, message: 'fenceName is required!'}],
                    initialValue: fence.agreement,
                    valuePropName: 'checked'
                  })(<Checkbox>是</Checkbox>)}
                </FormItem>
                <FormItem wrapperCol={{span: 16, offset: 6}} style={{marginTop: 24}}>
                    <Button type="ghost" style={{ marginRight: '10px' }} onClick={this.handleCancel}>取消</Button>
                    <Button type="primary" htmlType="submit">确定</Button>
                </FormItem>
            </Form>
        );
    }
}


EditFence.propTypes = {
    form: PropTypes.object.isRequired,
    actions: PropTypes.object,
    fences: PropTypes.object
};

function mapStateToProps(state) {
    const {fences} = state;
    return {
        fences
    };
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({createFence,fetchFences,updateFence}, dispatch)};

}
export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(EditFence));

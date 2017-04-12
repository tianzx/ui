// import React, {PropTypes} from 'react';
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Form, Input, Button, Row, Col, notification} from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login} from '../../actions/login';

const FormItem = Form.Item;

import './index.less';

const propTypes = {
    user: PropTypes.string,
    loggingIn: PropTypes.bool,
    loginErrors: PropTypes.string
};

const contextTypes = {
    router: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

class Login extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        const error = nextProps.loginErrors;
        const isLoggingIn = nextProps.loggingIn;
        const user = nextProps.user;

        if (error != this.props.loginErrors && error) {
            notification.error({
                message: 'Login Fail',
                description: error
            });
        }

        if (!isLoggingIn && !error && user) {
            notification.success({
                message: 'Login Success',
                description: 'Welcome ' + user
            });
        }

        if (user) {
            this.context.router.replace('/home');
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const data = this.props.form.getFieldsValue();
        this.props.login(data.user, data.password);
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <Row className="login-row" type="flex" justify="space-around" align="middle">
                <Col span="8">
                    <Form horizontal onSubmit={this.handleSubmit.bind(this)} className="login-form">
                        <FormItem
                            label="用户名："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            >
                            <Input placeholder="admin" {...getFieldProps('user')} />
                        </FormItem>
                        <FormItem
                            label="密码："
                            labelCol={{ span: 6 }}
                            wrapperCol={{ span: 14 }}
                            >
                            <Input type="password" placeholder="123456" {...getFieldProps('password')} />
                        </FormItem>
                        <Row>
                            <Col span="16" offset="6">
                                <Button type="primary" htmlType="submit">确定</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        );
    }
}

Login.contextTypes = contextTypes;

Login.propTypes = propTypes;

const LoginForm = Form.create()(Login);

function mapStateToProps(state) {
    const {login: {user, loggingIn, loginErrors}} = state;
    return { user, loggingIn, loginErrors };
}

function mapDispatchToProps(dispatch) {
    return {
        login: bindActionCreators(login, dispatch)
    };
}
Login.propTypes = {
    login: React.PropTypes.func,
    form: React.PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import React from 'react';
import {Icon, Menu} from 'antd';
import './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../actions/login';
import {LOGOUT} from '../../utils/common';
const SubMenu = Menu.SubMenu;

class Header extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const {actions} = this.props;
        if(e.key == LOGOUT ){
            actions.logout();
        }
    }

    render() {
        const {user} = this.props;
        return (
            <div className="ant-layout-header">
                <Menu className="header-menu" onClick={this.handleSubmit}
                      mode="horizontal">
                    <SubMenu title={<span><Icon type="user"/>{user}</span>}>
                        <Menu.Item key="setting:1">选项1</Menu.Item>
                        <Menu.Item key="setting:2">选项2</Menu.Item>
                        <Menu.Divider />
                        <Menu.Item key={LOGOUT}>注销</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="mail">
                        <Icon type="question"/>帮助
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators({logout}, dispatch)};
}
Header.propTypes ={
    actions:React.PropTypes.object,
    user:React.PropTypes.string
};
export default connect(null, mapDispatchToProps)(Header);


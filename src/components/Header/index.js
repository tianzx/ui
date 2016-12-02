import React from 'react';
import {Icon, Menu} from 'antd';
import './index.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {logout} from '../../actions/login';
import {LOGOUT} from '../../utils/common';
import Cookies from 'js-cookie';

const SubMenu = Menu.SubMenu;

class Header extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {actions} = this.props;
    console.log(e);
    // e.get
    if (e.key == LOGOUT) {
      actions.logout();
    }else{
      this.changeEnvironment(e.key);
    }
  }

  changeEnvironment(env){
    Cookies.set("env",env);
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
          {/*<SubMenu title={<span><Icon type="setting"/>环境切换</span>} onClick={this.test}>*/}
            {/*<Menu.Item key="local" >本地版</Menu.Item>*/}
            {/*<Menu.Item key="test" >测试版</Menu.Item>*/}
            {/*<Menu.Item key="production-cn" >正式版</Menu.Item>*/}
            {/*<Menu.Item key="production-ge">国际版</Menu.Item>*/}
          {/*</SubMenu>*/}
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
Header.propTypes = {
  actions: React.PropTypes.object,
  user: React.PropTypes.string
};
export default connect(null, mapDispatchToProps)(Header);


import React, {PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Menu, Icon} from 'antd'
import {getAllMenu, updateNavPath} from '../../actions/menu'
import {Link, browserHistory} from 'react-router'

const SubMenu = Menu.SubMenu

import './index.less'

const defaultProps = {
    items: [],
    currentIndex: 0
}

const propTypes = {
    items: PropTypes.array,
    currentIndex: PropTypes.number
}

class Sidebar extends React.Component {
    constructor(props) {
        super(props)

        this.menuClickHandle = this.menuClickHandle.bind(this);
    }

    componentDidMount() {
        this.props.getAllMenu();
        // this.menuClickHandle();
    }

    menuClickHandle(item) {
        this.props.updateNavPath(item.keyPath, item.key);
        // console.log(item.keyPath,item.key)
        // console.log(item)
    }

    render() {
        const {items} = this.props
        let openKey = []
        const menu = items.map((item) => {
            openKey.push('sub' + item.key)
            return (
                <SubMenu
                    key={'sub' + item.key}
                    title={<span><Icon type={item.icon}/>{item.name}</span>}
                >
                    {item.child.map((node) => {
                        return (
                            <Menu.Item key={'menu' + node.key}><Link to={'/' + node.url}>{node.name}</Link></Menu.Item>
                        )
                    })}
                </SubMenu>
            )
        });
        return (
            <aside className="ant-layout-sider">
                <div className="ant-layout-logo"></div>
                <Menu
                    mode="inline" theme="dark" openKeys={openKey}
                    onClick={this.menuClickHandle}
                >
                    {menu}
                </Menu>
            </aside>
        )
    }
}

Sidebar.propTypes = propTypes;
Sidebar.defaultProps = defaultProps;

function mapStateToProps(state) {
    const {menus:{items, currentIndex}} =state;
    return {
        items: items,
        currentIndex: currentIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllMenu: bindActionCreators(getAllMenu, dispatch),
        updateNavPath: bindActionCreators(updateNavPath, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

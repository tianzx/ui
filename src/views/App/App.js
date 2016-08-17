import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import  'antd/dist/antd.less';
import {Affix , Row, Col} from 'antd';

import NavPath from '../../components/NavPath'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import {fetchProfile, logout} from '../../actions/user';
import './index.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);

        this.state = {
            collapse: false
        };
    }

    componentDidMount() {
        const {actions} = this.props;
        actions.fetchProfile();
    }

    renderAuthenticatedPage() {
        const {user, actions} = this.props;

        return (
            <div className="ant-layout-aside">
                <Sidebar />
                <div className="ant-layout-main">
                    <Header user={user}/>
                    <NavPath />
                    <div className="ant-layout-container">
                        <div className="ant-layout-content">
                            {this.props.children}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        );
    }

    render() {
        const {isAuthenticated} = this.props;
        return (
            <div>
                {isAuthenticated ? this.renderAuthenticatedPage() : <Login/>}
            </div>
        );
    }
}

App.propTypes = {
    user: PropTypes.object,
    children: PropTypes.element,
    isAuthenticated: React.PropTypes.bool,
};

App.contextTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};
const mapStateToProps= (state)=> {
    const {actions, auth: {isAuthenticated, user}} = state;
    return {
        isAuthenticated, user,actions
    };
}

const mapDispatchToProps = (dispatch)=> {
    return {actions: bindActionCreators({fetchProfile, logout}, dispatch)};
}

export default connect(mapStateToProps)(App);


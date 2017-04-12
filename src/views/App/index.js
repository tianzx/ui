import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import NavPath from '../../components/NavPath';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import {fetchProfile, logout} from '../../actions/login';
import Login from '../Login/index';
import './index.less';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {actions} = this.props;
        actions.fetchProfile();
        this.renderAuthenticatedPage = this.renderAuthenticatedPage.bind(this);
    }

    renderAuthenticatedPage(user) {
        return (
            <div className="ant-layout-aside">
                <Sidebar/>
                <div className="ant-layout-main">
                    <Header user={user} />
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
        const {isAuthenticated, user, actions } = this.props;
        return (
            <div>
                {isAuthenticated ? this.renderAuthenticatedPage(user, actions) : <Login/>}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const {routing, login: {user, isAuthenticated}} = state;
    return {
        user,
        isAuthenticated,
        routing
    };
};

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators({ fetchProfile, logout }, dispatch) };
}
App.propTypes = {
    actions: PropTypes.object,
    user: PropTypes.string,
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

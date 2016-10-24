/**
 * Created by tianzx on 16/8/17.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import Fence from './views/Fence';
import User from './views/User';
import Map from './views/Map';
import NotFound from './views/NotFound';

export default (
    <Route path="/" component={App}>
        {/*<IndexRedirect to="home" />*/}
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="fence" component={Fence}/>
        <Route path="user" component={User}/>
        <Route path="map" component={Map}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

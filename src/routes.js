/**
 * Created by tianzx on 16/8/17.
 */
import React from 'react';
import Route  from 'react-router';
import IndexRoute  from 'react-router';
import App from './views/App';
import Home from './views/Home';
import Login from './views/Login';
import Fence from './views/Fence';
import User from './views/User';
import Map from './views/Map';
import NotFound from './views/NotFound';
import File from './views/business/File';

export default (
    <Route path="/" component={App}>
        {/*<IndexRedirect to="home" />*/}
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
        <Route path="fence" component={Fence}/>
        <Route path="user" component={User}/>
        <Route path="map" component={Map}/>
        <Route path="file" component={File}/>
        <Route path="*" component={NotFound}/>
    </Route>
);

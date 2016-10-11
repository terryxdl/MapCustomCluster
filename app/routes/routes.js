/**
 * Created by zhaoz on 2016-02-26.
 */
import React from 'react';
import { Router,Route,browserHistory,IndexRoute } from 'react-router';
import App from '../App';
import LoginPage from '../container/LoginPage.js';

module.exports = (

    <Route path="/" component={App}>
        <IndexRoute component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
    </Route>


    //<Route path="/sgw" component={App}>
    //    <IndexRoute component={LoginPage}/>
    //    <Route path="/" component={LoginPage}/>
    //    <Route path="/login" component={LoginPage}/>
    //</Route>
)

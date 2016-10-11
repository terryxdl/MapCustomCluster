/**
 * Created by zhaoz on 2016-02-21.
 */

require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('es6-promise');

import React from 'react';
import ReactDOM from  'react-dom';

import { Provider } from 'react-redux';
import configureStore  from './stores/configureStore';

import {Router,Route,IndexRoute,browserHistory} from 'react-router';

import routes from './routes/routes';

const store = configureStore()

ReactDOM.render(

    <Provider store={store}>
        <Router routes={routes} history={browserHistory} />
    </Provider>,
    document.getElementById('content')
);

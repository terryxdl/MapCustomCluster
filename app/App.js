/**
 * Created by zhaoz on 2016-02-26.
 * Nrng-Web程序入口，这里的Link，只放页面级别的组件
 *
 */
import React, {Component} from 'react';
import {Link,IndexLink} from 'react-router';
import LoginPage from './container/LoginPage.js';


class App extends Component {

    render() {
        return (
            <ul>
                <li><Link to="/login"/></li>
                {this.props.children || <LoginPage />}
            </ul>
        )
    }
}
export default App;

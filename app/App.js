/**
 * Created by terryxu on 16/6/22.
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

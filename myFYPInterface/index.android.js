/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import Login from './src/pages/Login';

export default class myFYPInterface extends Component {
    render() {
        return ( <
            Login / >
        );
    }
}

AppRegistry.registerComponent('myFYPInterface', () => myFYPInterface);
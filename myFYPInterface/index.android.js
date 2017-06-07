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
import Search from './src/pages/Search';
import ListBus from './src/pages/ListBus';

export default class myFYPInterface extends Component {
    render() {
        return ( <ListBus/>
        );
    }
}

AppRegistry.registerComponent('myFYPInterface', () => myFYPInterface);
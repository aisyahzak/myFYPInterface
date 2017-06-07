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
import ListByArea from './src/pages/ListByArea';
import Info from './src/pages/Info';

export default class myFYPInterface extends Component {
    render() {
        return ( <Info/>
        );
    }
}

AppRegistry.registerComponent('myFYPInterface', () => myFYPInterface);
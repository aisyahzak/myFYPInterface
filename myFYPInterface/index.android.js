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
import { StackNavigator } from 'react-navigation';
const SimpleApp = StackNavigator({
  Search:{ screen: Search },
  Info:{ screen: Info },
  ListByArea:{ screen: ListByArea },
  ListBus:{ screen: ListBus },
  Login: { screen: Login },
});


import Login from './src/pages/Login';
import Search from './src/pages/Search';
import ListBus from './src/pages/ListBus';
import ListByArea from './src/pages/ListByArea';
import Info from './src/pages/Info';

export default class myFYPInterface extends Component {
    render() {
        return ( <SimpleApp/>
        );
    }
}

AppRegistry.registerComponent('myFYPInterface', () => myFYPInterface);
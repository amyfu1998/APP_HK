/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {AppRegistry,View,StatusBar} from 'react-native';
import Page from './src/js/page1';
//import Page from './src/js/page2';
//import Page from './src/js/page3';

const App =()=>{
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Page />
      </View>
    );
};

AppRegistry.registerComponent('appdesign', () => App);

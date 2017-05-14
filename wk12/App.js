import React, { Component } from 'react';
import * as firebase from 'firebase';
import { LoginStack } from './Router';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBPZz5Dqh0yGlU8OdBBan6Az6lpjYEGO6I",
    authDomain: "appdesign-9e933.firebaseapp.com",
    databaseURL: "https://appdesign-9e933.firebaseio.com",
    projectId: "appdesign-9e933",
    storageBucket: "appdesign-9e933.appspot.com",
    messagingSenderId: "583064461617"
    });
  }

  render() {
    return (
      <LoginStack />
    );
  }
}


export default App;

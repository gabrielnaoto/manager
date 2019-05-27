import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyBkarx5uhwS6qerlJ3zIDcykVLN5bJj4Gk",
      authDomain: "manager-3e770.firebaseapp.com",
      databaseURL: "https://manager-3e770.firebaseio.com",
      projectId: "manager-3e770",
      storageBucket: "manager-3e770.appspot.com",
      messagingSenderId: "956367808852",
      appId: "1:956367808852:web:89e64a15a88bc754"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Login from './components/Login';
import Judul from './components/Judul';
import Footer from './components/Footer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="#e54e4e"
          barStyle="light-content"
        />
        <Judul/>
        <View style={styles.border}>
          <Login/>
          <Footer/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5757',
  },
  border: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 40,
    paddingTop: 50
  }
});

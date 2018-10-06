/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Login from '../Login';

type Props = {};
export default App = (props) => (
  <View style={styles.container}>
    <Login/>
    <TouchableOpacity
      style={styles.button}
      onPress={()=>props.navigator.switchToTab({
        tabIndex: 1
      })}
    >
      <Text style={styles.buttonText}>SignIn</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#e50000',
    paddingVertical: 10,
    margin: 20,
    marginTop: 0
  },
  buttonText: {
    textAlign: 'center',
    color: '#f2f2f2',
    fontWeight: '700',
    fontSize: 20
  }
});

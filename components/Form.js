import React, {Component} from 'react';
import {View, TextInput, TouchableOpacity, Text, StatusBar} from 'react-native';

export default class Form extends Component {
  render() {
    return(
      <View style={forstyle.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#051727"
        />
        <TextInput
          placeholder="Email"
          returnKeyType="next"
          keyboardType="email-address"
          placeholderTextColor="rgba(97,218,251,0.7)"
          onSubmitEditing={() => this.password.focus()}
          style={forstyle.input}
        />
        <TextInput
          placeholder="Password"
          returnKeyType="go"
          placeholderTextColor="rgba(97,218,251,0.7)"
          secureTextEntry
          ref={(input) => this.password = input}
          style={forstyle.input}
        />
        <TouchableOpacity style={forstyle.button}>
          <Text style={forstyle.buttonText}>SignIn</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const forstyle = {
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 10,
    color: '#61dafb',
    paddingHorizontal: 10
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 10
  },
  buttonText: {
    textAlign: 'center',
    color: '#051727',
    fontWeight: '700',
    fontSize: 20
  }
}

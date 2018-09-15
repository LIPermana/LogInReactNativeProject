import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

class Login extends Component {
  render(){
    return(
      <View>
        <TextInput
          style={forstyle.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#FF5757"
        />
        <TextInput
          style={forstyle.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          placeholderTextColor="#FF5757"
        />
        <TouchableOpacity style={forstyle.tombol}>
          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
            LogIn
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const forstyle = {
  tombol: {
    backgroundColor: 'rgba(32,107,164,1.0)',
    borderRadius: 25,
    paddingHorizontal:16,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    backgroundColor: 'rgba(255,255,255,1.0)',
    width: 310,
    marginBottom: 10,
    borderRadius: 25,
    paddingHorizontal: 16,
    color: '#FF5757'
  }
}

export default Login;

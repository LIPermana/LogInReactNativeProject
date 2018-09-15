import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

class Judul extends Component {
  render(){
    return(
      <Image
        source={require('../src/Logo.png')}
        style={{marginBottom: 100, marginTop: 50}}
      />
    )
  }
}

export default Judul;

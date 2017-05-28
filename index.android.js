import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet} from 'react-native';

import Main from './Components/Component.Main/Main'
//import { NativeModules } from 'react-native';
//module.exports = NativeModules.ToastAndroid;

export default class myapp extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Vipul'
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
          <Main name={this.state.name} />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column'
  }
})

AppRegistry.registerComponent('myapp', () => myapp);

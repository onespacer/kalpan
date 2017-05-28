import React, { Component } from 'react';
import { AppRegistry, Text, View} from 'react-native';

export default class myapp extends Component {
  render() {
    return (
      <View>
          <Text>Welcome To My app</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);

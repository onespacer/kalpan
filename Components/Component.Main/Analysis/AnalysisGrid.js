'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
import GridItem from '../Analysis/GridItem';

export default class AnalysisGrid extends Component {
  
  state = {
  }

  render() {
    return(
            <View style={styles.gridcontainer}>
                <GridItem records={this.props.records} />
            </View>
    );
  }
}

const styles = StyleSheet.create({

    gridcontainer:{
        flex:1,
        flexDirection:'column',
        padding:10,
        backgroundColor:'#AED6F1'
    }

});
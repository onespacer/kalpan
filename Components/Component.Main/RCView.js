'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';

export default class RCView extends Component {
  
  state = {
  }

  render() {
    const conclusion = this.props.conclusion;
    const reasons = this.props.reasons;
    return(
            <ScrollView style={styles.selectedRCBox}>
                <Text style={styles.selectedConclusionCaption}>Your Conclusion: </Text>
                <Text style={styles.conclusion}>{conclusion}</Text>
                <Text style={styles.selectedResultCaption}>Some of the Reasons are:</Text>
                { reasons ? reasons.map(function(reason, i){
                    return <Text style={styles.eachReason} key={i}>{i+1}. {reason.reasonText}</Text>
                    }): null
                }
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  selectedRCBox:{
    marginTop:10,
    marginLeft:10
  },

  selectedConclusionCaption:{
    color:'blue',
    fontWeight: 'bold'
  },

  selectedResultCaption:{
    color:'blue',
    fontWeight: 'bold'
  },

  conclusion:{
    marginLeft:10, 
    marginBottom:10
  },

  eachReason:{
      marginLeft:10
  },

});
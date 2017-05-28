'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Conclusion extends Component {
  
  state = {
    conclusionText: '',
    finalConclusion: ''
  }

  onConclusionSubmit(value){  
    this.setState({
      finalConclusion: value,
      conclusionText: ''
    });
    this.props.onSubmit(value);
  };

  onConclusionIconSubmit(){
    var value = this.state.conclusionText;
    console.log(value);
    this.onConclusionSubmit(value);
  }

  onConclusionChange(value){  
    this.setState({
      conclusionText: value
    });
  };

  render() {

    return(
        <View style={styles.conclusionview}>
            <Text style={styles.generaltitle}>What's your new Conclusion?</Text>
            <View style={styles.textarea} >
                <TextInput
                    key={"text"}
                    style={styles.textbox}
                    onChangeText = {(value) => this.onConclusionChange(value)}
                    onSubmitEditing={(event) => this.onConclusionSubmit(event.nativeEvent.text)}
                    value={this.state.conclusionText}
                    blurOnSubmit={true}
                    underlineColorAndroid={'transparent'}
                    placeholder="For example: I don't like cats..." />
                <View style={styles.submitbutton}>
                    {this.state.conclusionText ?
                        <Icon.Button name="send" size={12} color="#ffffff" 
                        backgroundColor="blue" onPress={(value) => this.onConclusionIconSubmit(value)}
                        style={styles.iconstyle} />
                            :
                        <Icon.Button name="send" size={12} color="#ffffff" 
                        backgroundColor="#ABB2B9" onPress={this.onReasonSubmit}
                        style={styles.iconstyle} />
                    } 
                </View> 
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

  generaltitle:{
    color:'#000000',
    marginBottom:5
  },

 conclusionview:{
    marginTop:10,
    marginRight:10, 
    marginLeft:10,
    marginBottom:5
  },

  textarea:{
      flexDirection:'row',
      backgroundColor:'#ffffff',
  },

  textbox:{
    flex:9, 
    height:25,
    backgroundColor:'#ffffff',
    //borderWidth:1,
    //borderColor:'red',
    padding:0,
    paddingLeft:5,
    paddingRight:5,
  },

  iconstyle:{
      padding:0,
      margin:0,
      paddingLeft:5,
      paddingTop:5,
      paddingBottom:5,
  },

  submitbutton:{
      margin:2,
      //borderWidth:1,
      //borderColor:'red',
  }

});

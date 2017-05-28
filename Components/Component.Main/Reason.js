'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class Reason extends Component {
  
  state = {
    currentReasonText:'',
    currentReasonLocked:false,
  }

  onReasonChange(value){  
    this.setState({
      currentReasonText: value
    });
  };

 onReasonIconSubmit(){
    var value = this.state.currentReasonText;
    this.onReasonSubmit(value);
  }

  onReasonSubmit(val){
      var reason = {
        value:val,
        currentReasonLocked:this.state.currentReasonLocked 
      }
      
      this.setState({
            currentReasonText:'',
            currentReasonLocked:false
      });
      this.props.onSubmit(reason);
  }


  toggle() {
        this.setState({currentReasonLocked: !this.state.currentReasonLocked});
    }

  render() {

    return(
        <View style={styles.reasonview}>
            <Text style={styles.generaltitle}>Any Reasons?</Text>
                <View style={styles.textarea} >
                    <TextInput
                        key={"text"}
                        style={styles.textbox}
                        onChangeText = {(value) => this.onReasonChange(value)}
                        onSubmitEditing={(event) => this.onReasonSubmit(event.nativeEvent.text)}
                        value={this.state.currentReasonText}
                        blurOnSubmit={true}
                        underlineColorAndroid={'transparent'}
                        placeholder="For example: They make noise..." />
                    
                    <View style={styles.submitbutton}>
                        {this.state.currentReasonText ?
                            <Icon.Button name="send" size={12} color="#ffffff" 
                            backgroundColor="blue" onPress={(value) => this.onReasonIconSubmit(value)}
                            style={styles.iconstyle} />
                                :
                            <Icon.Button name="send" size={12} color="#ffffff" 
                            backgroundColor="#ABB2B9"
                            style={styles.iconstyle} />
                        } 
                    </View>

                    <TouchableWithoutFeedback onPress={this.toggle.bind(this)}>
                        <View>
                            {this.state.currentReasonLocked ?
                                <Icon name="lock" size={25} color='#000000' backgroundColor="#76D7C4" />
                                :
                                <Icon name="lock" size={25} color='#ABB2B9' backgroundColor="#76D7C4" />
                            }
                        </View>
                    </TouchableWithoutFeedback> 
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

  reasonview:{
    marginTop:20,
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

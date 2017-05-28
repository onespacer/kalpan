'use strict';
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default class SelfExplorePan extends Component {
  
  state = {
    conclusions: []
  }

onConclusionChange(key, value){  
    for(var index=0; index < this.state.conclusions.length; ++index){
        if(this.state.conclusions[index].Key == key){
            this.state.conclusions[index].Value = value;
            return;
        }
    }

    var conclusion ={
        Key: key,
        Value:value
    }
    this.state.conclusions.push(conclusion);
    this.setState({
      conclusions: this.state.conclusions
    });
};

onConclusionSubmit(key, value, parentId){  
    let records = this.props.records;
    //console.log(records.length);
    var newRecord = {
          id:records.length+1,
          conclusion:value,
          isFinal:false,
          reasons:[],
          parent:parentId
    }
    records.push(newRecord);
    records.map((record,index) => {
        if(record.id == parentId){
            record.reasons.push(newRecord.id); 
        }
    });0

    console.log("cleaning conclusions");
    this.state.conclusions.splice(0, this.state.conclusions.length);
    this.setState({
        conclusions:[],
    });
    console.log(this.state.conclusions);

  };

  displayGrid(currentRecord, index, records, marginval){
      var allviews = [];
      if(currentRecord.conclusion != null){
            allviews.push(<View key={index} style={{  }} >
                <View style={{marginLeft:marginval}}>
                    <Text key={index} style={styles.generaltitle}>{currentRecord.conclusion}</Text>
                    <View style={styles.textarea} >
                        <TextInput
                            key={"text"+index}
                            style={styles.textbox}
                            onChangeText = {(value) => this.onConclusionChange("text"+index, value)}
                            onSubmitEditing={(event) => this.onConclusionSubmit("text"+index, event.nativeEvent.text, currentRecord.id)}
                            value={this.state.conclusions["text"+index]}
                            blurOnSubmit={true}
                            underlineColorAndroid={'transparent'}
                            placeholder="Add reason..." />
                        <View style={styles.submitbutton}>
                            {console.log('index:' + index)}
                            {console.log('here..' + this.state.conclusions["text"+index])}
                            {this.state.conclusions["text"+index] ?
                                <Icon.Button name="send" size={12} color="#ffffff" 
                                backgroundColor="blue" onPress={this.onConclusionIconSubmit}
                                style={styles.iconstyle} />
                                    :
                                <Icon.Button name="send" size={12} color="#ffffff" 
                                backgroundColor="#ABB2B9" onPress={this.onReasonSubmit}
                                style={styles.iconstyle} />
                            } 
                        </View> 
                    </View>
                </View>
            </View>);
      }

      currentRecord.reasons.map((reason,index)=>{
            records.map((record,index)=>{
                if(record.id == reason){
                    var tmpView = this.displayGrid(record, index, records, marginval + 15);
                    if(tmpView != undefined){
                        tmpView.map((tmpv, index3)=>{
                            allviews.push(tmpv);
                        })
                        
                    }
                }
            })
      })
      return allviews;
  };


  render() {
      let records = this.props.records;
      return(
        <ScrollView style={styles.selfExplorePan} >
            {records.map((record, index)=>{
                if(record.conclusion == null){
                    return (this.displayGrid(record, index, records, 0));
                }           
            })}
        </ScrollView>);
};

}

const styles = StyleSheet.create({

  selfExplorePan:{
    flex:1,
    flexDirection:'column',
    padding:10,
    backgroundColor:'#AED6F1'
  },

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

'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableHighlight, Alert} from 'react-native';
import Conclusion from '../Component.Main/Conclusion';
import Reason from '../Component.Main/Reason';
import RCView from '../Component.Main/RCView';
//import ToastAndroid from './ToastAndroid';

export default class Record extends Component {

  state = {
    finalConclusion:'',
    reasons:[]
  }

  _reasonSubmit(reason){
     let localReason = {
       reasonText: reason.value,
       locked: reason.currentReasonLocked
     } 
     this.state.reasons.push(localReason);
     this.setState({
       reasons : this.state.reasons,
     });
     console.log(this.state);
  };

  getRecordObj(newId, value, parentId){
    var newRecord = 	{
				id:newId,
				conclusion:value,
				isFinal:false,
				reasons:[],
				parent:parentId
		}
    return newRecord;
  }

  _recordConclusion(){
    if(!this._validate())
      return;
    let records = this.props.records;
    var conclusionObj = this.getRecordObj(records.length, this.state.finalConclusion, 0);
    records.push(conclusionObj);
    for(var i=0; i < this.state.reasons.length; ++i)
    {
      var reasonObj = this.getRecordObj(records.length, this.state.reasons[i].reasonText, conclusionObj.id);
      records.push(reasonObj);
      conclusionObj.reasons.push(reasonObj.id);    
    }
    for(var i=0; i < records.length; ++i){
      if(records[i].parent==null){
        records[i].reasons.push(conclusionObj.id);
        break;
      }
    }
    
    this.setState({
      finalConclusion:'',
      reasons:[]
    });
    this.props.updateRecords(records);
  }

  _validate(){
    if(this.state.finalConclusion.trim() == ''){
      Alert.alert('Not cool','You\'ve missed a conclusion');
      return false;
    }
    return true;
  }

  _conclusionSubmit(conclusion){
    //ToastAndroid.show('Awesome', ToastAndroid.SHORT);
    //console.log(conclusion);
    this.setState({
      finalConclusion:conclusion
    })
  }

  render() {
    return(
            <View style={styles.recordview}>
                <Conclusion onSubmit={(value) => this._conclusionSubmit(value)} />
                <Reason onSubmit={(value) => this._reasonSubmit(value)} />
                
                <View style={styles.resultView}>
                  <RCView conclusion={this.state.finalConclusion} reasons={this.state.reasons} />
                  <View>
                    <TouchableHighlight style={styles.wrapper}
                        onPress={() => {
                                      if(!this._validate())
                                          return;
                                      Alert.alert(
                                        'Cool',
                                        'Successfully added a new conclusion !',
                                      );
                                      this._recordConclusion();
                                      }
                        }>
                        <View style={styles.button}>
                          <Text>RECORD</Text>
                        </View>
                    </TouchableHighlight>
                  </View>
                </View>

            </View>
    );
  }
}

const styles = StyleSheet.create({
  recordview:{
     flex:1,
     flexDirection:'column',
     backgroundColor:'#AED6F1'
  },

  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 10,
  },
  resultView:{
    flex:1,
    borderRadius:1,
    borderWidth:1,
    borderColor:'gray',
    margin:10
  }
});

'use strict';
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';

export default class GridItem extends Component {
  
  state = {
      
  }

  displayGrid(currentRecord, records, marginval){
      var allviews = [];
      if(currentRecord.conclusion != ''){
            allviews.push(<View style={{marginLeft: marginval }}>
                             <View style={styles.gridItem} key={currentRecord.id}>
                                <Text style={styles.conclusionText}>{currentRecord.conclusion}</Text>
                                <Text style={styles.expandText}>{currentRecord.reasons.length} reasons</Text>
                            </View>
                        </View>);
      }

      currentRecord.reasons.map((reason,index)=>{
            //console.log("Inside reason" + index);
            records.map((record,index)=>{
                if(record.id == reason){
                    var tmpView = this.displayGrid(record, records, marginval + 10);
                    if(tmpView != undefined){
                        tmpView.map((tmpv, index3)=>{
                            allviews.push(tmpv);
                        })
                        
                    }
                }
            })
      })
      return allviews;
  }

  render() {
      let records = this.props.records;
      //console.log(records);
    return(
        <ScrollView>
            {records.map((record,index)=>{
                if(record.parent == null){
                    //console.log(record);
                    var consolidatedView = this.displayGrid(record, records, 0);
                    return consolidatedView;    
                }
            })}
        </ScrollView> 
    );
  }
}

const styles = StyleSheet.create({

    gridItem:{
        borderColor:'#2874a6',
        backgroundColor:'#5dade2',
        borderWidth:1,
        marginBottom:2,
        padding:10,
    },

    conclusionText:{
        color:'#000000',
        fontSize:14
    },

    expandText:{
        fontSize:10,
        color:'#ffffff',
        alignSelf: 'flex-end'
    },

});
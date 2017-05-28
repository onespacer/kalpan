'use strict';
import React, { Component } from 'react';
import { Text, StyleSheet, ScrollView} from 'react-native';

export default class ChatWindow extends Component {

wholeChat(){
    let chats = this.props.content;
    return chats.map(function(chat, i){
        return (
            <Text key={i} style={styles.chatText}>{chat.owner} : {chat.text}</Text>
        );
    });
}

adjustHeight(height){
    this.refs['chatScroll'].scrollTo({y:height});
}
    
render() {
   
    return (
        <ScrollView
        ref='chatScroll'
        automaticallyAdjustContentInsets={false}
        scrollEventThrottle={200}
        onContentSizeChange={(contentWidth,contentHeight)=>this.adjustHeight(contentHeight)}> 
            {this.wholeChat()}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  chatText:{
      marginLeft:3,
      color: 'black'
  }
});

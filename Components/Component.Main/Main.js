'use strict';
import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Record from '../Component.Main/Record';
import AnalysisGrid from '../Component.Main/Analysis/AnalysisGrid';
import SelfExplorePan from '../Component.Main/SelfExplore/SelfExplorePan';

export default class Main extends Component {

  state = {
    backupFlag: false,
    index: 0,
    routes: [
      { key: '1', title: 'Record' },
      { key: '2', title: 'Self-Explore' },
      { key: '3', title: 'Analysis' },
    ],
    records: [
      {
          id:0,
          conclusion:null,
          isFinal:false,
          reasons:[],
          parent:null
      },
      /*{
          id:1,
          conclusion:'I am not going to do swimming ever in my life.',
          isFinal:false,
          reasons:[2,3,5],
          parent:0
      },
      {
        id:6,
        conclusion:"I don't like alepathic medicines",
        isFinal:false,
        reasons:[7,8,9,10],
        parent:0
    },
		{
				id:2,
				conclusion:'I am scared of water',
				isFinal:true,
				reasons:[],
				parent:1
    },
		{
				id:3,
				conclusion:'I was drown due to a big water wave in San Jose last month',
				isFinal:false,
				reasons:[4],
				parent:1
		},
		{
				id:4,
				conclusion:'The wind was too gusty',
				isFinal:true,
				reasons:[],
				parent:3
		},
		{
				id:5,
				conclusion:'A whale attacked me when I was swimming in the deep ocean in the mid-pacific near bermuda',
				isFinal:false,
				reasons:[],
				parent:1
    },
		{
				id:7,
				conclusion:"They have to many synthetic chemicals, which reacts with your lungs and kidneys and harm them slowly",
				isFinal:false,
				reasons:[],
				parent:6
		},
		{
				id:8,
				conclusion:"They have too many long term side effects, and reduces your body's natural immunity",
				isFinal:false,
				reasons:[],
				parent:6
		},
		{
				id:9,
				conclusion:"A survey shows that, most of the people who had alepathic medicines, cured faster in short-term, howeever they ended up in having a long-term medicational problem in their body",
				isFinal:false,
				reasons:[],
				parent:6
		},
		{
				id:10,
				conclusion:"Ayurvedic medicines are much better than them",
				isFinal:true,
				reasons:[],
				parent:6
    }*/]
  }

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return (
            <TabBar 
              {...props}
              scrollEnabled
              style={styles.tabbar}
              labelStyle={styles.tablabel} />
    );
  };

  updateRecords(value){
    this.setState({
      records: value
    });
  }

   _renderScene = ({ route }) => {

      switch (route.key) {
        case '1':
          return <Record records={this.state.records} updateRecords={(value) => this.updateRecords(value)} />;
        case '2':
          return <SelfExplorePan records={this.state.records} />;
        case '3':
          return <AnalysisGrid records={this.state.records} />
        default:
          return null;
      }
  };

  backupFlagToggle(){
    this.setState({
      backupFlag: !this.state.backupFlag
    });
  };

  render() {
    
    return(
        <View style={styles.container}>
          <View style={styles.titleView}>
              <Text style={styles.titleText}>Darshan, helps you to self-explore</Text>
              
              <TouchableWithoutFeedback style={styles.wrapper} onPress={this.backupFlagToggle}>
                  <View>
                    <TouchableWithoutFeedback onPress={this.backupFlagToggle.bind(this)}>
                        <View>
                            {this.state.backupFlag ?
                                <Icon style={styles.iconstyle} name="cloud-upload" size={25} color='#00FF33' backgroundColor="transparent" />
                                :
                                <Icon style={styles.iconstyle} name="cloud-upload" size={25} color='#ABB2B9' backgroundColor="transparent" />
                            }
                        </View>
                    </TouchableWithoutFeedback>
                  </View>
              </TouchableWithoutFeedback>
          </View>
          <TabViewAnimated
            style={styles.tabs}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderHeader={this._renderHeader}
            onRequestChangeTab={this._handleChangeTab}
          />
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection:'column'
  },

  tabs:{
      flex:9,
      flexDirection:'column'
  },

  tabbar:{
    backgroundColor:'#ffffff',
    marginBottom:5
  },

  tablabel:{
    color:'#000000'
  },

  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  wrapper: {
    borderRadius: 5,
    marginBottom: 5,
  },

  titleView: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'#6A85B1',
    justifyContent:'center',
    alignItems:'center'
  },

  titleText:{
    color:'#ffffff',
    alignItems: 'center'
  },

  iconstyle:{
    marginLeft:20,
    alignItems: 'flex-end',
    borderWidth:1,
    padding:2,
    paddingLeft:4,
    borderRadius:5,
    borderColor:'#ABB2B9'
  },

});

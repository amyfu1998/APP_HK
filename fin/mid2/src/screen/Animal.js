'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import { Icon,List, ListItem } from 'react-native-elements';
import * as firebase from 'firebase';
import {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';


class Animal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('adopt');
  }

  getRef() {
    return firebase.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          name: child.val().name,
          sex: child.val().sex,
          category: child.val().category,
          kind: child.val().kind,
          date: child.val().date,
          type: child.val().type,
          age: child.val().age,
          number1: child.val().number1,
          number2: child.val().number2,
          color: child.val().color,
          fertility: child.val().fertility,
          ps: child.val().ps,
          url:child.val().url,
          like:false,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  goToPageTwo = (animalinfo) => {
    this.props.navigation.navigate('AnimalInfo', { ...animalinfo });
  };

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}
            
          />
      </View>
    )
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text,name:text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem 
        item={item} 
        key={item.name}
        //avatar={require('../assets/dog.jpg')}
        avatar={{url:item.url}}
        avatarStyle={{width:100,height:100,top:3}}
        subtitle={
          <View style={styles.info}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.textset}>{item.name}</Text>
            <Icon 
              name='face'
              //color={animalinfo.sexcolor}                 
              iconStyle={{top:2,left:4}}
              color={(`${item.sex}`  === "公") ?'#6fa8dc':'#fcb0c4'}
              size={18}
            />
            </View>
            <Text style={styles.textset}>{item.category}</Text>
            <Text style={styles.textset}>{item.kind}</Text>
            <Text style={styles.textset}>{item.age}</Text>
          </View>
        }
            
        onPress={() => this.goToPageTwo(item)} />
      
    );
  }

}

const styles={
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  listview: {
    flex: 1,
  },
  info:{
    marginLeft:20,
  },
  textset:{
    fontSize:16,
    marginTop:7,
  }
}
export default Animal;


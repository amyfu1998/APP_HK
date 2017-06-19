'use strict';

import React, {Component} from 'react';
import ReactNative from 'react-native';
import { Icon,List, ListItem } from 'react-native-elements';

const firebase = require('firebase');


const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;


class Miss extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('miss');
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
          name: child.val().name,
          sex: child.val().sex,
          category: child.val().category,
          kind: child.val().kind,
          date: child.val().date,
          type: child.val().type,
          age: child.val().age,
          number: child.val().number,
          sick: child.val().sick,
          color: child.val().color,
          position: child.val().position,
          ps: child.val().ps,
          url:child.val().url,
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
    this.props.navigation.navigate('MissInfo', { ...animalinfo });
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

  _renderItem(item) {
    return (
      <ListItem 
        item={item} 
        key={item.name}
        avatar={{url:item.url}}
        avatarStyle={{width:100,height:100,top:3}}
        subtitle={
          <View style={styles.info}>
            <View style={{flexDirection:'row'}}>
            <Text style={styles.textset}>{item.name}</Text>
            <Icon 
              name='face'
              color={(`${item.sex}`  === "公") ?'#6fa8dc':'#fcb0c4'}        
              iconStyle={{top:2,left:4}}
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
export default Miss;


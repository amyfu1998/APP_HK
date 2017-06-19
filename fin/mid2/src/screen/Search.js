import React, { Component } from 'react';
import { ScrollView,View,Text,TextInput} from 'react-native';
import { Button ,Card,Icon} from 'react-native-elements';


// Make a component
class Search extends Component {

  render() {
 
    return (
      <View style={styles.searchPage}>
          <View style={styles.searchStyle}>
              <Text style={styles.textStyle}>種類</Text>
              <TextInput style={styles.input}/>
              <Icon
                name="arrow-drop-down"
                iconStyle={{left:-20}}
                size={18}
                color='#aaaaaa'
              />  
          </View>
          <View style={styles.searchStyle}>
              <Text style={styles.textStyle}>年齡</Text>
              <TextInput style={styles.input}/>
              <Icon
                name="arrow-drop-down"
                iconStyle={{left:-20}}
                size={18}
                color='#aaaaaa'
              />   
          </View>
          <View style={styles.searchStyle}>
              <Text style={styles.textStyle}>性別</Text>
              <TextInput style={styles.input}/>
              <Icon
                name="arrow-drop-down"
                iconStyle={{left:-20}}
                size={18}
                color='#aaaaaa'
              />   
          </View>
          <View style={styles.searchStyle}>
              <Text style={styles.textStyle}>品種</Text>
              <TextInput style={styles.input}/>
              <Icon
                name="arrow-drop-down"
                iconStyle={{left:-20}}
                size={18}
                color='#aaaaaa'
              />   
          </View>
          <View style={styles.searchStyle}>
              <Text style={styles.textStyle}>毛色</Text>
              <TextInput style={styles.input}/>
              <Icon
                name="arrow-drop-down"
                iconStyle={{left:-20}}
                size={18}
                color='#aaaaaa'
              />   
          </View>
          <Button
                title='搜尋'
                buttonStyle={{borderRadius:3,top:70,width:274,height:42}}
                backgroundColor='#ff7f24'
          />
      </View>

    );
  }
}

const styles={
  searchPage:{
    alignItems:'center',
    flex:1,
    backgroundColor:'white',
    paddingTop:20,
  },
  searchStyle:{
    flexDirection:'row',
    marginTop:20,
    marginLeft:20,
  },
  textStyle:{
    fontSize:14,
    marginRight:10,
  },
  input:{
    height:20,
    width:150,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
}

export default Search;

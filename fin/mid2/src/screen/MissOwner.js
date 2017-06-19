import React, { Component } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { List, ListItem, Text, Icon } from 'react-native-elements';

// Make a component
class SignIn extends Component {

  render() {
    const { all, row, img_row, img, name, t_l, t_r } = styles;
    return (
      <ScrollView style={styles.container}>
           <View style = {[all]}>
             <View style = {[img_row]}>
               <Image source = {require('../assets/signin.jpeg')} style = {[img]} />
               <Text style = {[name]}>胖胖</Text>
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>E-mail</Text>
               <Text style = {[t_r]}>xxx@gmail.com</Text>
             </View>
             <View style = {[row]}>
               <Text style = {[t_l]}>聯絡電話</Text>
               <Text style = {[t_r]}> 0952520173</Text>
             </View>
           </View>
      </ScrollView>
    );
  }
}

const styles = {
  container:{
    marginTop:-21,
    flex:1,
    backgroundColor:"#ffffff",
  },
  all:{
    marginTop:30,
    alignItems:'center',
    //height:493,
  },
  row:{
    marginBottom:15,
    flexDirection:'row',
    width:259,
    borderBottomColor:'#000000',
    borderBottomWidth:1,
  },
  img_row:{
    flexDirection:'row',
    width:259,
    marginTop:30,
    marginBottom:15,
  },
  img:{
    width:100,
    height:100,
  },
  name:{
    marginTop:45,
    marginLeft:10,
    fontSize:14,
  },
  t_l:{
    marginLeft:10,
    marginBottom:2,
    width:74,
    fontSize:14,
  },
  t_r:{
    marginLeft:47,
    marginBottom:1,
    fontSize:13,
  }
};

export default SignIn;

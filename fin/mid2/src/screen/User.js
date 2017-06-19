import React, { Component } from 'react';
import {View, Image } from 'react-native';
import { List, ListItem, Text, Icon,Button } from 'react-native-elements';
import * as firebase from 'firebase';
var i=0;
// Make a component
class User extends Component {
  state = {
    email: null,
    username: null,
    phone: null,

  };

  

  goToWantPage = () => {
    this.props.navigation.navigate('MemberWant');
  };

  goToMissPage = () => {
    this.props.navigation.navigate('MemberMiss');
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      this.listenForItems(dbUserid.child('miss'));
    } catch (err) { }
  }


  componentDidMount() {

   this.setUserInfo();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {
      // get children as an array
      var items = [];
      snap.forEach((child) => {
        i=i+1;
      });

    });
  }

  setUserInfo = async () => {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let phone = snapshot.val().phone;
      this.setState({ username, email, phone });
    } catch (err) { }

  }

  onSignOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate('LoginScreen');
  }

  render() {
    const { container, row, img_row, img, name, t_l, t_r } = styles;
    const { email, phone, username} = this.state;
    return (
      <View style={container}>
            <View style = {[img_row]}>
                <Image source = {require('../assets/signin.jpeg')} style = {[img]} />
                <Text style = {[name]}>{username}</Text>
            </View>
            <View style={[row]}>
                <Text style={[t_l]}>E-mail</Text>
                <Text style={[t_r]}>{email}</Text>
            </View>
            <View style={[row]}>
                <Text style={[t_l]}>聯絡電話</Text>
                <Text style={[t_r]}>{phone}</Text>
            </View>
            <View style={[row]}>
                <Text style={[t_l]}>想認養清單</Text>
                <Text style={[t_r]}>           2</Text>
                <Icon 
                  name = 'keyboard-arrow-right'
                  iconStyle = {{marginLeft:60,marginTop:-7,height:20}}
                  onPress = {() => this.goToWantPage()}
                />
            </View>
            <View style={[row]}>
                <Text style={[t_l]}>協尋狀況</Text>
                <Text style={[t_r]}>          {i}</Text>
                <Icon 
                  name = 'keyboard-arrow-right'
                  iconStyle = {{marginLeft:60,marginTop:-7,height:20}}
                  onPress = {() => this.goToMissPage()}
                />
            </View>
            <Button
              style={{ marginTop: 10 ,width:274}}
              title='Sign out'
              onPress={this.onSignOut}
            />      
      </View>
    );
  }
}

const styles = {
  container:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
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

export default User;

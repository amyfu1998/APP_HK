import React, { Component } from 'react';
import {  AppRegistry, ActivityIndicator,StyleSheet, AsyncStorage,Text,View,TextInput} from 'react-native';
import {Icon  ,Button,List, ListItemFormLabel,FormLabel, FormInput, FormValidationMessage} from 'react-native-elements';
import * as firebase from 'firebase';

// Make a component
class LoginScreen extends Component {
  state = {
    email: null,
    password: null,
    error: ' ',
    loading: false,
    showModal: false,
    token: null,
    status: 'Not Login...'
  };

  onSignIn = async () => {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.navigation.navigate('User');
    } catch (err) {
      this.setState({
        email: '',
        password: '',
        error: err.message,
        loading: false,
        showModal: false
      });
    }
  }
  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  facebookLogin = async () => {
    console.log('Testing token....');
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      console.log('Already having a token...');
      this.setState({ token });

      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      this.setState({ status: `Hello ${(await response.json()).name}` });
      console.log(response);

    } else {
      console.log('DO NOT having a token...');
      this.doFacebookLogin();
    }
  };

  doFacebookLogin = async () => {
    let { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '113143229250709',
      {
        permissions: ['public_profile'],
        behavior: 'web'
      });

    if (type === 'cancel') {
      console.log('Login Fail!!');
      return;
    }

    await AsyncStorage.setItem('fb_token', token);
    this.setState({ token });
    const response = await fetch(
      `https://graph.facebook.com/me?access_token=${token}`);
    this.setState({ status: `Hello ${(await response.json()).name}` });
    console.log(response);
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    try {
      await firebase.auth().signInWithCredential(credential);
      const { currentUser } = await firebase.auth();
      console.log(`currentUser = ${currentUser.uid}`);
      //this.props.navigation.navigate('UserStack');
      this.props.navigation.navigate('UserInfo');
    } catch (err) {

    }
  };

  renderButton() {
    if (this.state.loading) {
      return <ActivityIndicator size='large' style={{ marginTop: 30 }} />;
    }

    return (
      <View style={{flexDirection :'row' , marginTop:15}}>
        <Button
          title='註冊'
          onPress={this.goToSignUp}
          style ={{flex:1}}
        />
        <Button
          title='登入'
          backgroundColor='#ff7f24'
          onPress={this.onSignIn}
          style ={{flex:1}}
        />
      </View>
    );
  }
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder='user@email.com'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            autoCorrect={false}
            autoCapitalize='none'
            placeholder='password'
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <View style={styles.center}>
          <Text onPress={this.gotoSignup} style={styles.forget}>忘記密碼?</Text>
        </View>
          {this.renderButton()}
          <FormValidationMessage>{this.state.error}</FormValidationMessage>

 

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    backgroundColor: 'white',
  },
  forget:{
    marginLeft:20,
    marginRight:20,
    marginTop:15,
    color:'#27b5ee',
    fontSize:14,
    fontWeight:'bold'
  },
  
  iconset:{
    alignItems:'flex-end',
  },
})
export default LoginScreen;

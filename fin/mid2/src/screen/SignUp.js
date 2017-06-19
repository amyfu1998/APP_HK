import React, { Component } from 'react';
import { ScrollView, View, ActivityIndicator, AsyncStorage, Picker,AlertIOS, } from 'react-native';
import * as firebase from 'firebase';
import { FormLabel, FormInput, FormValidationMessage, Button, CheckBox,Icon  } from 'react-native-elements';

// Make a component
class SignUp extends Component {
  state = {
    email: null,
    password: null,
    phone: null,
    username: null,

    error: ' ',
    loading: false,
    token: null,
    status: 'Not Login...'
  };


  onSaveInfo = async () => {
    const { currentUser } = firebase.auth();
    const { email, phone, username } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    dbUserid.set({ email, phone, username});
  }

  onCreateUser = async () => {
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.onSaveInfo();
      this.setState({ showModal: false });
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

  onCLoseModal = () => {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false,
      showModal: false
    });
  }

  goback=()=>{
    //this.props.navigation.navigate('LoginScreen');
    this.props.navigation.goBack();
  }
  
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
  }

  render() {
    return (
      <ScrollView style={styles.bg}>
        <View style={styles.formStyle}>
          <FormLabel>帳號</FormLabel>
            <FormInput
              placeholder='user@email.com'
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          <FormLabel>密碼</FormLabel>
            <FormInput
              secureTextEntry
              autoCorrect={false}
              autoCapitalize='none'
              placeholder='password'
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <FormLabel>姓名</FormLabel>
            <FormInput
              placeholder='丸子花'
              autoCorrect={false}
              autoCapitalize='none'
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
          <FormLabel>電話</FormLabel>
            <FormInput
              autoCorrect={false}
              placeholder='555-555-5555'
              keyboardType='phone-pad'
              value={this.state.phone}
              onChangeText={phone => this.setState({ phone })}
            />
          <FormValidationMessage>{this.state.error}</FormValidationMessage>
          <Button
            title='註冊'
            style={{marginTop:20}}
            backgroundColor='#ff7f24'
            onPress={this.add}
            />

        </View>

      </ScrollView>
    );
  }

  add= ()=> {
    const { email, password } = this.state;
    this.setState({ error: ' ', loading: true });
    AlertIOS.prompt(
      '確定註冊？',
      null,
      [
        {
          text: '取消', 
          onPress:()=>{this.onCLoseModal()},
          style: 'cancel'},
        {
          text: '註冊',
          onPress: () => {this.onCreateUser()}
        },
      ],
      'default'
    );
  }
}

const styles = {
  bg:{
    flex:1,
    backgroundColor:'white',
  },
  formStyle: {
    marginTop: 20,
  },
  icon:{
    marginLeft:10
  }
};

export default SignUp;
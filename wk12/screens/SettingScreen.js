import React, { Component } from 'react';
import { View, Picker, ScrollView } from 'react-native';
import * as firebase from 'firebase';

import { FormLabel, FormInput, Button, CheckBox } from 'react-native-elements';

// Make a component
class SettingScreen extends Component {
  state = {
    email: null,
    phone: null,
    username: null,
    city: null,
    birthday:null,
    gender: 'male',
  };

  async componentWillMount() {
    const { currentUser } = firebase.auth();
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    try {
      let snapshot = await dbUserid.once('value');
      let username = snapshot.val().username;
      let email = snapshot.val().email;
      let city = snapshot.val().city;
      let phone = snapshot.val().phone;
      let gender = snapshot.val().gender;
      let birthday = snapshot.val().birthday;

      this.setState({ username, email, city, phone, gender, birthday });
    } catch (err) { }
  }

  onSaveInfo = async () => {
    const { currentUser } = firebase.auth();
    const { email, phone, username, city, gender, birthday } = this.state;
    let dbUserid = firebase.database().ref(`/users/${currentUser.uid}`);
    dbUserid.set({ email, phone, username, city, gender, birthday });
    this.props.navigation.goBack();
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={styles.formStyle}>
        <FormLabel>Username</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='John Doe'
          value={this.state.username}
          onChangeText={username => this.setState({ username })}
        />
        <FormLabel>Email</FormLabel>
        <FormInput
          placeholder='user@email.com'
          autoCorrect={false}
          autoCapitalize='none'
          keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <FormLabel>Phone</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='555-555-5555'
          value={this.state.phone}
          keyboardType='phone-pad'
          onChangeText={phone => this.setState({ phone })}
        />
        <FormLabel>Birthday</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='1900/01/01'
          value={this.state.birthday}
          onChangeText={birthday => this.setState({ birthday })}
        />
        <FormLabel>City</FormLabel>
        <FormInput
          autoCorrect={false}
          placeholder='Taipei city'
          value={this.state.city}
          onChangeText={city => this.setState({ city })}
        />
        <Picker
          style={{marginTop:-20}}
          selectedValue={this.state.gender}
          onValueChange={gender => this.setState({ gender })}
        >
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
        <Button
          style={{marginTop:-20}}
          title='Save Setting'
          onPress={this.onSaveInfo}
        />
      </ScrollView>
    );
  }
}

const styles = {
  formStyle: {
    flex:1,
    backgroundColor:'white',
  }
};

export default SettingScreen;

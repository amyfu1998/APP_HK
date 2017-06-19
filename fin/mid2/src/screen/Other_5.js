import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';


// Make a component
class Other_5 extends Component {


  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        
        <Image source={require('../assets/img_corporate.png')} style={{ height: 450, width: 335, marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 10 }} />

         <View style={{ margin: 10 }}>
          <Button
            raised
            icon={{ name: 'pets' }}
            title='待用天使'
            backgroundColor='#ff7f24'
           
          />
        </View>       
       
      </ScrollView>
    );
  }
}

export default Other_5;

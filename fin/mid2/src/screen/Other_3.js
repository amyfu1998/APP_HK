import React, { Component } from 'react';
import { View,TextInput } from 'react-native';
import { Button} from 'react-native-elements';


// Make a component
class Other_3 extends Component {

  render() {
    const {container,inputStyle}=styles
    return (
      <View style={container}>
        <TextInput 
            style={inputStyle}
            multiline={true}
            placeholder='請輸入對我們的意見與想法'
        />
        <Button
            title='傳送'
            buttonStyle={{borderRadius:3,top:35,width:274,height:42}}
            backgroundColor='#ff7f24'
          />
      </View>
    );
  }
}

const styles={
  container:{
    backgroundColor:'white',
    flex:1,
    alignItems:'center',
  },
  inputStyle:{
    fontSize:14,
    height:300,
    paddingTop:5,
    paddingLeft:15,
    marginTop:30,
    marginLeft:30,
    marginRight:30,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  }
}

export default Other_3;

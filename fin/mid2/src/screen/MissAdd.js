import React, { Component } from 'react';
import { ScrollView,View,Text,TextInput,TouchableHighlight,AlertIOS,} from 'react-native';
import { Button ,Card,Icon,FormLabel,FormInput} from 'react-native-elements';
import * as firebase from 'firebase';
// Make a component
class MissAdd extends Component {
  constructor(props) {
    super(props);
    this.itemsRef = this.getRef().child('miss');
  }

  getRef() {
    return firebase.database().ref();
  }

  state = {
    name:null,
    sex:null,
    category:null,
    kind:null,
    date:null,
    type:null,
    age:null,
    number:null,
    color:null,
    sick:null,
    position:null,
    url:null,
    ps:null,
  };
 
  back(){
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView>
      <View style={styles.Container}>
          <View style={styles.Row}>
            <Icon
              name="add-a-photo"
              iconStyle={{left:-20}}
            />
            <View style={styles.photoStyle}></View>
          </View>
          
          <View style={styles.Row}>
              <Text style={styles.textStyle}>名字</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
          
                />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>性別</Text>
              <TextInput 
                placeholder='公／母／未知'
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.sex}
                onChangeText={sex => this.setState({ sex })}
                />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>種類</Text>
              <TextInput 
                placeholder='狗／貓／鳥／其他'
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.category}
                onChangeText={category => this.setState({ category })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>品種</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.kind}
                onChangeText={kind => this.setState({ kind })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>失蹤日期</Text>
              <TextInput 

                style={[styles.inputStyle,styles.inputWidth_2]}
                value={this.state.date}
                onChangeText={date => this.setState({ date })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>體型</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.type}
                onChangeText={type => this.setState({ type })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>年紀</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.age}
                onChangeText={age => this.setState({ age })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>毛色</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_1]}
                value={this.state.color}
                onChangeText={color => this.setState({ color })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>晶片編號</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_2]}
                value={this.state.number}
                onChangeText={number => this.setState({ number })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>狂犬症病號</Text>
              <TextInput 
                style={[styles.inputStyle,styles.inputWidth_3]}
                value={this.state.sick}
                onChangeText={sick=> this.setState({ sick })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>失蹤地點</Text>
              <TextInput style={[styles.inputStyle,styles.inputWidth_2]}
                value={this.state.position}
                onChangeText={position => this.setState({ position })}
              />
          </View>
          <View style={styles.Row}>
              <Text style={styles.textStyle}>特色</Text>
              <TextInput 
                style={[styles.inputStyle_2,styles.inputWidth_1]}
                multiline={true}
                value={this.state.ps}
                onChangeText={ps => this.setState({ ps })}
              />
          </View>
          
          <Button
                title='確定登刊'
                buttonStyle={{borderRadius:3,top:35,width:274,height:42}}
                backgroundColor='#ff7f24'
                onPress ={this.add}
          />
        </View>
      </ScrollView>

    );
  }


  add= ()=> {
    AlertIOS.prompt(
      '確定登刊？',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: () => {
            this.itemsRef.push({ 
              name:this.state.name,
              sex:this.state.sex,
              category:this.state.category,
              kind:this.state.kind,
              date:this.state.date,
              type:this.state.type,
              age:this.state.age,
              number:this.state.number,
              color:this.state.color,
              sick:this.state.sick,
              position:this.state.position,
              url:"https://firebasestorage.googleapis.com/v0/b/appdesign-9e933.appspot.com/o/preload.png?alt=media&token=a54ed8f0-3a00-49ab-a739-004076a2c9c1",
              ps:this.state.ps,
          })
          this.back()
          }
        },
      ],
      'default'
    );
  }


}

const styles={
  Container:{
    alignItems:'center',
    flex:1,
    backgroundColor:'white',
    paddingTop:10,
    paddingBottom:70,
  },
  photoStyle:{
    width:150,
    height:100,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  Row:{
    flexDirection:'row',
    marginTop:20,
    
  },
  textStyle:{
    fontSize:14,
    marginRight:10,
  },
  inputStyle:{
    height:25,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  inputStyle_2:{
    height:100,
    paddingLeft:10,
    borderWidth:1,
    borderRadius:5,
    borderColor:"#dddddd",
  },
  inputWidth_1:{
    width:178,
  },
  inputWidth_2:{
    width:150,
  },
  inputWidth_3:{
    width:136,
  },
}

export default MissAdd;

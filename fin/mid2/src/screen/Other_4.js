import React, { Component } from 'react';
import {Text,View ,Linking} from 'react-native';
import { Card,List, ListItem ,Icon} from 'react-native-elements';


// Make a component
class Other_4 extends Component {


  render() {
    const {container,line,row,titleStyle,textStyle,psStyle} = styles;
    return (
      <View style={container}>
          <View style={row}>
            <Text style={titleStyle}>臺北市動物保護處</Text>
            <Icon 
                name='location-on'
                iconStyle={{top:-3}}
                color='#ff3030'
                onPress={() => Linking.openURL('https://www.google.com.tw/maps/place/台北市動物保護處/@25.0187909,121.5704263,17z/data=!3m1!4b1!4m5!3m4!1s0x3442aa51f4a74189:0xb5db7d966a0df6a7!8m2!3d25.0187909!4d121.572615')}
            />
          </View>
          <View>
            <Text style={textStyle}>地址：臺北市信義區吳興街 600 巷 109 號</Text>
            <View style={row}>
              <Text style={textStyle}>電話：02-87897158 </Text>
              <Icon 
                  name='local-phone'
                  iconStyle={{left:4,top:4}}
                  color='#6fa8dc'
              />
            </View>
            <Text style={textStyle}>服務時間：週一至週五 AM09:00-PM5:00</Text>
          </View>

        <View style={line}></View>

          <View style={row}>
            <Text style={titleStyle}>臺北市動物之家</Text>
            <Icon 
                name='location-on'
                iconStyle={{top:-3}}
                color='#ff3030'
                onPress={()=>Linking.openURL("https://www.google.com.tw/maps/place/台北市動物之家/@25.0631157,121.6067468,17z/data=!3m1!4b1!4m5!3m4!1s0x3442aca17b1bb197:0x5bb32ef0b85dc32f!8m2!3d25.0631109!4d121.6089355")}
              />
          </View>
          <View>
            <Text style={textStyle}>地址：臺北市內湖區潭美街 852 號</Text>
            <View style={row}>
              <Text style={textStyle}>電話：02-87913254 #5</Text>
              <Icon 
                    name='local-phone'
                    iconStyle={{left:4,top:4}}
                    color='#6fa8dc'
                />
            </View>
            <Text style={textStyle}>服務時間：週二至週日 AM10:00-PM4:00</Text>
            <Text style={psStyle}>※國定假日無提供服務</Text>
            <Text style={psStyle}>※AM12:30-PM1:30無提供服務</Text>
          </View>
    
      </View>
    );
  }
}
const styles={
  container:{
    paddingTop:30,
    backgroundColor:'white',
    alignItems:'center',
    flex:1,
  },
  row:{
    flexDirection:'row',
  },
  center:{
    alignItems:'center',
  },
  titleStyle:{
    fontSize:16,
  },
  textStyle:{
    marginTop:10,
    fontSize:14,
  },
  psStyle:{
    marginTop:8,
    marginLeft:70,
    fontSize:12,
  },
  line:{
    height:1,
    marginTop:25,
    marginBottom:25,
    width:350,
    backgroundColor:"#000000",
  }
}
export default Other_4;

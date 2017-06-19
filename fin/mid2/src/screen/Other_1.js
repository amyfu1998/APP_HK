import React, { Component } from 'react';
import { ScrollView,Text, View,Image } from 'react-native';
import {Tile ,Icon} from 'react-native-elements';

// Make a component
class Other_1 extends Component {
  render(){
    const {container,detail}=styles;
    return (
      <ScrollView>
        <Image 
          source={require('../assets/img_report.jpg')} 
          style={{height:250,width:385}}
          resizeMode="stretch"
        />
       
        <View style={container}>
            <Text style={detail}>
            動物保護報案 App 結合智慧型手機之
            定位服務與網路通訊等功能，當您使用 App
            報案的同時也能將案位置傳送給動物保護檢
            查員，讓動物保護檢查員能盡快協助處理。
            </Text>
            <Text style={detail}>
            檢舉人若發現他人違法「動物保護法」
            或「台北市動物保護自治條例」且有相關證
            據(影像)供調查，可透過本系統點選報案，
            若有其他陳情案件，請多利用本處24小時動
            物保護專線87913064~5提供服務。
            </Text>
            <Text style={detail}>
            經檢舉案件將依情節、證據力等因素影
            響結案時間，且檢局案件若符合本市檢舉違
            反動物保護法及台北市動物保護自治條例案
            件獎金發放辦法，並經查證屬實處以罰鍰收
            確定後、有罪判決或緩起訴處分確定後，本
            處另函通知檢舉人領取獎金。</Text>
            <Text style={detail}>
            檢舉人需檢附之資料如下：檢舉人姓名、
            性別、國民身分證字號、連絡電話及住址，
            被檢舉人姓名、地址(難以查明者不再此限)，
            涉嫌違法事實之時間、地點、情節及相關照
            片、錄音或錄影等證據。
            </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container:{
    paddingTop:10,
    paddingBottom:40,
    paddingLeft:30,
    paddingRight:30,
    flex:1,
    backgroundColor:'white',
  },
  detail:{
    fontSize:14,
    marginTop:20,
  },
};


export default Other_1;

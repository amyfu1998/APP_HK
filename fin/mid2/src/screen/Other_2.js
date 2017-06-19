import React, { Component } from 'react';
import { ScrollView, Image, View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

// Make a component
class Other_2 extends Component {


  render() {
    return (
      <ScrollView style={{marginTop:-21,}}>
        <List>
        <Image source={require('../assets/img_knowledge.jpg')} style={{ height: 250, width: 375, position: 'absolute' }} />
         
         <View style={{ marginTop: 270, marginLeft: 30, marginRight: 15, marginBottom: 10 }}>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838', fontSize: 20 }}>愛犬預防注射建議表</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 30, textAlign: 'left', color: '#383838' }}>  3週：可開始驅蟲。</Text>
          <Text style={{ lineHeight: 30, textAlign: 'left', color: '#383838' }}>  6-8週：注射幼犬專用疫苗。</Text>
          <Text style={{ lineHeight: 30, textAlign: 'left', color: '#383838' }}>  10-12週：施打七合一疫苗或八合一疫苗。</Text>
          <Text style={{ lineHeight: 30, textAlign: 'left', color: '#383838' }}>  14-16週：施打七合一或八合一及狂犬病疫苗。</Text>
          <View style={{ marginTop: 20, marginLeft: 30, marginRight: 20, marginBottom: 10 }}>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>※即小狗成長到六週大後，須每個月施打一次疫苗，連續三次，之後每年一次追加七合一疫苗或八合一疫苗及狂犬病疫苗即可。</Text>
          </View>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838', fontSize: 20 }}>疫苗的形式和種類</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  6-8週：注射疫苗主要是防治病毒性腸炎、副流行</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>                性感冒、傳染性支氣管炎、傳染性肝炎、</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>                犬瘟熱、犬麻疹</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  10-12週：加鉤端螺旋體症、出血性黃疸。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          ※鉤端螺旋體的預防針施打第一針後，一個月</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          後須再補一針，以後每年注射一次。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  14-16週：再添加狂犬病疫苗的注射。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          ※狂犬病疫苗須等其他疫苗都注射完後，注射第一次、</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          以後每年一次，疫苗時效為一年。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          ※狂犬病是國家法定之人畜共同傳染病，所以</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: 'grey', fontSize: 12 }}>          狗兒須施打狂犬病疫苗，才能辦理寵物登記。</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838', fontSize: 20 }}>愛犬預防注射應注意事項</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  1.  健康是否良好，未驅完蟲，不宜注射。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  2. 若有患病，虛弱，營養失調等現象，不宜注射。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  3. 應注意疫苗的有效日期。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  4. 注射後 2 ~ 3 週，才能產生抵抗力，</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>                這段期間內，應妥善照顧，盡量不洗</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>                澡，以免著涼，若有不適應送醫診治。</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838', fontSize: 20 }}>免疫效果不佳的因素</Text>
          <Text> </Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  1.  犬之本身免疫系統不健全。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  2. 本身即有潛伏感染或併發症存在。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  3. 犬隻體況不佳〔寄生蟲〕未注意到。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  4. 注射時機不對、未遵照時間追加。</Text>
          <Text style={{ lineHeight: 20, textAlign: 'left', color: '#383838' }}>  5. 其他緊急病症產生。</Text>
       
        </View>



       
        </List>
      </ScrollView>
    );
  }
}

export default Other_2;

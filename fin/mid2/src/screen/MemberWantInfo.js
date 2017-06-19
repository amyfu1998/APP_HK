import React from 'react';
import { ScrollView, Linking ,Text, View } from 'react-native';
import { Button, Card,PricingCard, Tile ,List, ListItem ,Icon} from 'react-native-elements';

// Make a component
const MemberWantInfo = (props) => {
  const { title, 
          image_1,
          sex,
          sexcolor,
          category,
          kind,
          data,
          body_type,
          age,
          number_1,
          number_2,
          color,
          fertility,
          ps
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>

      <Tile
        imageSrc={{ uri: image_1}}
        featured
      />
      <View >
        <List>
          <View style={styles.titleStyle}>
            <Text style={styles.titleText}>{title}</Text>
            <Icon 
              name='face'
              color={sexcolor}
              iconStyle={{top:-18.5,left:35}}
              size={20}
            />
          </View>
          <ListItem  hideChevron title={`性別：${sex}`} />
          <ListItem  hideChevron title={`種類：${category}`} />
          <ListItem  hideChevron title={`品種：${kind}`} />
          <ListItem  hideChevron title={`收容日期：${data}`} />
          <ListItem  hideChevron title={`體型：${body_type}`} />
          <ListItem  hideChevron title={`年紀：${age}`} />
          <ListItem  hideChevron title={`毛色：${color}`} />
          <ListItem  hideChevron title={`生育狀況：${fertility}`} />
          <ListItem  hideChevron title={`收容編號：${number_1}`} />
          <ListItem  hideChevron title={`晶片編號：${number_2}`} />
          <ListItem  hideChevron title={`附註：${ps}`} />
          <Button
                title='我要認養'
                buttonStyle={{borderRadius:3,width:274,height:42,marginTop:10,marginBottom:10,left:35}}
                backgroundColor='#ff7f24'
                onPress={()=>props.navigation.navigate('Other_4')}
                
          />
        </List>
      </View>
    </ScrollView>
  );
};

const styles = {
  titleStyle:{
    alignItems:'center',
    marginTop:10,
    marginBottom:10,
  },
  titleText:{
    fontSize:18,
    fontWeight: 'bold',
  },
  boldFont: {
    fontWeight: 'bold'
  }
};


export default MemberWantInfo;

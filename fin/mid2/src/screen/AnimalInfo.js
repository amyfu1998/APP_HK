import React from 'react';
import { ScrollView, Linking ,Text, View } from 'react-native';
import { Button, Card,PricingCard, Tile ,List, ListItem ,Icon} from 'react-native-elements';

// Make a component
const AnimalInfo = (props) => {
  const { name, 
          sex,
          category,
          kind,
          date,
          type,
          age,
          number1,
          number2,
          color,
          fertility,
          url,
          ps,
          _key,
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>

      <Tile
        imageSrc={{url:url}}
        featured
      />
      <View >
        <List>
          <View style={styles.titleStyle}>
            <Text style={styles.titleText}>{name}</Text>
            <Icon 
              name='face'
             // color={sexcolor}
              iconStyle={{top:-18.5,left:35}}
              color={(`${sex}`  === "公") ?'#6fa8dc':'#fcb0c4'}
              size={20}
            />
          </View>
          <ListItem  hideChevron title={`性別：${sex}`}/>
          <ListItem  hideChevron title={`種類：${category}`} />
          <ListItem  hideChevron title={`品種：${kind}`} />
          <ListItem  hideChevron title={`收容日期：${date}`} />
          <ListItem  hideChevron title={`體型：${type}`} />
          <ListItem  hideChevron title={`年紀：${age}`} />
          <ListItem  hideChevron title={`毛色：${color}`} />
          <ListItem  hideChevron title={`生育狀況：${fertility}`} />
          <ListItem  hideChevron title={`收容編號：${number1}`} />
          <ListItem  hideChevron title={`晶片編號：${number2}`} />
          <ListItem  hideChevron title={`附註：${ps}`} />
          <View style={{alignItems:'center'}}>
            <Button
                  title='我要認養'
                  buttonStyle={{borderRadius:3,width:274,height:42,marginTop:10,marginBottom:10}}
                  backgroundColor='#ff7f24'
                  onPress={()=>props.navigation.navigate('Contact')}
                  
            />
          </View>
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


export default AnimalInfo;

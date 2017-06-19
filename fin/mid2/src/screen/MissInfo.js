import React, { Component } from 'react';
import { ScrollView, Linking ,View} from 'react-native';
import { Button, Card, Text, PricingCard, Tile ,List, ListItem,Icon } from 'react-native-elements';

// Make a component

const MissInfo = (props) => {
  const { name,
          image,
          sex,
          sexcolor,
          category,
          kind,
          date,
          type,
          age,
          number,
          color,
          sick,
          position,
          url,
          ps
  } = props.navigation.state.params;

  return (
    <ScrollView>

      <Tile
        imageSrc={{url:url}}
        featured
      />
      <View>
        <List>
          <View style={styles.titleStyle}>
            <Text style={styles.titleText}>{name}</Text>
            <Icon 
              name='face'
              color={(`${sex}`  === "公") ?'#6fa8dc':'#fcb0c4'}
              iconStyle={{top:-18.5,left:35}}
              size={20}
            />
          </View>
          <ListItem  hideChevron title={`性別：${sex}`} />
          <ListItem  hideChevron title={`種類：${category}`} />
          <ListItem  hideChevron title={`品種：${kind}`} />
          <ListItem  hideChevron title={`失蹤日期：${date}`} />
          <ListItem  hideChevron title={`體型：${type}`} />
          <ListItem  hideChevron title={`年紀：${age}`} />
          <ListItem  hideChevron title={`毛色：${color}`} />
          <ListItem  hideChevron title={`晶片編號：${number}`} />
          <ListItem  hideChevron title={`狂犬病症號：${sick}`} />
          <ListItem  hideChevron title={`失蹤地點：${position}`} />
          <ListItem  hideChevron title={`特色：${ps}`} />
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


export default MissInfo;

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

// Make a component
class Other extends Component {
  goToPageOne = () => {
    this.props.navigation.navigate('Other_1');
  };
  goToPageTwo = () => {
    this.props.navigation.navigate('Other_2');
  };
  goToPageThree = () => {
    this.props.navigation.navigate('Other_3');
  };
  goToPageFour = () => {
    this.props.navigation.navigate('Other_4');
  };
  goToPageFive = () => {
    this.props.navigation.navigate('Other_5');
  };

  render() {
    return (
      <ScrollView>
        <List>
          <ListItem  title='動保報案' 
            onPress={() => this.goToPageOne()}
          />
          <ListItem  title='動物小常識'
            onPress={() => this.goToPageTwo()}
          />
          <ListItem  title='意見回饋'
            onPress={() => this.goToPageThree()}
          />
          <ListItem  title='關於我們'
            onPress={() => this.goToPageFour()}
          />
          <ListItem  title='合作夥伴'
            onPress={() => this.goToPageFive()}
          />
       
        </List>
      </ScrollView>
    );
  }
}

export default Other;

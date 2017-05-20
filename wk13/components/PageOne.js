import React, { Component }  from 'react';
import { ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import Panel from './Panel';
import albums from '../json/albums.json';



class PageOne extends Component {
  state = { albums: [] };

  componentWillMount() {
    this.setState({ albums });
    console.log(this.state);
  }

  goToPageTwo = (album) => {
    this.props.navigation.navigate('Details', { ...album });
  };


  render(){
    return(
      <ScrollView >
        <List>
          {this.state.albums.map((album) => (
            <Panel
              album={{...album}}
              nav={this.props.navigation}
          //    onPress={() => this.goToPageTwo(album)}
            />
          ))}
        </List>
        
    </ScrollView>
    );
  } 
}

export default PageOne;

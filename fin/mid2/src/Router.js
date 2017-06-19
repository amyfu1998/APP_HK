import React from 'react';
import { TabNavigator, StackNavigator,DrawerView,DrawerNavigator} from 'react-navigation';
import { View,Text } from 'react-native';
import { Icon  ,Button} from 'react-native-elements';

import Animal from './screen/Animal';
import AnimalInfo from './screen/AnimalInfo';
import Search from './screen/Search';
import Miss from './screen/Miss';
import MissAdd from './screen/MissAdd';
import MissInfo from './screen/MissInfo';
import MissOwner from './screen/MissOwner';
import LoginScreen from './screen/LoginScreen';
import MemberWant from './screen/MemberWant';
import MemberMiss from './screen/MemberMiss';
import MemberWantInfo from './screen/MemberWantInfo';
import MemberAdd from './screen/MemberAdd';
import User from './screen/User';
import SignUp from './screen/SignUp';
import Other from './screen/Other';
import Other_1 from './screen/Other_1';
import Other_2 from './screen/Other_2';
import Other_3 from './screen/Other_3';
import Other_4 from './screen/Other_4';
import Other_5 from './screen/Other_5';


export const AnimalStack = StackNavigator({
  Animal: {
    screen: Animal,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '領養',
        style:{backgroundColor:'#fff8dc',},
        backTitle:null,
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        right:(
          <Icon
           name="search"
           iconStyle={{right:10,}}
           onPress={()=> navigate('Search')}
         />
        )
      }),
    },
  },
  AnimalInfo: {
    screen: AnimalInfo,
    navigationOptions: {
      header: ({state}) => ({
        title: '領養資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            //name={(`${state.params.like}`  === "true") ?'favorite':'favorite-border'}
            name='favorite-border'
            iconStyle={{right:10,}}
          />
        ),
      }),
    },
  },
  Search: {
    screen: Search,
    navigationOptions: {
      header: () => ({
        title: '搜尋',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Contact:{
    screen: Other_4,
    navigationOptions: {
      header: () => ({
        title: '關於我們',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
});


export const MissStack = StackNavigator({
  Miss: {
    screen: Miss,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '失蹤協尋',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
        right: (
          <Icon
            name='add'
            iconStyle={{right:10,}}
            onPress={()=> navigate('MissAdd')}
          />
        ),
      })
    },
  },
  MissAdd:{
    screen:MissAdd,
    navigationOptions:{
      header:()=>({
        title:'登刊走失資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  MissInfo: {
    screen: MissInfo,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '失蹤動物資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            name='mail-outline'
            iconStyle={{right:10,}}
            onPress={()=> navigate('MissOwner')}
          />
        ),
      })
    },
  },
  MissOwner: {
    screen: MissOwner,
    navigationOptions: {
      header: () => ({
        title: '失主資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
        
      })
    },
  },
},
);
 

export const UserStack = StackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: () => ({
        title: '會員中心',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
        left:null,
        
      })
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: () => ({
        title: '註冊',
        tintColor:'#ff7f24',
        backTitle:null,
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        
      })
    },
  },
  User: {
    screen: User,
    navigationOptions: {
      header: () => ({
        title: '個人資料',
        tintColor:'#ff7f24',
        backTitle:null,
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        left:null,
      })
    },
  },
  MemberWant: {
    screen: MemberWant,
    navigationOptions: {
      header: () => ({
        title: '想認養清單',
        backTitle:'清單',
        tintColor:'#ff7f24',
        backTitle:null,
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  MemberMiss: {
    screen: MemberMiss,
    navigationOptions: {
      header: ({navigate}) => ({
        title: '失蹤協尋',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
        right: (
          <Icon
            name='add'
            iconStyle={{right:10,}}
            onPress={()=> navigate('Add')}
          />
        ),
      })
    },
  },
  MemberWantInfo: {
    screen: MemberWantInfo,
    navigationOptions: {
      header: () => ({
        title: '認養資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
        right: (
          <Icon
            name='favorite'
            iconStyle={{right:10,}}
            color='#ff3030'
          />
        ),
      }),
    },
  },
  Add:{
    screen:MemberAdd,
    navigationOptions:{
      header:({navigate, state})=>({
        title:'登刊走失資訊',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        backTitle:null,
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  
});



export const OtherStack = StackNavigator({
  Other: {
    screen: Other,
    navigationOptions: {
      header: () => ({
        title: '其他',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
        backTitle:null,
      })
    },
  },
  Other_1:{
    screen: Other_1,
    navigationOptions: {
      header: () => ({
        title: '動保報案',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_2:{
    screen: Other_2,
    navigationOptions: {
      header: () => ({
        title: '動物小常識',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_3:{
    screen: Other_3,
    navigationOptions: {
      header: () => ({
        title: '意見回饋',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_4:{
    screen: Other_4,
    navigationOptions: {
      header: () => ({
        title: '關於我們',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  },
  Other_5:{
    screen: Other_5,
    navigationOptions: {
      header: () => ({
        title: '合作夥伴',
        tintColor:'#ff7f24',
        titleStyle:{color:'black'},
        style:{backgroundColor:'#fff8dc'},
      })
    },
  }
});

export const TabRouter = TabNavigator(
  {
    AnimalStack: {
      screen: AnimalStack,
      navigationOptions: {
        tabBar: {
          label: '認養',
          icon: ({ tintColor }) => <Icon name="insert-emoticon" size={35} color={tintColor} />
        },
      },
    },
    MissStack: {
      screen: MissStack,
      navigationOptions: {
        tabBar: {
          label: '協尋',
          icon: ({ tintColor }) => <Icon name="pets" size={35} color={tintColor} />
        },
      },
    },
    UserStack: {
      screen: UserStack,
      navigationOptions: {
        tabBar: {
          label: '會員',
          icon: ({ tintColor }) => <Icon name="person" size={35} color={tintColor} />
        },
      },
    },
    OtherStack: {
      screen: OtherStack,
      navigationOptions: {
        tabBar: {
          label: '其他',
          icon: ({ tintColor }) => <Icon name="more-horiz" size={35} color={tintColor} />
        },
      },
    },
  },

  {
    animationEnabled: 'true',
    tabBarOptions:{
      activeTintColor:'#ff7f24',
      style:{
        height:50,
        paddingBottom:1,
        backgroundColor:'#fff8dc',
      }
    }
  }
);


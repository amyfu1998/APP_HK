import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import LoginScreen from './screens/LoginScreen';
import UserScreen from './screens/UserScreen';
import SettingScreen from './screens/SettingScreen';
import SignUpScreen from './screens/SignUpScreen';

export const UserStack = StackNavigator({
    UserScreen: {
        screen: UserScreen,
        navigationOptions: {
            header: ({ navigate, state }) => ({
                title: 'USER-INFO',
                right: (
                    <Icon
                        name='settings'
                        iconStyle={{ marginRight: 10 }}
                        onPress={() => navigate('SettingScreen')}
                    />
                ),
            })
        }
    },
    SettingScreen: {
        screen: SettingScreen,
        navigationOptions: {
            header: ({ navigate, state }) => ({
                title: 'SETTING'
            })
        }
    }
});

export const LoginStack = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
    },
    SignUpScreen:{
        screen: SignUpScreen,
    },
    UserStack: {
        screen: UserStack,
    },
},
    {
        headerMode: 'none',
    }
);

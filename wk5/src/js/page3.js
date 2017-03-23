import React from 'react';
import {View} from 'react-native';
import Header from './header';
import GameInfo from './gameinfo';

const GamePage =()=>{
    return(
    <View >
        <Header headertext={'Hearthstone'}/>
        <GameInfo />
    </View>
    );
};

export default GamePage;
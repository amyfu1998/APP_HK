import React from 'react';
import {View,Image} from 'react-native';
import Switch from './switch'

const GameInfo =()=>{
    return(
    <View style={styles.bgcolor}>
        <Switch btn1color={'rgb(100,65,165)'} btn2color={'rgb(255,255,255)'}/>
        <Image source={require('../img/img_firebat.png')} 
            style={styles.imgStyle}/>
        <Image source={require('../img/img_forsen.png')} 
            style={styles.imgStyle}/>
        <Image source={require('../img/img_kolento.png')} 
            style={[styles.imgStyle,styles.hStyle]}/>
    </View>
    );
};

const styles={
    bgcolor:{
        backgroundColor:'rgb(241,241,241)',
    },
    imgStyle:{
        height:200,
        width:365,
        marginTop:5,
        marginLeft:5,
    },
    hStyle:{
        height:144,
    }
};

export default GameInfo;
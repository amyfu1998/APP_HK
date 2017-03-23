import React from 'react';
import {View,Text,Image} from 'react-native';

const Header =(props)=>{
    const {headerStyle,imgStyle,textStyle}=styles;

    return(
    <View style={headerStyle}>
        <Image source={require('../img/btn_back.png')} 
            style={imgStyle} />
        <Text style={textStyle} >{props.headertext}</Text>
        <Image source={require('../img/btn_like.png')} 
            style={imgStyle} />
    </View>
    );
};
const styles={
    headerStyle:{
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        paddingTop:25,
        paddingLeft:8.5,
        paddingRight:8.5,
    },
    imgStyle:{
        width:33,
        height:33,
    },
    textStyle:{
        width:292,
        height:33,
        fontSize:18,
        color:'white',
        paddingTop:2.5,
        textAlign:'center',
    },
};
export default Header;
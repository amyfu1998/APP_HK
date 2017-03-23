import React from 'react'
import {View,Text,Image} from 'react-native'

const Footer =()=>{
    const {container,btnStyle,imgStyle,line,textStyle,point,row} =styles;
    return(
        <View style={container}>
            <View style={line}></View>
            <View style={row}>
                <View style={btnStyle}>
                    <Image source={require('../img/btn_games_selected.png')} style={imgStyle} />
                    <Text style={[textStyle,point]}>Games</Text>
                </View>
                <View style={btnStyle}>
                    <Image source={require('../img/btn_channels.png')} style={imgStyle} />
                    <Text style={textStyle}>Channels</Text>
                </View>
                <View style={btnStyle}>
                    <Image source={require('../img/btn_following.png')} style={imgStyle} />
                    <Text style={textStyle}>Following</Text>
                </View>
                <View style={btnStyle}>
                    <Image source={require('../img/btn_me.png')} style={imgStyle} />
                    <Text style={textStyle}>Me</Text>
                </View>
            </View>
        </View>
    );
};
const styles={
    container:{
        height:49,
        bottom:0,
    },
    line:{
        width:375,
        height:0.5,
        marginTop:-0.5,
        backgroundColor:'rgba(0,0,0,0.2)',
    },
    row:{
        flexDirection:'row',
    },
    btnStyle:{
        width:94,
        height:49,
    },
    imgStyle:{
        width:94,
        height:49,

    },
    textStyle:{
        bottom:0,
        color:'rgb(187,187,187)',
        fontSize:10,
        marginTop:-14,
        textAlign:'center',
    },
    point:{
        color:'rgb(100,65,165)',
    }
}
export default Footer;
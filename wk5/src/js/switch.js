import React from 'react';
import {View,Text} from 'react-native';

const Switch =(props)=>{
    const {btnStyle,bar,textStyle,point} = styles;
    const {btn1color,btn2color} =props;
    return(
    <View style={btnStyle}>
        <View>
            <Text style={[textStyle,point]}>LIVE</Text>
            <View style={[bar,{ backgroundColor:btn1color}]}></View>
        </View>
        <View>
            <Text style={textStyle}>RECENT</Text>
            <View style={[bar,{ backgroundColor:btn2color}]}></View>
        </View>
    </View>
    );
};

const styles={
    btnStyle:{
        height:44,
        backgroundColor:'white',
        flexDirection:'row',
    },
    textStyle:{
        fontSize:13,
        textAlign:'center',
        marginTop:15,
        marginBottom:8.5,
        color:'rgb(187,187,187)',
    },
    point:{
        color:'rgb(100,65,165)',
    },
    bar:{
        width:187.5,
        height:5,
    },
}

export default Switch;
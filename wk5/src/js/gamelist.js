import React from 'react'
import {View,Text,Image} from 'react-native'

const Searchbar =()=>{
    const {container,row,imgStyle} =styles;
    return(
        <View style={container}>
            <View style={row}>
                <Image source={require('../img/img_leagueoflegends.png')} 
                    style={imgStyle}/>
                <Image source={require('../img/img_counterstrike.png')} 
                    style={imgStyle}/>
            </View>
            <View style={row}>
                <Image source={require('../img/img_hearthstone.png')} 
                    style={imgStyle}/>
                <Image source={require('../img/img_dota2.png')} 
                    style={imgStyle}/>
            </View>
            <View style={row}>
                <Image source={require('../img/img_h1z1.png')} 
                    style={imgStyle}/>
                <Image source={require('../img/img_destiny.png')} 
                    style={imgStyle}/>
            </View>
        </View>
    );
};
const styles={
    container:{
        height:554,
        backgroundColor:'rgb(241,241,241)',
    },
    row:{
        marginTop:5,
        flexDirection:'row',
    },
    imgStyle:{
        height:180,
        width:180,
        marginLeft:5,
    }
}
export default Searchbar;
import React from 'react'
import {View,Text,Image} from 'react-native'

const Searchbar =()=>{
    const {container,searchbar,cast,searchpic,textStyle} =styles;
    return(
        <View style={container}>
            <View style={searchbar}>
                <Image source={require('../img/icon_search.png')} 
                    style={searchpic}/>
            <Text style={textStyle}>Search</Text>
            </View>
            <Image source={require('../img/btn_cast.png')} style={cast}/>
        </View>
    );
};
const styles={
    container:{
        height:64,
        backgroundColor:'rgb(100,65,165)',
        flexDirection:'row',
        paddingTop:25,
        paddingLeft:8.5,
        paddingRight:8.5,
        
    },
    searchbar:{
        width:320,
        height:30,
        borderRadius:5,
        flexDirection:'row',
        backgroundColor:'rgb(49,31,83)',
        paddingTop:6,
        paddingLeft:8.5,
    },
    searchpic:{
        width:18,
        height:18,
    },
    textStyle:{
        color:'rgb(185,163,227)',
        fontSize:15,
        marginLeft:5.5,
    },
    cast:{
        width:33,
        height:33,
        marginLeft:5,
    },
}
export default Searchbar;
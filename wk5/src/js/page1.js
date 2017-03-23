import React from 'react';
import { View,Image} from 'react-native';

const Launch =()=>{
    const {container,logo} = styles;
    return(
     <View style={container}>
        <Image source={require('../img/logo_twitch.png')} 
            style={logo}/>
     </View>

    );
};

const styles = {
    container:{
        height:667,
        width:375,
        backgroundColor:'rgb(100,65,165)',
        justifyContent:'center',
        alignItems:'center',
    },
    logo:{
        width:185.5,
        height:61.5,
    }
};
export default Launch;
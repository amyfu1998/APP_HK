import React from 'react';
import {View} from 'react-native';
import SearchBar from './searchbar';
import GameList from './gamelist';
import Footer from './footer';

const Home =()=>{
    return(
    <View >
        <SearchBar />
        <GameList />
        <Footer />
    </View>
    );
};

export default Home;
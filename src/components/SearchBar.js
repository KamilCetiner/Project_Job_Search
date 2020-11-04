import React from 'react';
import { TextInput, View, TouchableOpacity , Text} from 'react-native';

import {searchBar} from '../styles';

const SearchBar = (props) => {
    return (
        <View style={searchBar.container} >

            <TextInput 
            style= {searchBar.input}               
                onChangeText={(value) => props.onSearch(value)}
            />

            <TouchableOpacity
            style={searchBar.touch}
            
            >
                
            <Text style={searchBar.text} >Find Job </Text>
            
            
            </TouchableOpacity>
            

        </View>
    )
}

export { SearchBar }
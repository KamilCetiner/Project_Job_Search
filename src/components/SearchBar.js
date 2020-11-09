import React from 'react';
import { TextInput, View} from 'react-native';

import {searchBar} from '../styles';

const SearchBar = (props) => {
    return (
        <View style={searchBar.container} >

            <TextInput 
            placeholder='Search a job'
            style= {searchBar.input}               
                onChangeText={(value) => props.onSearch(value)}
            />

          

        </View>
    )
}

export { SearchBar }
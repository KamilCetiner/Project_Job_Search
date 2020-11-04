import React from 'react';
import {View, Text, Image} from 'react-native';

import {jobNews} from '../styles';


const JobNews = (props) => {
    return (
        <View style={jobNews.container}>
            <Text style={jobNews.text}>{props.myNews.title}</Text>
            <Image

            style={jobNews.img}
        
            source={{
            
            uri: props.myNews.company_logo ,
        }}
      />

        </View>
    )
}

export {JobNews}
import Axios from 'axios'
import React, { useState, useEffect } from 'react';
import {SafeAreaView, View, Text, ScrollView, FlatList, TouchableOpacity, Sea} from 'react-native';
import {introduction} from '../styles';
import {TopicItem, JobNews, SearchBar} from '../components';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: '64b5f6',
  },
  {
    id: 1,
    name: 'Python',
    color: 'aed581',
  },
  {
    id: 2,
    name: 'Javascript',
    color: 'ffd54f',
  },
  {
    id: 3,
    name: '.NET',
    color: 'bcaaa4',
  },
  {
    id: 4,
    name: 'Dart',
    color: '001845',
  },
  {
    id: 5,
    name: 'Go',
    color: 'ff5252',
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'e63946',
  },
  {
    id: 7,
    name: 'C',
    color: 'fb8b24',
  },
  {
    id: 8,
    name: 'C++',
    color: '06d6a0',
  },
];

const Introduction = (props) => {

  const [news, setNews] = useState([])
  const [search, setSearch] = useState([])

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=java`,
    );
    setNews(response.data);
    setSearch(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);


   const onMyJob = () => {
    props.navigation.navigate( 'SavedJobs' )
  }

  const searchJob = (each) => {

    const filteredJob = search.filter(val => {

    const text = each.toUpperCase();
    const cityName = val.title.toUpperCase();

    return cityName.indexOf(text) > -1;
  })

  setNews(filteredJob);

  }


  const renderItemNews = ({item}) => <JobNews myNews={item} /> 
  

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fafafa', }}>
      <View style={{flex: 1, }}>
        <View style={introduction.banner}>
          <Text style={introduction.bannerText}>JOB CHANCES</Text>


          <TouchableOpacity onPress={() => onMyJob()} >
          <Text style={introduction.bannerText_2}>My Jobs</Text>
          </TouchableOpacity>


          <Text style={introduction.bannerText_2}>Login</Text>
        </View>

        <SearchBar onSearch={(value) => searchJob(value)} />


        <View>

       

        </View>

        <View style={introduction.scrollcontain}>

        <ScrollView horizontal contentContainerStyle={{alignItems: 'center',  backgroundColor: '#fafafa'}}>
          {topics.map((value) => {
            return <TopicItem key={value.id} item={value} onSelect={() => selectLanguage(value.name)} />;
          })}

          
        </ScrollView>

        <View style={{flex:1, alignSelf:'center', position: 'absolute',  }}>

          
          <Text style= {{color: 'black', fontSize: 20, fontWeight: "bold" }}>Please Click Language</Text>

          </View>
        </View>


        <View>

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={news}
          renderItem={renderItemNews}


        />
        

        </View>

      </View>
    </SafeAreaView>
  );
};

export {Introduction};
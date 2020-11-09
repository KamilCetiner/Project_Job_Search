import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';

import { JobItem } from '../components'

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([]);


  AsyncStorage.getItem("@SAVE_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })


  function removeValue() {
    AsyncStorage.removeItem("@SAVE_JOBS")   
  }


  const onRemoveItem = (num) =>{  

    const newJob = [...jobList]
    
    let jobIndex = newJob.findIndex(val => val === num)  
             
    newJob.splice(jobIndex, 1) 
    
    AsyncStorage.setItem("@SAVE_JOBS", JSON.stringify(newJob))
    
}


  const renderItemJobs=({item}) => {
    return <JobItem job={item}  onDelete={() => onRemoveItem(item)} />
  }


  return (
    <SafeAreaView style={{flex:1}}  >

      
      <View style={{flex:1}} >
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={jobList}
          renderItem={renderItemJobs}
          ListEmptyComponent={() => <Text style={{alignSelf:"center", marginTop: 50, fontWeight: 'bold', fontSize:20, color:"#dd4470"}} >NOTHING</Text>}
        />
      </View>


      <View style={{position: 'absolute', top: 500, left: 100,}} >
        
      <TouchableOpacity
          style={{
            
            backgroundColor: 'red',
            padding: 20,
            borderRadius: 110,
            marginLeft: 40
                       
          }}
          onPress={() => removeValue()}
         
        >
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
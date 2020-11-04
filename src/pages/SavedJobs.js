import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList, TouchableOpacity} from 'react-native';

import { JobItem } from '../components'

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([]);
  const [removeList, setRemoveList] = useState([]);
  const [delItem, setDelItem] = useState([]);

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })

  
 


function removeValue() {

  AsyncStorage.removeItem("@SAVED_JOBS")
  .then(mov => {
    const rmlist = JSON.parse(mov);
    setRemoveList(rmlist);
  })

}


function onOneItemRemove(number) {
  
  console.log(item)
}

  return (
    <SafeAreaView>

      
      <TouchableOpacity

      onPress={() => onOneItemRemove(item.id)}
      
      
      >
        <FlatList
          keyExtractor={(item, index) => String(index)}
          data={jobList}
          renderItem={({item}) => <JobItem job={item}/>}
        />
      </TouchableOpacity>


      <View >
      <TouchableOpacity
          style={{
            
            backgroundColor: 'blue',
            padding: 30,
            borderRadius: 10,
            position: 'relative',
            top: 500
          

           
          }}
          onPress={() => removeValue()}
        >
          <Text style={{color: 'white'}}>Kayıtlıları Sil</Text>
        </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
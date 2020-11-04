import {StyleSheet, Dimensions} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 30,
    margin: 7,
    borderRadius: 6,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export const searchBar = StyleSheet.create({
    container: {
        height : 80,        
        backgroundColor: '#1976d2',
        marginHorizontal: 5,
        marginBottom: 80,
        borderRadius: 10

        

    },
    input : {
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginTop:25, 
        height: 40
        
    },

    touch : {
       
        backgroundColor: '#1976d2',
        width: Dimensions.get('window').width *0.30,
        height: Dimensions.get('window').height / 14,
        marginVertical: 35,
        justifyContent : 'center',
        borderRadius: 15

    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
        

    }

})



export const introduction = StyleSheet.create({
    banner: {
      height: Dimensions.get('window').height / 12,
      justifyContent: 'center',
      backgroundColor: 'white',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems : 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#3f51b5'
      
      
    },
    bannerText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign:'left',
      color: '#3f51b5',
      marginLeft: -15
      
    },
    bannerText_2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3f51b5',
        marginRight: -15

        
    },
    scrollcontain:{
        borderTopWidth:1,
        borderBottomWidth:1,
        height : Dimensions.get('window').height /4,
        
        

    }
  });

  export const jobNews = StyleSheet.create ({
      img:{
          height: Dimensions.get('window').height /8,
          width: Dimensions.get('window').width *0.50,
      },
      container: {
          borderWidth: 2,
          marginVertical: 15,
          marginHorizontal: 30,
          borderColor: '#b0bec5',
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 10

      },
      text: {
          textAlign: 'center',
          fontSize: 20,
      }
  })
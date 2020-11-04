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


export const introduction = StyleSheet.create({
    banner: {
      height: Dimensions.get('window').height / 12,
      justifyContent: 'center',
      backgroundColor: '#3f51b5',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems : 'center'
      
      
    },
    bannerText: {
      fontSize: 25,
      fontWeight: 'bold',
      textAlign:'left',
      color: 'white',
      marginLeft: -15
      
    },
    bannerText_2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
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
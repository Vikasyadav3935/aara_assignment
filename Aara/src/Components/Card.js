import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GradientBackground = () => {
  return (
    <View>
    <LinearGradient colors={['#aaaa',  '#191a19']} style={styles.background}>
     <View style={{marginVertical:7}}>
      <Text style={styles.text}>How's the Mood</Text>
      <Text  style={styles.text}>Today</Text>
     </View>
     <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
      <Text style={{fontSize:40,color:'white'}}>😃</Text>
      <Text style={{fontSize:40,color:'white'}}>😇</Text>
      <Text style={{fontSize:40,color:'white'}}>😑</Text>
      <Text style={{fontSize:40,color:'white'}}>😞</Text>

      <Text style={{fontSize:40,color:'white'}}>😡</Text>
     </View>

    </LinearGradient>
    <View style={{width:'95%',borderBottomColor:'#fff',borderWidth:1,alignSelf:'center'}}>

    </View>
    </View>
    

  );
};

const styles = StyleSheet.create({
  background: {
  height:180,
  width:'95%',
  borderWidth:2,
  borderColor:'yellow',
  alignSelf:'center',
  borderRadius:10,
  marginVertical:10


  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    color:'white',
    fontSize:20,
   
    marginHorizontal:10
  }
});

export default GradientBackground;

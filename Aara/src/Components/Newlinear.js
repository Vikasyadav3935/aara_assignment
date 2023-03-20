import { View, Text } from 'react-native'
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Newlinear = () => {
  return (
    <LinearGradient colors={['#aaaa',  '#191a19']} style={{width:'95%',height:100,alignSelf:'center',
    borderWidth:2,
    borderColor:'yellow',
    alignSelf:'center',
    borderRadius:10,
    marginVertical:10,flexDirection:'row',
    alignItems:'center',justifyContent:'space-around'
    }}>
        <Text style={{color:'yellow',fontSize:18,marginBottom:30,marginHorizontal:5}}>❝</Text>
        <Text style={{color:'white',fontSize:20,width:'70%'}}>
           The Team is feeling good today
        </Text>
        <Text style={{color:'yellow',fontSize:18,marginTop:35}}>❞</Text>
        <Text style={{fontSize:40,marginHorizontal:10,color:'white'}}>
        😇
        </Text>


         </LinearGradient>
  )
}

export default Newlinear
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Image = () => {
  return (
    <View style={styles.view}>
        <View style={styles.image}>
            
        </View>
        <View  >
     <Text style={styles.text}>Alok Maurya</Text>
     <Text style={{color:'#fff'}}>Developer</Text>

            
        </View>
      
    </View>
  )
}

export default Image;

const styles=StyleSheet.create({
    view:{
       flexDirection:'row',
       height:80,width:'100%',
    //    justifyContent:'center',
       alignItems:'center',
       borderWidth:1,
      
    },

    image:{
        height:60,
        width:60,
        borderRadius:29,
        borderWidth:.5,
        backgroundColor:'#fff',
        margin:10

    },
    text:{
        color:'#fff',
        fontSize:19
    }
})
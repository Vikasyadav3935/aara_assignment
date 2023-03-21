import { View, Text,StyleSheet ,Image} from 'react-native'
import React from 'react'

const Image1 = () => {
  return (
    <View style={styles.view}>
        <View style={styles.image}>
         <Image  source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfZpcCwOQYq7uMJmh-bczGU2hwAKkYMSSJz5yVas1Vg&s'}} style={{width:60,height:60,borderRadius:30}} />    
        </View>
        <View  >
     <Text style={styles.text}>Alok Maurya</Text>
     <Text style={{color:'#fff'}}>Developer</Text>

            
        </View>
      
    </View>
  )
}

export default Image1;

const styles=StyleSheet.create({
    view:{
       flexDirection:'row',
       height:80,width:'100%',
    //    justifyContent:'center',
       alignItems:'center',
     
      
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
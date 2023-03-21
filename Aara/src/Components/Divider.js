import {View, Text} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Divider = () => {
  return (
    <View style={{height: 60, width: '100%', alignContent: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '36%',
          justifyContent: 'space-evenly',
          backgroundColor: '#535454',
          zIndex: 2,
          marginVertical: 15,
        }}>
        <MaterialCommunityIcons name="speedometer" size={30} color="yellow" />
        <Text style={{color: '#fff'}}>Team Mood</Text>
      </View>
      <View
        style={{
          width: '95%',
          borderBottomColor: '#fff',
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: -30,
        }}></View>
    </View>
  );
};

export default Divider;

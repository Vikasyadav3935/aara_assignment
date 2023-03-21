import {View, Text} from 'react-native';
import React from 'react';

const ModalTitle = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '96%',
        alignSelf: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 30}}>😇</Text>
        <Text style={{fontSize: 18, color: 'white', marginLeft: 10}}>
          Modalytics
        </Text>
      </View>
      <View>
        <Text style={{color: 'white'}}>(Trend chart on Mood)</Text>
      </View>
    </View>
  );
};

export default ModalTitle;

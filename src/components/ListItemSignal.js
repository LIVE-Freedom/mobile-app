import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function ListItem({photo, title, subTitle, isFree, price, onPress}) {
  return (
    <View style={{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    }}>
      <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
        <Image
          source={require('../../assets/icon.png')}
          style={{width: 55, height: 55, borderRadius: 10, marginRight: 8}}
        />
        <View style={{width: windowWidth - 220}}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
              fontWeight:'bold'
            }}>
            {subTitle}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 14,
            }}>
            {title}
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPress} style={{
        backgroundColor: (isFree == 'Yes' ? '#0aada8' : '#ab003c'),
        padding:10,
        width: 100,
        borderRadius: 10,
      }}>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
        }}>
          {isFree == 'Yes' && 'Buy'}
          {isFree == 'No' && 'Sell'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

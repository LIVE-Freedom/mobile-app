import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Gaming from '../../../assets/images/misc/gaming.svg';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff'
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'InterBold',
            fontWeight: 'bold',
            fontSize: 30,
            color: '#20315f',
            marginTop:100
          }}>
          Welcome to Elfo App
        </Text>
        <View style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop:100}}>
          <Image
            alt="logo"
            source={require('../../../assets/icon.png')}
            style={{width:120,height:120, borderRadius:100}}
          />
        </View>
      </View>

      
      <TouchableOpacity
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'RobotoMediumItalic',
          }}>
          Webcam Model
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: 'RobotoMediumItalic',
          }}>
          Couple
        </Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default OnBoardScreen
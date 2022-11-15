import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import {windowWidth} from '../utils/Dimensions';

import {freeGames, paidGames, sliderData} from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';


export default function HomeScreen({navigation}) {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <ScrollView style={{padding: 20}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 18, fontFamily: 'Roboto-Medium', color:'black', fontWeight:'bold'}}>
            Hello Laura
          </Text>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <ImageBackground
              source={require('../../assets/images/user-profile.jpg')}
              style={{width: 35, height: 35}}
              imageStyle={{borderRadius: 25}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 8,
            justifyContent:'center',
            alignItems:'center',

          }}>
          <Image alt="logo" source={require('../../assets/Blacklogonobackground.png')} style={{width:180, height:180}}/>
        </View>



        <View style={{justifyContent:'center', flexDirection:'column'}}>

          <TouchableOpacity TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white', padding:25, backgroundColor:'#267cb6', borderColor:'#267cb6', borderWidth:1, textAlign:'center', margin:10, borderRadius:25, textTransform:'uppercase' }}>Signals</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}}>
            <Text  style={{color: 'white', padding:25, backgroundColor:'#267cb6', borderColor:'#267cb6', borderWidth:1, textAlign:'center', margin:10, borderRadius:25, textTransform:'uppercase'}}>Tutorials</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white', padding:25, backgroundColor:'#267cb6', borderColor:'#267cb6', borderWidth:1, textAlign:'center', margin:10, borderRadius:25, textTransform:'uppercase'}}>Account</Text>
          </TouchableOpacity>
          <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white', padding:25, backgroundColor:'#267cb6', borderColor:'#267cb6', borderWidth:1, textAlign:'center', margin:10, borderRadius:25, textTransform:'uppercase'}}>Terms & Conditions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Text style={{color: 'white', padding:25, backgroundColor:'#267cb6', borderColor:'#267cb6', borderWidth:1, textAlign:'center', margin:10, borderRadius:25, textTransform:'uppercase'}}>Refer Link</Text>
          </TouchableOpacity>
          
          </View>

        </View>

      
        
      </ScrollView>
    </SafeAreaView>
  );
}

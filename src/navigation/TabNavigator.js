import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ConnectScreen from '../screens/ConnectScreen/ConnectScreen';
import FavoriteScreen from '../screens/FavoriteScreen/FavoriteScreen';
import GameDetailsScreen from '../screens/GameDetailsScreen/GameDetailsScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import SignalScreen from '../screens/SignalScreen';

import { Entypo, FontAwesome, Foundation } from "@expo/vector-icons";
import { Image } from 'react-native';
import Scanner from '../screens/ScannerScreen/Scanner';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home2"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
      <Stack.Screen
        name="Scanner"
        component={Scanner}
        options={({route}) => ({
          title: route.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {backgroundColor: '#000000'},
        tabBarInactiveTintColor: '#fff',
        tabBarActiveTintColor: '#03CFB3',
        tabBarLabelStyle:{paddingVertical:3}
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({route}) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: '#000000',
          },
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="Tips"
        component={SignalScreen}
        options={{
/*           tabBarBadge: 3,
          tabBarBadgeStyle: {backgroundColor: 'black'}, */
          tabBarIcon: ({ focused, color }) => (
            <Image alt="tips"  source={require('../../assets/icon.png')}
            style={{ width: 50, height: 50, borderRadius:80, marginBottom:15 }} />
          ),
      }}/>
      <Tab.Screen
        name="Connect Toy"
        component={ConnectScreen}
        options={{
          // tabBarBadge: 1,
          tabBarBadgeStyle: {backgroundColor: '#03CFB3'},
          tabBarIcon: ({color, size}) => (
            <Image alt="vibrator"  source={require('../../assets/vibrator.png')}
            style={{ width: 25, height: 25 }} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

const getTabBarVisibility = route => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  // console.log(routeName);

  if( routeName == 'GameDetails' ) {
    return 'none';
  }
  return 'flex';
};

export default TabNavigator;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {createDrawerNavigator} from '@react-navigation/drawer';

import CoinDetailedScreen from "../screens/CoinDetailedScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import AddNewAssetScreen from "../screens/AddNewAssetScreen";

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screens/ProfileScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerShown: false,
      drawerActiveBackgroundColor: '#ea6218',
      drawerActiveTintColor: '#fff',
      drawerInactiveTintColor: '#333',
      drawerLabelStyle: {
        marginLeft: -25,
        fontFamily: 'Roboto-Medium',
        fontSize: 15,
      },
    }}>
    <Drawer.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="person-outline" size={22} color={color} />
        ),
      }}
    />{/* 
    <Drawer.Screen
      name="Messages"
      component={MessagesScreen}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="chatbox-ellipses-outline" size={22} color={color} />
        ),
      }}
    />
    <Drawer.Screen
      name="Moments"
      component={MomentsScreen}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="timer-outline" size={22} color={color} />
        ),
      }}
    /> */}
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        drawerIcon: ({color}) => (
          <Ionicons name="settings-outline" size={22} color={color} />
        ),
      }}
    />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CoinDetailedScreen"
        component={CoinDetailedScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddNewAssetScreen"
        component={AddNewAssetScreen}
        options={{
          title: "Add New Asset",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;

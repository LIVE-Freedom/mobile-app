import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RegisterScreen from '../screens/RegisterScreen';
import OnBoardScreen from '../screens/OnBoardScreen/OnBoardScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='OnBoard' screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoard" component={OnBoardScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/index";
import AppStack from "./src/navigation/AppStack";

import WatchlistProvider from "./src/Contexts/WatchlistContext";
import { RecoilRoot } from 'recoil'
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    DroidSans: require('./assets/fonts/DroidSans.ttf'),
    InterBold: require('./assets/fonts/Inter-Bold.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoBoldItalic: require('./assets/fonts/Roboto-BoldItalic.ttf'),
    RobotoItalic: require('./assets/fonts/Roboto-Italic.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoMediumItalic: require('./assets/fonts/Roboto-MediumItalic.ttf'),
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={'large'} />
  }

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: "#121212",
        },
      }}
    >
      <RecoilRoot>
       <WatchlistProvider>
        <View style={styles.container}>
          {/* <Navigation /> */}
          <AppStack/>
          {/* <AuthStack/> */}

          <StatusBar style="dark" />
        </View>
      </WatchlistProvider>
      </RecoilRoot>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 50,
  },
});

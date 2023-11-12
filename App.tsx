import { GluestackUIProvider, View, Box } from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import SplashScreenComponent from './src/screen/SplashScreen';
import Matching from "./src/screen/Matching";
import StartGame from "./src/screen/StartGame";

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#12486B',
  },
};
export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName='StartGame' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="SplashScreen" component={SplashScreenComponent} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Matching" component={Matching} />
          <Stack.Screen name="StartGame" component={StartGame} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}
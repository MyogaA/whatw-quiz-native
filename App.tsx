import { GluestackUIProvider, View, Box } from '@gluestack-ui/themed';
import React from 'react';
import { config } from '@gluestack-ui/config';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WaterWave from './src/components/WaterWave';
import Task from './src/screens/Task';
import StartGame from './src/screens/StartGame';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider config={config}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Task" component={Task} />
          <Stack.Screen name="StartGame" component={StartGame} />
        </Stack.Navigator>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

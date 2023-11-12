import React, { useEffect } from 'react';
import { View, Text, Button, ButtonIcon, ArrowLeftIcon, SettingsIcon } from '@gluestack-ui/themed';
import { ImageBackground, ImageSourcePropType } from 'react-native';
import BackgroundLogo from '../assets/backgroundLogo.png';
import SplashScreen from 'react-native-splash-screen';

export default function SplashScreenComponent({navigation}) {
    // const navigation = useNavigation();
        setTimeout(() => {
            if (SplashScreen){
                SplashScreen.hide();
            }
            navigation.navigate('Login');
        }, 1000);
  return (
    <ImageBackground
      source={BackgroundLogo as ImageSourcePropType}
      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    >
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 70,
          backgroundColor: 'rgba(0,0,0,0.3)', // Adjust the opacity/color as needed
        }}
      >
        <View
          style={{
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Text color="white" fontSize={20} fontWeight="bold">
            What Happened Around The World
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <Text color="white">
            Version 1.0
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

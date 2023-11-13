import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet,Text } from 'react-native';

const StartGameComponent = ({navigation}) => {
  return (
    <><View style={styles.container}>
          <View style={styles.topRightIcon}>
              <Image
                  source={require('../assets/diamond.png')}
                  style={{ width: 30, height: 30 }} />
              <Text style={{fontSize: 15,paddingTop: 5,fontWeight: 'bold',}}>100</Text>
              <TouchableOpacity>
              <Image
                  source={require('../assets/plus.png')}
                  style={{ width: 30, height: 30 }} />
              </TouchableOpacity>
          </View>
      <View style={styles.contener}>
      <View style={styles.centerAvatar}>
        <Image
          source={require('../assets/avatar.png')}
          style={{ width: 100, height: 100,borderWidth: 10,backgroundColor: '#12486B',borderBottomWidth: 10,borderTopWidth: 10,borderColor: '#12486B', borderRadius: 50,position: 'absolute', top: -60, left: 160, right: 0, bottom: 10, margin: 'auto' }}
        />
        <Text style={{position:'absolute',top: 50, fontSize: 20,fontWeight: 'bold',color: 'black' }}>M Yoga Atmajaya</Text>
      <View>
      <Image
          source={require('../assets/logo.png')}
          style={{ width:400, height: 300,position: 'absolute', top: -150, left: -200, right: 0, bottom: 10, margin: 'auto' }}
        />
      </View>
      </View>
      <TouchableOpacity style={styles.bottomButton} onPress={() => navigation.navigate('Matching')}>
        <Text style={{ textAlign: 'center', fontSize: 30,color: 'white' }}>
            Start Game
        </Text>
      </TouchableOpacity>
        </View>
      </View>
        </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#12486B',
    position: 'relative',
  },
  contener: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    position: 'absolute', 
    top: '30%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  topRightIcon: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'white',
    gap: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 5,
    width: 110,
    top: 35,
    right: 20,
  },
  centerAvatar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButton: {
    marginBottom: 90,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    width: "70%",
    backgroundColor: '#FFA33C',
  },
});

export default StartGameComponent;

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.body}>
        <Text style={styles.text}>Welcome to Number App</Text>
        <Text style={styles.text1}>Play</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  body: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 230,
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: 'red',
    fontSize: 70,
    fontWeight: 'bold',
  },
});

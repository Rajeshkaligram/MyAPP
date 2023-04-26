import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Text style={styles.text}>Welcome to my App.......</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

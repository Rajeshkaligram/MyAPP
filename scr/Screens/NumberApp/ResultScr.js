import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const ResultScr = ({navigation}) => {
  const route = useRoute();
  const {clickCount, ans} = route.params;
  return (
    <ImageBackground
      style={styles.back_img}
      source={require('../../assets/peakpx.jpg')}
      resizeMode="cover">
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Your Result,s Is Here</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={styles.text2}>{'Your Ans Is: ' + ans}</Text>
          <Text style={styles.text3}>
            {'You Attempted Number IS: ' + clickCount}
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.goBack()}>
            <Text style={styles.button_text}>Play Agin</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default ResultScr;

const styles = StyleSheet.create({
  back_img: {
    flex: 1,
  },
  text: {
    color: '#55F211',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 100,
  },
  text2: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 70,
  },
  text3: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
  },
  button1: {
    backgroundColor: '#51F5E1',
    marginTop: 190,
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  button_text: {
    fontSize: 16,
    fontWeight: '400',
  },
});

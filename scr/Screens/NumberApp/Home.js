import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Home = ({navigation}) => {
  const [getData, SetGetData] = useState('');
  const [ranDomNum, setRanDomNum] = useState();
  const [count, setCount] = useState(0);
  const NumberGenerate = () => {
    let Num = Math.floor(Math.random() * 100 + 1);
    Alert.alert('Number Was Generated And number between 0 To 100');
    console.log(Num);
    setRanDomNum(Num);
    setCount(1);
    return Num;
  };
  const SubmitEvent = () => {
    setCount(count + 1);
    // console.log(count);
    if (getData == ranDomNum) {
      navigation.navigate('ResultScr', {clickCount: count, ans: ranDomNum});
    } else if (getData < ranDomNum) {
      Alert.alert('You Enter Low Number');
    } else if (getData > ranDomNum) {
      Alert.alert('You Enter High Number');
    } else {
      Alert.alert('you are Wrong');
    }
  };

  // setTimeout(() => {
  //   inititalState = setCount(0)
  // });
  return (
    <ImageBackground
      style={styles.back_img}
      source={require('../../assets/peakpx.jpg')}
      resizeMode="cover">
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.text}>Let,s Play</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <TextInput
            placeholder="Please Enter Your Number"
            style={styles.input_value}
            keyboardType="numeric"
            onChangeText={text => SetGetData(text)}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => NumberGenerate()}>
            <Text style={styles.button_text}>Generate Number</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => SubmitEvent()}>
            <Text style={styles.button_text}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  back_img: {
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 40,
    marginTop: 100,
  },
  input_value: {
    marginTop: 50,
    width: 250,
    height: 35,
    backgroundColor: '#55F211',
    borderRadius: 15,
    fontSize: 20,
    fontWeight: 'bold',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#51F5E1',
    marginTop: 270,
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
  button2: {
    backgroundColor: '#F1A441',
    marginTop: 20,
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
});

import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MashButton from './CustomButton';
import Header from './Header';

const Main = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        style={styles.body}
        resizeMethod="scale"
        source={require('../../../scr/assets/backgroundimg.jpg')}>
        <Header />
        <Modal
          visible={showWarning}
          transparent
          onRequestClose={() => setShowWarning(false)}
          animationType="slide"
          hardwareAccelerated>
          <View style={styles.centered_view}>
            <View style={styles.warning_module}>
              <View style={styles.warning_title}>
                <Text style={styles.text}>WARNING</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>
                  The name must be longer than 3 characters
                </Text>
              </View>
              <Pressable
                onPress={() => setShowWarning(false)}
                style={styles.warning_button}
                android_ripple={{color: '#ffffff'}}>
                <Text style={styles.text}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text style={styles.main_text}>Please enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. john"
          onChangeText={value => setName(value)}
        />
        <MashButton
          onPressFunction={onPressHandler}
          title={submitted ? 'Clear' : 'Submit'}
          color={'#00ff00'}
        />
        <MashButton
          onPressFunction={() => console.warn('Test button work')}
          title={'Test'}
          color={'#ff00ff'}
          style={{margin: 10}}
        />
        {submitted ? (
          <View style={styles.body}>
            <Text style={styles.main_text}>Your are register {name}</Text>
            <Image
              style={styles.image}
              source={require('../../../scr/assets/done.png')}
              resizeMode="stretch"
            />
          </View>
        ) : (
          <Image
            style={styles.image}
            source={require('../../../scr/assets/error.png')}
            resizeMode="stretch"
          />
        )}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  main_text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  input: {
    width: 200,
    borderWidth: 4,
    borderColor: 'red',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color: 'white',
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_module: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20,
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning_button: {
    backgroundColor: '#00ffff',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

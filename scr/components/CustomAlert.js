import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  ToastAndroid,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const CustomAlert = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      Alert.alert(
        'Warning',
        'The name must be at least 3 characters',
        [
          {
            text: 'Do not show again',
            onPress: () => console.warn('Do not show again Pressed!'),
          },
          {
            text: 'Cancel',
            onPress: () => console.warn('Cancel Pressed!'),
          },
          {
            text: 'OK',
            onPress: () => console.warn('OK Pressed!'),
          },
        ],
        {
          cancelable: true,
          onDismiss: () => console.warn('Alert dismissed!'),
        },
      );
      ToastAndroid.showWithGravity(
        'The name must be at least 3 characters',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.body}>
        <Text style={styles.text}>Please enter your name:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. John"
          onChangeText={(Value) => setName(Value)}
        />
      
          {/* {submitted? (<TextInput
          style={styles.input}
          placeholder="e.g. John"
          onChangeText={(Value) => setName(Value)}
          onChange ={(Value) => setName(Value)}
        />) : null} */}

        <Pressable
          onPress={onPressHandler}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          android_ripple={{color: '#00f'}}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#dddddd' : '#00ff00',
            },
            styles.button,
          ]}>
          <Text style={styles.text}>{submitted ? 'Clear' : 'Submit'}</Text>
        </Pressable>
        {submitted ? (
          <Text style={styles.text}>You are register as {name}</Text>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default CustomAlert;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 10,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 50,
    alignItems: 'center',
  },
});

import {
    Modal,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const Alert = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
  
    const opPressHandler = () => {
      if (name.length > 3) {
        setSubmitted(!submitted);
      } else {
        setShowWarning(true);
      }
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.body}>
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
          <Text style={styles.text}>Please enter your name:</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g. john"
            onChangeText={value => setName(value)}
          />
          <Pressable
            onPress={opPressHandler}
            hitSlop={{top: 10, bottom: 10, right: 10, left: 10}}
            android_ripple={{color: '#00f'}}
            style={({pressed}) => [
              {backgroundColor: pressed ? '#dddddd' : '#00ff00'},
            ]}>
            <Text>{submitted ? 'Clear' : 'Submit'}</Text>
          </Pressable>
          {submitted ? (
            <Text style={styles.text}>You are register as {name}</Text>
          ) : null}
        </View>
      </SafeAreaView>
    );
  };
  
  export default Alert;
  
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
      textAlign: 'center',
    },
    input: {
      width: 200,
      borderWidth: 1,
      borderColor: '#555',
      borderRadius: 5,
      fontSize: 20,
      marginBottom: 10,
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
      borderColor: '#ff0',
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
  });
  
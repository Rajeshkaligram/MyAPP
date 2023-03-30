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

const login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [submit, setSubmit] = useState(false);
  const [warning, setWarning] = useState(false);

  const handleSubmit = () => {
    if (name.length > 3 || password.length > 3) {
      setSubmit(!submit);
    } else {
      setWarning(true);
    }
  };

  return (
    <SafeAreaView style={styles.body}>
      <Modal
        visible={warning}
        transparent
        onRequestClose={() => setWarning(false)}
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
              style={styles.warning_button}
              onPress={() => setWarning(false)}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Text style={styles.text}>Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g john Doe"
        onChangeText={name => setName(name)}
      />
      <Text style={styles.text}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="john@1234"
        onChangeText={password => setPassword(password)}
      />
      <Pressable
        onPress={handleSubmit}
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#5F9DF1' : '#E36DEC',
          },
          styles.button,
        ]}>
        <Text style={styles.text}>{submit ? 'CLEAR' : 'SUBMIT'}</Text>
      </Pressable>
      {submit ? <Text style={styles.text}>All are correct {name}</Text> : null}
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
  },
  warning_module: {
    height: 300,
    width: 300,
    backgroundColor: '#ffffff',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
  },
  warning_title: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F9F620',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  warning_body: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  warning_button: {
    backgroundColor: '#32C3F6',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
    width: 300,
    height: 40,
  },
  button: {
    padding: 10,
    margin: 60,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});

import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {useContext} from 'react';
import {AuthContext} from '../../Context/AuthContext';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {LoginData} = useContext(AuthContext);
  const handleLogin = () => {
    LoginData(email, password);
  };
  return (
    <ImageBackground
      style={styles.main}
      source={require('../../assets/backImg.jpg')}>
      <SafeAreaView style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>Login</Text>
            <TextInput
              style={styles.input1}
              placeholder="Email address......"
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input2}
              placeholder="Password......"
              autoCapitalize="none"
              secureTextEntry={true}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={{fontWeight: 'bold', marginTop: 5, marginRight: 60}}>
                Go to Signup.....
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleLogin()}>
              <Text>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 150,
    marginTop: 20,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  input1: {
    height: 40,
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 17,
  },
  input2: {
    height: 40,
    width: 200,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    marginTop: 30,
    paddingLeft: 10,
    fontSize: 17,
  },
  button: {
    marginTop: 350,
    backgroundColor: 'red',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    fontWeight: 'bold',
  },
});

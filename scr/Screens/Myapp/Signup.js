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
import React, {useState, useContext} from 'react';
import DatePicker from 'react-native-date-picker';
import {AuthContext} from '../../Context/AuthContext';

const Signup = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [height, setHeight] = useState('');
  const [Weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {SignInUp} = useContext(AuthContext);

  const handleSignup = () => {
    console.log(date);
    SignInUp(fname, lname, height, Weight, gender, date, email, password);
    navigation.navigate('Login');
  };
  return (
    <ImageBackground
      style={styles.main}
      source={require('../../assets/backImg.jpg')}>
      <SafeAreaView style={styles.body}>
        <View style={{alignItems: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.text}>SignUp</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name....."
              onChangeText={text => setFName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="last Name......"
              onChangeText={text => setLName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Height....."
              onChangeText={text => setHeight(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Weight....."
              onChangeText={text => setWeight(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Gender....."
              onChangeText={text => setGender(text)}
            />
            <>
              <TouchableOpacity
                style={styles.input3}
                onPress={() => setOpen(true)}>
                <Text style={{fontWeight: '500', fontSize: 16}}>
                  {date ? `${date}` : 'Date of birth'}
                </Text>
              </TouchableOpacity>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />
            </>
            <TextInput
              style={styles.input}
              placeholder="Email address......"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password......"
              secureTextEntry={true}
              autoCapitalize="none"
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => handleSignup()}>
              <Text>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Signup;

const styles = StyleSheet.create({
  main: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  text: {
    color: '#ffffff',
    fontSize: 20,
    marginBottom: 40,
    marginTop: 40,
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 17,
    marginBottom: 30,
  },
  input2: {
    height: 40,
    width: 250,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 17,
    marginBottom: 30,
    justifyContent: 'center',
  },
  input3: {
    height: 70,
    width: 250,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    paddingLeft: 10,
    fontSize: 17,
    marginBottom: 30,
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    marginTop: 50,
    backgroundColor: 'red',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    fontWeight: 'bold',
  },
});

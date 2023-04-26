import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/Myapp/Login';
import Signup from '../Screens/Myapp/Signup';
import Splash from '../Screens/Myapp/Splash';
import Home from '../Screens/Myapp/Home';

const Stack = createStackNavigator();
const HomeNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});

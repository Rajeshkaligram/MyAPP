import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScreenA from '../TabNavigator/ScreenA';
import ScreenB from '../TabNavigator/ScreenB';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ScreenA"
        drawerPosition="left"
        drawerType="front"
        edgeWidth={100}
        hideStatusBar={false}
        overlayColor="#000000"
        drawerStyle={{
          backgroundColor: '#e6e6e6',
          width: 250,
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          gestureEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#0080ff',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold',
          },
        }}>
        <Drawer.Screen
          name="ScreenA"
          component={ScreenA}
          options={{
            title: 'Screen_A Title',
            drawerIcon: ({focused}) => (
              <Image
                style={{width: 30, height: 30}}
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
                source={require('../../assets/done.png')}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="ScreenB"
          component={ScreenB}
          options={{
            title: 'Screen_B Title',
            drawerIcon: ({focused}) => (
              <Image
                style={{width: 30, height: 30}}
                size={focused ? 25 : 20}
                color={focused ? '#0080ff' : '#999999'}
                source={require('../../assets/error.png')}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({});

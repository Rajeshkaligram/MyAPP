import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AlertScr from './scr/components/AlertScr';
import CustomAlert from './scr/components/CustomAlert';
import Main from './scr/components/PropsScr/Main';
import Navigator from './scr/components/PropsScr/Navigator';
import TopTabNavigator from './scr/components/TabNavigator/TopTabNavigator';
import DrawerNav from './scr/components/DrawerNavigator/DrawerNav';
import AsyncMain from './scr/components/Async/AsyncMain';
import Redux from './scr/components/MainRedux/Redux';
import Navigation from './scr/Screens/NumberApp/Navigation';
import Home from './scr/Screens/NumberApp/Home';

const App = () => {
  return <Navigation />;
};

export default App;

const styles = StyleSheet.create({});

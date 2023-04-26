import {ActivityIndicator, StyleSheet, View} from 'react-native';
import MainNavigation from '../Navigation/MainNavigation';
import React, {useContext} from 'react';
import {AuthContext} from '../Context/AuthContext';
import HomeNav from './HomeNav';

const AppNav = () => {
  const {Loading, UserToken} = useContext(AuthContext);
  if (Loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }
  return UserToken == null ? <MainNavigation /> : <HomeNav />;
};

export default AppNav;

const styles = StyleSheet.create({});

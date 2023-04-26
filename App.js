import {StyleSheet} from 'react-native';
import React from 'react';
import AppNav from './scr/Navigation/AppNav';
import {AuthProvider} from './scr/Context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

export default App;

const styles = StyleSheet.create({});

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {Alert} from 'react-native';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [Loading, SetLoading] = useState(false);
  const [UserToken, SetUserToken] = useState('');
  const [userInfo, SetUserInfo] = useState({});

  const SignInUp = async (
    fname,
    lname,
    height,
    Weight,
    gender,
    date,
    email,
    password,
  ) => {
    SetLoading(true);
    axios
      .post('https://admin-befit.dedicateddevelopers.us/api/user/signup', {
        first_name: fname,
        last_name: lname,
        height: height,
        weight: Weight,
        gender: gender,
        dob: date,
        email: email,
        password: password,
        goal: '63199042d230d0902ebdebb9',
      })
      .then(response => {
        let userInfo = response.data;
        SetUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert(userInfo.message);
        console.log(userInfo);
      })
      .catch(err => {
        console.error(`register Error ${err}`);
      });
    SetLoading(false);
  };
  const LoginData = async (email, password) => {
    SetLoading(true);
    axios
      .post('https://admin-befit.dedicateddevelopers.us/api/user/signin', {
        email: email,
        password: password,
      })
      .then(response => {
        let userInfo = response.data;
        if (userInfo.token) {
            var userToken = JSON.stringify(userInfo.token)
          SetUserToken(userToken);
          AsyncStorage.setItem('UserToken', userInfo.token);
        }
        SetUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        Alert.alert(userInfo.message);
        console.log(userInfo);
      })
      .catch(err => {
        console.error(`register Error ${err}`);
      });
    SetLoading(false);
  };
  const LogOut = async () => {
    SetLoading(true);
    SetUserToken(null);
    AsyncStorage.removeItem('userInfo');
    AsyncStorage.removeItem('UserToken');
    SetLoading(false);
  };
  const isLoggedIn = async () => {
    try {
      SetLoading(false);
      let UserToken = await AsyncStorage.getItem('UserToken');
      let UserInfo = await AsyncStorage.getItem('userInfo');
      let userInfoo = JSON.parse(UserInfo);
      if (userInfoo) {
        SetUserToken(UserToken);
        SetUserInfo(userInfo);
        console.log(userInfoo);
      }

      SetLoading(false);
    } catch (e) {
      console.log(`Loggedin In Error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        Loading,
        UserToken,
        userInfo,
        SignInUp,
        LoginData,
        LogOut
      }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,AsyncStorage,
  View,TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import HomeScreen from './screen/HomeScreen';
import AuthLoadingScreen from './screen/AuthLoadingScreen';
const AppStack = createStackNavigator({ Home: HomeScreen});
const AuthStack = createStackNavigator({ Login: LoginScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
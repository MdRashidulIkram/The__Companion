import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/Screen/HomeScreen';
import SignInScreen from './App/Screen/SignInScreen';
import RootStackScreen from './App/Screen/RootStackScreen';


export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}






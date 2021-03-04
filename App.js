import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './App/Screen/HomeScreen';
import SplashScreen from './App/Screen/SplashScreen';

export default function App() {
  return (
    <NavigationContainer>
      <SplashScreen />
    </NavigationContainer>
    
)}

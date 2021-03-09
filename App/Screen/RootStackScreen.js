import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;
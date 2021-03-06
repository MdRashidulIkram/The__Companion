import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import SignInScreen from "./SignInScreen";
import SignUpScreen from "./SignUpScreen";
import Dashboard from "./Dashboard";
import AddTaskPage from "./AddTaskPage";
import Cam from "./Cam";
import Profilepage from "./Profilepage";

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="HomeScreen" component={HomeScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="Dashboard" component={Dashboard} />
    <RootStack.Screen name="AddTaskPage" component={AddTaskPage} />
    <RootStack.Screen name="Cam" component={Cam} />
    <RootStack.Screen name="Profilepage" component={Profilepage} />
  </RootStack.Navigator>
);

export default RootStackScreen;

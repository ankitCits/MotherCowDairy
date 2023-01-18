/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from "react-native";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import SplashScreen from "./src/screen/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./src/screen/Login";
import SignUp from "./src/screen/SignUp";
import ForgetPassword from "./src/screen/ForgetPassword";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./src/screen/Home";
import PublicStack from "./src/stack/PublicStack";
import AppStack from "./src/stack/AppStack";
import PrivateStack from "./src/stack/PrivateStack";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [valid, setIsValid] = useState(true);

  return (
    <NavigationContainer>
      {valid ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext, useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PublicStack from "./src/stack/PublicStack";
import PrivateStack from "./src/stack/PrivateStack";
import AuthContext from "./src/Context/AuthContext/index";
import { ActivityIndicator } from "react-native";
import AuthState from "./src/Context/AuthContext/authState";
import Navigation from './src/Navigation'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
  const [valid, setIsValid] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000);
    // console.log(userToken);
  }, []);
  return (
    <AuthState>
      <Navigation />
    </AuthState>
    // <NavigationContainer>
    //   {valid ? <PrivateStack /> : <PublicStack />}
    // </NavigationContainer>
  );
};

export default App;

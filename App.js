/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from './src/screen/SplashScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import ForgetPassword from './src/screen/ForgetPassword';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/screen/Home';
import AuthStack from './src/stack/AuthStack';
import AppStack from './src/stack/AppStack';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator initialRouteName="Home" >
//       <Drawer.Screen
//         name="Home"
//         component={Home}
//         options={{ drawerLabel: 'Home' }}
//       />
//       {/* <Drawer.Screen
//         name="Home"
//         component={Home}
//         options={{ drawerLabel: 'Home' }}
//       /> */}
//       {/* <Drawer.Screen
//         name="Profile"
//         component={Profile}
//         options={{ drawerLabel: 'Profile' }}
//       /> */}
//     </Drawer.Navigator>
//   );
// }

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const App= () => {





  return (

    <NavigationContainer initialRouteName="Login">
      {/* <Stack.Navigator>
       <Stack.Screen name="Home" component={MyDrawer} options={{headerShown : false}} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown : false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>

        <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown : false}}/>
      </Stack.Navigator> */}
      {/* <AuthStack /> */}
      <AppStack />
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

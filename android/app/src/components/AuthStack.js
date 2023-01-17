import React from "react";
import SplashScreen from '../components/SplashScreen';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import ForgetPassword from '../components/ForgetPassword';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const AuthStack =()=>{
  const Stack = createNativeStackNavigator();
  return(
    <Stack.Navigator initialRouteName="SplashScreen">

    <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown : false}}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown : false}}/>
    <Stack.Screen name="SignUp" component={SignUp} options={{headerShown : false}}/>

    <Stack.Screen name="ForgetPassword" component={ForgetPassword} options={{headerShown : false}}/>
  </Stack.Navigator>
  )

}

export default AuthStack;

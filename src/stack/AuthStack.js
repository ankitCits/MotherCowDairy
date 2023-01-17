import React from "react";
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import ForgetPassword from '../screen/ForgetPassword';
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

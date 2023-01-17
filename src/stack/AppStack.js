import React from 'react';
import SplashScreen from '../screen/SplashScreen';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import ForgetPassword from '../screen/ForgetPassword';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import {Image} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Home1 from 'react-native-vector-icons/Octicons';
import User from 'react-native-vector-icons/Feather';
import Order from 'react-native-vector-icons/MaterialIcons';
import Logout from 'react-native-vector-icons/SimpleLineIcons';
import Home from '../screen/Home';
const Drawer = createDrawerNavigator();

const AppStack = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: {
          marginLeft: widthPercentageToDP('-3%'),
          fontFamily: 'Roboto',
          fontSize: 20,
        },
        drawerActiveBackgroundColor:'#F4BD2F',
        drawerActiveTintColor:'#fff',
        drawerInactiveTintColor:'#000000',
        drawerStyle: {
          width: widthPercentageToDP("71%"),
          borderTopEndRadius: 45,
        }

      }}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) => (
            <Home1
              name="home"
              size={20}
              color="#000"

            />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <User
              name="user"
              size={20}
              color="#000"

            />
          ),
        }}
      />
      <Drawer.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            // <Order
            //   name="local-grocery-store"
            //   size={20}
            //   color="#000"

            // />
            <Image
              source={require('../assets/icon/store.png')}
              style={{height: 20, width: 20}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            // <Image
            //   source={require('../icon/logout.png')}
            //   style={{height: 20, width: 20}}
            // />
            <Logout
              name="logout"
              size={20}
              color="#000"


            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

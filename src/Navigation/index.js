import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import {navigationRef} from './rootNavigation';

import PublicRoute from '../stack/PublicStack';
import PrivateRoute from '../stack/PrivateStack';

import AuthContext from '../Context/AuthContext';
import {ActivityIndicator, View} from 'react-native';
const Navigation = ({props}) => {
  const authContext = useContext(AuthContext);
  const {userToken, isLoading} = authContext;
// const userToken=null
// const isLoading=false
  useEffect(() => {
    // setTimeout(() => {
    //   SplashScreen.hide();
    // }, 1000);
    console.log(userToken);
  }, []);

  return (
    <NavigationContainer>
      {
        isLoading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <ActivityIndicator size="small" color={'#F4BD2F'} />
          </View>
        ) : userToken == null ? (
          <PublicRoute />
        ) : (
          <PrivateRoute />
        )
        // <PrivateRoute />
      }
    </NavigationContainer>
  );
};

export default Navigation;

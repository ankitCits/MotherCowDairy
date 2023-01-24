import React from "react";
import Drawer from "./AppStack";
import Notification from "../screen/notification";
import OrderSuccessfull from "../screen/OrderSuccessfull";
// import OrderTest from "../screen/orderTest";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const PrivateStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OrderSuccessfull"
        component={OrderSuccessfull}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="OrderTest"
        component={OrderTest}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default PrivateStack;

import React, { useContext, useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import AuthContext from "../Context/AuthContext";
import { userDetails } from "../Api/auth";

const CustomDrawer = props => {
  const [userData, setUserData] = useState(null);
  const { userSignOut } = useContext(AuthContext);
  const signOut = async () => {
    await userSignOut();
  };

  useEffect(() => {
    fetchUserDetail();
  }, []);

  const fetchUserDetail = async () => {
    let user = await userDetails();
    if (user) {
      console.log("USER_IN_HOME", user);
      setUserData(user);
    }
  };
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            marginLeft: wp("5%"),
            marginTop: hp("3%"),
            flexDirection: "row",
            marginBottom: hp("3%")
          }}
        >
          <Image source={require("../assets/img/profile.png")} />
          {userData == null
            ? <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  // fontFamily: "Roboto-Medium",
                  alignSelf: "center",
                  fontWeight: "bold",
                  marginLeft: wp("5%")
                }}
              >
                ...
              </Text>
            : <Text
                style={{
                  color: "black",
                  fontSize: 20,
                  // fontFamily: "Roboto-Medium",
                  alignSelf: "center",
                  fontWeight: "bold",
                  marginLeft: wp("5%")
                }}
              >
                {userData.name}
              </Text>}
        </View>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          onPress={() => signOut()}

          // style={{ width: width }}
          //               icon={({ focused, color, size }) => <Icon color={color} size={size} name={focused ? `exit` : `exit-outline`} />}
          //               label={`Sign Out`}
          //               labelStyle={styles.signOutLabel}
          //               onPress={() => signOut()}
        />
      </DrawerContentScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 45

    // backgroundColor:"yellow",
  }
});

export default CustomDrawer;

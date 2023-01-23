import React, { useContext } from "react";
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

const CustomDrawer = props => {
  const { userSignOut } = useContext(AuthContext);
  const signOut = async () => {
    await userSignOut();
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
          <Text
            style={{
              color: "black",
              fontSize: 20,
              // fontFamily: "Roboto-Medium",
              alignSelf: "center",
              fontWeight: "bold",
              marginLeft: wp("5%")
            }}
          >
            David Miller
          </Text>
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

import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import arow from "../assets/icon/arow.png";

const OrderSuccessfull = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Image
              source={arow}
              style={{
                marginLeft: "35%",
                marginTop: "5%",
                height: 20,
                width: 20
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require("../assets/img/ordersuccessfull.png")}
        style={{
          alignSelf: "center",
          width: wp("60%"),
          height: hp("25%"),
          marginTop: hp("10%")
        }}
      />
      <Text
        style={{
          fontSize: 30,
          color: "#000",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: hp("5%")
        }}
      >
        Order Successful
      </Text>
      <Text
        style={{
          fontSize: 24,
          color: "#000",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: hp("4%")
        }}
      >
        Thank you!
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: "#7A869A",
          fontWeight: "bold",
          textAlign: "center",
          marginTop: hp("1%")
        }}
      >
        Yay, It's a nice order! {"\n"}It will arrive soon.
      </Text>
      <TouchableOpacity style={styles.pressable}>
        <Text
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          Done
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    // backgroundColor: "yellow",
    height: hp("10%"),
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1
  },
  input: {
    borderColor: "grey",
    borderBottomWidth: 0.5,
    width: wp("80%"),
    height: hp("6%"),
    alignSelf: "center",
    color: "#7A869A",
    flexDirection: "row",
    // backgroundColor:"yellow",
    marginTop: hp("2%")
  },
  icons: {
    marginTop: hp("1.5%"),
    marginRight: wp("1%")
  },
  pressable: {
    width: wp("80%"),
    height: hp("6%"),
    alignSelf: "center",
    backgroundColor: "#F4BD2F",
    color: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: hp("8%")
  }
});

export default OrderSuccessfull;

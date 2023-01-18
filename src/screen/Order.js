import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import arow from "../assets/icon/arow.png";

const OrderList = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={arow}
                style={{
                  marginLeft: "25%",
                  marginTop: "5%",
                  height: 20,
                  width: 20
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: "center",
                marginLeft: "15%",
                fontSize: 22,
                color: "#000",
                // fontFamily: "Poppins",
                // fontWeight: "bold",
                justifyContent: "center",
                fontWeight:'500'
              }}
            >
              Order List
            </Text>
          </View>
      </View>
      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        <View
          style={{
            backgroundColor: "#fff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#017615" }}
            >
              Delivered
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item2.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#7A869A" }}
            >
              Cancelled
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#017615" }}
            >
              Delivered
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item2.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#7A869A" }}
            >
              Cancelled
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#017615" }}
            >
              Delivered
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item2.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#7A869A" }}
            >
              Cancelled
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#017615" }}
            >
              Delivered
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#ffff",
            width: wp("90%"),
            height: hp("12%"),
            borderRadius: 20,
            alignSelf: "center",
            borderWidth: 1,
            borderStyle: "dashed",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: hp("2%")
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../assets/img/item2.png")}
              style={{ marginLeft: wp("3%"), alignSelf: "center" }}
            />
            <View
              style={{
                flexDirection: "column",
                alignSelf: "center",
                marginLeft: wp("4%")
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000" }}>
                ORD08123879
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#7A869A" }}
                >
                  2 Items,
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "bold", color: "#000" }}
                >
                  {" "}04 jan23
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              alignSelf: "center",
              marginRight: wp("4%")
            }}
          >
            <Image
              source={require("../assets/icon/file.png")}
              style={{ alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#7A869A" }}
            >
              Cancelled
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    backgroundColor: "#ffff",
    height: hp("8%"),
    flexDirection: "row",
    justifyContent: "space-between",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation: 1
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
export default OrderList;

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

const Profile = ({ navigation }) => {
  const [name, setName] = useState();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
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
                fontSize: 24,
                color: "#000",
                // fontFamily: "Poppins",
                // fontWeight: "bold",
                justifyContent: "center",
                fontWeight:'500'
              }}
            >
              My Profile
            </Text>
          </View>
        </View>

        <Image
          source={require("../assets/img/Myprofile.png")}
          style={{
            // marginLeft: wp('5%'),
            width: wp("32%"),
            height: hp("15%"),
            alignSelf: "center",
            borderWidth: 1,
            borderColor: "#EAE8F2",
            borderRadius: 55,
            marginTop: hp("3%")
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginTop: hp("1%"),
            alignSelf: "center",
            color: "#000",
            fontWeight: "bold"
            // fontFamily: "Roboto"
          }}
        >
          David Miller
        </Text>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/user.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Name"
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/mark.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Address"
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/mail.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Email Id"
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/phone.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Phone No."
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/location.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Address line 1"
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <View style={styles.input}>
          <Image
            source={require("../assets/icon/location.png")}
            style={styles.icons}
          />
          <TextInput
            // style={styles.input}
            color={"#0000"}
            placeholder="Address line 2"
            placeholderTextColor={"#7A869A"}
            // left={}
            onChangeText={() => {
              setName(name);
            }}
            value={name}
          />
        </View>
        <Pressable style={styles.pressable}>
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
        </Pressable>
      </ScrollView>
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
export default Profile;

import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import PasswordL from "react-native-vector-icons/SimpleLineIcons";
// import background from '../img/splashscreen.png';
import login from "../assets/img/header.png";
import footer from "../assets/img/wave2.png";
import mail from "../assets/icon/mail.png";
import locked from "../assets/img/locked.png";
import arow from "../assets/icon/arow.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { forgetPassword } from "../Api/forgetpassword";
import { forgetVerify } from "../Api/forgetVerify";

// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const ForgetVerified = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState();
  const [npassword, setNPassword] = useState();
  const [rpassword, setRNPassword] = useState();

  const submitLogin = async () => {
    if (otp == undefined) {
      return alert("Fill OTP.");
    }

    if (npassword == undefined) {
      return alert("Fill New Password.");
    }

    if (rpassword == undefined) {
      return alert("Fill Confirm New Password.");
    }

    if (rpassword != npassword) {
      return alert("Password & Confirm Password Not Match.");
    }
    if (otp != undefined && rpassword != undefined && npassword != undefined) {
      let response = await forgetVerify(npassword, rpassword, otp);
      if (response) {
        console.log("Token Response", response.auth_token);
        if (response) {
          navigation.navigate("Login")
          // await onAuthentication(response.auth_token)
        }
      } else {
        alert("Please check detail again");
      }
    } else {
      alert("Please check detail again");
    }
  };

  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.img}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Image
                source={arow}
                style={{
                  marginLeft: "5%",
                  marginTop: "5%",
                  height: 20,
                  width: 20
                }}
              />
            </TouchableOpacity>

            <View style={styles.backg}>
              <Image source={locked} style={styles.logo} />
            </View>
          </View>
          <View style={styles.form}>
            <Text
              style={{
                fontSize: 34,
                marginTop: hp("3%"),
                marginLeft: wp("10%"),
                color: "#000",
                fontWeight: "bold"
                // fontFamily: "Roboto"
                // marginBottom:hp("4%")
              }}
            >
              {/* Forgot Password */}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginTop: hp("2%"),
                marginLeft: wp("10%"),
                color: "#000",
                fontWeight: "bold"
                // fontWeight: 'bold',
                // fontFamily: "Roboto"
                // marginBottom:hp("4%")
              }}
            >
              Please fill valid detail.
            </Text>
            <Text
              style={{
                fontSize: 16,

                marginLeft: wp("10%"),
                color: "#000"
                // fontWeight: 'bold',
                // fontFamily: "Roboto"
                // marginBottom:hp("4%")
              }}
            >
              {/* Receive a Verification Code. */}
            </Text>
            <View style={styles.input}>
              <PasswordL
                name="lock"
                size={20}
                color="#7A869A"
                style={styles.icons1}
              />
              <TextInput
                // start={}
                color={"#0000"}
                secureTextEntry={true}
                placeholder="OTP"
                placeholderTextColor={"#7A869A"}
                onChangeText={otp => {
                  setOtp(otp);
                }}
                value={otp}
              />
            </View>

            <View style={styles.input}>
              <PasswordL
                name="lock"
                size={20}
                color="#7A869A"
                style={styles.icons1}
              />
              <TextInput
                // start={}
                color={"#0000"}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor={"#7A869A"}
                onChangeText={npassword => {
                  setNPassword(npassword);
                }}
                value={npassword}
              />
            </View>

            <View style={styles.input}>
              <PasswordL
                name="lock"
                size={20}
                color="#7A869A"
                style={styles.icons1}
              />
              <TextInput
                // start={}
                color={"#0000"}
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor={"#7A869A"}
                onChangeText={rpassword => {
                  setRNPassword(rpassword);
                }}
                value={rpassword}
              />
            </View>

            <TouchableOpacity
              style={styles.pressable}
              onPress={() => submitLogin()}
            >
              <Text
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  alignContent: "center"
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.footer}>
            <Image source={footer} style={styles.footer} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    backgroundColor: "#fff"
    // justifyContent:'center',
    // alignContent:'center',
  },
  backg: {
    backgroundColor: "#FFFBEA",
    width: 240,
    height: 240,
    alignSelf: "center",
    // marginTop:hp("5%"),
    borderRadius: 120,
    flex: 1
  },

  img: {
    flex: 1
  },
  form: {
    flex: 2
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: "black"
  },
  logo: {
    // flex:1,
    // width: wp('60%'),
    // height: hp('20%'),
    // justifyContent: 'center',
    alignSelf: "center",
    marginTop: hp("8%")
    // alignItems: 'center',
    // margin:hp("5%"),
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
    marginTop: hp("1%")
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("1%")
  },
  checkbox: {
    alignSelf: "center",
    color: "#000",
    borderColor: "#000"
    // backgroundColor:"#F4BD2F"
  },
  label: {
    marginleft: wp("2%"),
    marginTop: hp("0.7%"),
    color: "#000000",
    // backgroundColor: '#F4BD2F',
    fontWeight: "bold"
    // fontFamily: "Roboto"
  },
  label1: {
    marginleft: wp("2%"),
    marginTop: hp("0.5%"),
    color: "#7A869A",
    // backgroundColor: '#F4BD2F',
    fontSize: 16
    // fontFamily: "Roboto"
  },
  boxes: {
    flexDirection: "row"
  },
  pressable: {
    width: wp("80%"),
    height: hp("5%"),
    alignSelf: "center",
    backgroundColor: "#F4BD2F",
    color: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: hp("5%"),
    marginBottom: hp("12%")
  },
  sign: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: hp("1%"),
    marginBottom: hp("5%")
  },
  footer: {
    width: wp("100%")
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons: {
    marginTop: hp("2%"),
    marginRight: wp("1%")
  },
  icons1: {
    marginTop: hp("1.3%"),
    marginRight: wp("1%")
  }
});

export default ForgetVerified;

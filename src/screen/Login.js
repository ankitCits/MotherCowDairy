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
  StatusBar,
  TouchableOpacity
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import PasswordL from "react-native-vector-icons/SimpleLineIcons";
// import background from '../img/splashscreen.png';
import login from "../assets/img/header.png";
import footer from "../assets/img/wave2.png";
import mail from "../assets/icon/mail.png";
import background from "../assets/img/background.jpeg";
import centerlogo from "../assets/img/mothercow.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/MaterialIcons";
// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const Login = ({ navigation }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar translucent barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.container}>
        <View style={styles.img}>
          <Image source={login} style={styles.logo} />
        </View>
        <View style={styles.form}>
          <Text
            style={{
              fontSize: 38,
              marginTop: hp("3%"),
              marginLeft: wp("10%"),
              color: "#000",
              fontWeight: "bold",
              // fontFamily: 'Roboto',
              marginBottom: hp("4%")
            }}
          >
            Login
          </Text>
          <View style={styles.input}>
            <Image source={mail} style={styles.icons} />
            <TextInput
              // style={styles.input}
              color={"#0000"}
              placeholder="Email id"
              placeholderTextColor={"#7A869A"}
              // left={}
              onChangeText={() => {
                setName(name);
              }}
              value={name}
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
              onChangeText={() => {
                setPassword(password);
              }}
              value={password}
            />
          </View>

          <View style={styles.checkboxContainer}>
            <View style={styles.boxes}>
              {/* <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            /> */}
              <Icon name="check-box" size={24} color="#F4BD2F" />
              <Text style={styles.label}>Remember Me</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ForgetPassword")}
            >
              <Text style={styles.label1}>Forget password?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.pressable}>
            <Text
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center"
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <View style={styles.sign}>
            <Text style={styles.label1}>Don't have an account?</Text>

            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.label}> Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Image source={footer} style={styles.footer} />
        </View>
      </View>
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
    width: wp("60%"),
    height: hp("20%"),
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    margin: hp("5%")
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
    // fontFamily: 'Roboto',
    // justifyContent :"center"
  },
  label1: {
    marginleft: wp("2%"),
    marginTop: hp("0.5%"),
    color: "#7A869A",
    // backgroundColor: '#F4BD2F',
    fontSize: 16
    // fontFamily: 'Roboto',
  },
  boxes: {
    flexDirection: "row"
    // justifyContent:'center'
  },
  pressable: {
    width: wp("80%"),
    height: hp("5%"),
    alignSelf: "center",
    backgroundColor: "#F4BD2F",
    color: "white",
    borderRadius: 8,
    justifyContent: "center",
    marginTop: hp("8%")
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

export default Login;

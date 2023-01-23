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
import AntDesign from "react-native-vector-icons/AntDesign";
// import background from '../img/splashscreen.png';
import login from "../assets/img/start.png";
import footer from "../assets/img/wave2.png";
import mail from "../assets/icon/mail.png";
import user from "../assets/icon/user.png";
import mark from "../assets/icon/mark.png";
import phone from "../assets/icon/phone.png";
import location from "../assets/icon/location.png";
import { Dropdown } from "react-native-element-dropdown";
import background from "../assets/img/background.jpeg";
import centerlogo from "../assets/img/mothercow.png";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" }
];

// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const SignUp = ({ navigation }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image source={login} style={styles.logo} />
          </View>
          <View style={styles.form}>
            <Text
              style={{
                fontSize: 38,
                // marginTop:hp("1%"),
                marginLeft: wp("10%"),
                color: "#000",
                fontWeight: "bold",
                // fontFamily: "Roboto",
                marginBottom: hp("1%")
              }}
            >
              Sign up
            </Text>
            <View style={styles.input}>
              <Image source={user} style={styles.icons} />
              <TextInput
                // style={styles.input}
                color={"#0000"}
                placeholder="Business Name"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>
            <View style={styles.input}>
              <Image source={mark} style={styles.icons} />
              <TextInput
                // style={styles.input}
                color={"#0000"}
                placeholder="Business Address"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>
            <View style={styles.input}>
              <Image source={user} style={styles.icons} />
              <TextInput
                // style={styles.input}
                color={"#0000"}
                placeholder="Contact Person Name"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>
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
              <Image source={phone} style={styles.icons} />
              <TextInput
                // style={styles.input}
                color={"#0000"}
                placeholder="Phone No"
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
            <View style={styles.input}>
              <Image source={location} style={styles.icons} />
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
              <Image source={location} style={styles.icons} />
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
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                color={"#0000"}
                placeholder="Country"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                color="black"
                placeholder="City"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>
            <View style={{ width: wp("90%"), alignSelf: "center" }}>
              <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                // placeholderTextColor={'red'}
                // color="red"
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="State"
                searchPlaceholder="Search State Name..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                color="black"
                placeholder="Zip Code"
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={() => {
                  setName(name);
                }}
                value={name}
              />
            </View>

            <View
              style={{
                width: wp("80%"),
                alignSelf: "center",
                marginTop: hp("1%")
              }}
            >
              <Text style={styles.label2}>
                By signing up, you're agree to our{" "}
                <Text
                  style={{
                    color: "#F4BD2F",
                    fontSize: 14
                    // fontFamily: "Roboto"
                  }}
                >
                  Terms & Conditions
                </Text>{" "}
                and{" "}
                <Text
                  style={{
                    color: "#F4BD2F",
                    fontSize: 14
                    // fontFamily: "Roboto"
                  }}
                >
                  Privacy Policy
                </Text>.
              </Text>
            </View>
            <TouchableOpacity
              style={styles.pressable}
              onPress={() => navigation.navigate("Verification")}
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
            <View style={styles.sign}>
              <Text style={styles.label1}>Already have an account?</Text>

              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.label}> Login</Text>
              </TouchableOpacity>
            </View>
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
  label2: {
    marginleft: wp("2%"),
    marginTop: hp("0.5%"),

    color: "#7A869A",
    // backgroundColor: '#F4BD2F',
    fontSize: 14
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
  },
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16,
    color:'#7A869A'
  },
  selectedTextStyle: {
    fontSize: 16
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});

export default SignUp;

import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { userDetails } from "../Api/auth";
import arow from "../assets/icon/arow.png";
import user from "../assets/icon/user.png";
const Profile = ({ navigation }) => {
  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState(null)
  const [userData, setUserData] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [ad1, setAd1] = useState();
  const [ad2, setAd2] = useState();


  useEffect(() => {
    fetchUserDetail()
  })

  const fetchUserDetail = async () => {
    setLoader(true)
    let user = await userDetails();
    if (user) {
      console.log("USER_IN_HOME", user);
      setUserData(user);
      setLoader(false)
    }
    setLoader(false)
  };


  const updateProfile = () => {
    setLoader(false)
  }

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
                fontWeight: "500"
              }}
            >
              My Profile
            </Text>
          </View>
        </View>

        {loader && userData == undefined ?
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              alignSelf: 'center',
              marginTop: '50%'
            }}
          >
            <ActivityIndicator size="large" color={"#F4BD2F"} />
          </View>
          :

          <>
            <Image
              source={require("../assets/img/Myprofile.png")}
              style={{
                // marginLeft: wp('5%'),
                width: 100,
                height: 100,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "#EAE8F2",
                borderRadius: 100 / 2,
                marginTop: hp("2%")
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
              {userData ? userData.name : ''}
            </Text>
            <View style={styles.input}>
              <Image
                source={require("../assets/icon/user.png")}
                style={styles.icons}
              />
              <TextInput
                color={"#000"}
                placeholder={userData ? userData.name : ''}
                placeholderTextColor={"#7A869A"}
                onChangeText={(name) => {
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
                color={"#000"}
                placeholder={userData ? userData.business_name : ''}
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={(name) => {
                  setAddress(name);
                }}
                value={address}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={require("../assets/icon/mail.png")}
                style={styles.icons}
              />
              <TextInput
                // style={styles.input}
                color={"#000"}
                placeholder={userData ? userData.email : ''}
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={(name) => {
                  setEmail(name);
                }}
                value={email}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={require("../assets/icon/phone.png")}
                style={styles.icons}
              />
              <TextInput
                // style={styles.input}
                color={"#000"}
                placeholder={userData ? `${userData.phone}` : ''}
                placeholderTextColor={"#7A869A"}
                keyboardType={'numeric'}
                // left={}
                onChangeText={(name) => {
                  setPhone(name);
                }}
                value={phone}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={require("../assets/icon/location.png")}
                style={styles.icons}
              />
              <TextInput
                color={"#000"}
                placeholder={userData ? userData.address1 : ''}
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={(name) => {
                  setAd1(name);
                }}
                value={ad1}
              />
            </View>
            <View style={styles.input}>
              <Image
                source={require("../assets/icon/location.png")}
                style={styles.icons}
              />
              <TextInput
                // style={styles.input}
                color={"#000"}
                placeholder={userData ? userData.address2 : ''}
                placeholderTextColor={"#7A869A"}
                // left={}
                onChangeText={(name) => {
                  setAd2(name);
                }}
                value={ad2}
              />
            </View>

            {name != undefined ||
              address != undefined ||
              email != undefined ||
              phone != undefined ||
              ad1 != undefined ||
              ad2 != undefined

              ?
              <TouchableOpacity style={styles.pressable}
              onPress={()=>updateProfile()}
              >
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

              :
              null
            }

          </>
        }

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
    // marginTop: hp("1.5%"),
    marginRight: wp("1%"),
    alignSelf: 'center'
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

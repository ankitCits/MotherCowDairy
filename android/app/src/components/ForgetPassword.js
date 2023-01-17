import React, {useState} from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PasswordL from 'react-native-vector-icons/SimpleLineIcons';
// import background from '../img/splashscreen.png';
import login from '../img/header.png';
import footer from '../img/wave2.png';
import mail from '../icon/mail.png';
import locked from '../img/locked.png';
import arow from '../icon/arow.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const ForgetPassword = ({navigation}) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.img}>
      <Image source={arow} style={{marginLeft:'5%',marginTop:'5%'}} ></Image>

      <View style={styles.backg}>
      <Image source={locked} style={styles.logo}></Image>

      </View>

      </View>
      <View style={styles.form}>
        <Text
          style={{
            fontSize: 34,
            marginTop:hp("3%"),
            marginLeft:wp("10%"),
            color: '#000',
            fontWeight: 'bold',
            fontFamily: 'Roboto',
            // marginBottom:hp("4%")
          }}>
          Forgot Password
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginTop:hp("2%"),
            marginLeft:wp("10%"),
            color: '#000',
            // fontWeight: 'bold',
            fontFamily: 'Roboto',
            // marginBottom:hp("4%")
          }}>
          Please Enter Your Email Address to

        </Text>
        <Text
          style={{
            fontSize: 16,

            marginLeft:wp("10%"),
            color: '#000',
            // fontWeight: 'bold',
            fontFamily: 'Roboto',
            // marginBottom:hp("4%")
          }}>
        Receive a Verification Code.
        </Text>
        <View style={styles.input}>
        <Image source={mail} style={styles.icons}>

        </Image>
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



        <Pressable  style={styles.pressable}>
          <Text style={{textAlign:'center',justifyContent:'center',alignItems:'center',alignContent:'center'}}>Send</Text>
        </Pressable>

      </View>
      <View style={styles.footer}>
      <Image source={footer} style={styles.footer}></Image>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent:'center',
    // alignContent:'center',
  },
  backg:{
    backgroundColor:"#FFFBEA",
    width:240,
    height:240,
    alignSelf:'center',
    // marginTop:hp("5%"),
    borderRadius:120,
    flex:1,
  },

  img: {
    flex: 1,

  },
  form: {
    flex: 2,
    // backgroundColor: 'red',
  },
  footer: {
    flex: 1,
    backgroundColor: 'black',
  },
  logo: {
    // flex:1,
    // width: wp('60%'),
    // height: hp('20%'),
    // justifyContent: 'center',
    alignSelf: 'center',
    marginTop: hp('8%')
    // alignItems: 'center',
    // margin:hp("5%"),
  },
  input: {
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    color: '#7A869A',
    flexDirection:'row',
    // backgroundColor:"yellow",
    marginTop:hp("1%"),
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:hp("1%")
  },
  checkbox: {
    alignSelf: 'center',
    color:"#000",
    borderColor:"#000",
    // backgroundColor:"#F4BD2F"
  },
  label: {
    marginleft: wp('2%'),
    marginTop: hp('0.7%'),
    color: '#000000',
    // backgroundColor: '#F4BD2F',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  label1: {
    marginleft: wp('2%'),
    marginTop: hp('0.5%'),
    color: '#7A869A',
    // backgroundColor: '#F4BD2F',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  boxes: {
    flexDirection: 'row',
  },
  pressable:{
    width:wp("80%"),
    height:hp("5%"),
    alignSelf:'center',
    backgroundColor: '#F4BD2F',
    color:"white",
    borderRadius: 8,
    justifyContent:'center',
    marginTop:hp("5%"),
    marginBottom:hp("12%")

  },
  sign:{
    flexDirection:'row',
    alignSelf:'center',
    marginTop:hp("1%"),
    marginBottom:hp("5%"),

  },
  footer:{
    width:wp("100%"),
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons:{
    marginTop:hp("2%"),
    marginRight:wp("1%"),
  },
  icons1:{
    marginTop:hp("1.3%"),
    marginRight:wp("1%"),
  }
});

export default ForgetPassword;

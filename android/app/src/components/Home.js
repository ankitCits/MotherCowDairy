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
import Righta from 'react-native-vector-icons/AntDesign';
// import background from '../img/splashscreen.png';
import login from '../img/header.png';
import footer from '../img/wave2.png';
import mail from '../icon/mail.png';
import background from '../img/background.jpeg';
import centerlogo from '../img/mothercow.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const Home = ({navigation}) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../img/profile.png')}
            style={{
              marginLeft: wp('5%'),
              width: wp('15%'),
              height: hp('7%'),
              alignSelf: 'center',
            }}
          />
          <Text style={styles.headertitle}>Owner Name</Text>
        </View>
        <View
          style={{
            width: wp('13%'),
            height: hp('6%'),
            borderRadius: 7,
            alignSelf: 'center',
            backgroundColor: '#F4BD2F',
            marginRight: wp('2%'),
          }}>
          <Image
            source={require('../img/bell.png')}
            style={{alignSelf: 'center', marginTop: hp('0.8%')}}
          />
        </View>
      </View>
      <View style={styles.home}>
        <Text style={styles.titleheader}>
          Let's find {'\n'}products near you
        </Text>
        <View style={{backgroundColor:"yellow",width:wp('94%'),height:hp("20%"),borderRadius:5,alignSelf:'center',marginTop:hp('1%')}}>
        <ImageBackground
          source={require('../img/milk.png')}
          resizeMode="cover"
          style={{backgroundColor:"yellow",width:wp('94%'),height:hp("20%"),borderRadius:5,alignSelf:'center'}}>
          <Text style={{fontSize:24,color:"#fff",marginLeft:wp("5%"),marginTop:hp('2%')}}>Milk Products</Text>
          <Text style={{fontSize:18,color:"#fff",marginLeft:wp("5%")}}>100% Naturals</Text>

        </ImageBackground>
        </View>



      </View>
      <View style={styles.title}>
      <Image
            source={require('../img/milkk.png')}
            style={{
              marginLeft: wp('2%'),
              width: wp('15%'),
              height: hp('7%'),
              alignSelf: 'center',
            }}
          />
          <Text style={{fontSize:20 ,alignSelf:'center',color:"#000",fontWeight:'bold',marginLeft:wp('3%')}}>Milk Products</Text>
      </View>
      <ScrollView style={styles.product}>
        <View style={{width:wp("60%"),height:hp("30%"),borderRadius:25,marginTop:hp("5%"),marginLeft:wp("3%"),borderColor:"#000",borderWidth:1}}>
        <Image
            source={require('../img/fresh.png')}
            style={{
              marginTop:hp("-7%"),
              // width: wp('15%'),
              // height: hp('7%'),
              alignSelf: 'center',
            }}
          />
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text style={{fontSize:20,color:'#000',alignSelf:'center',marginLeft:wp('2%')}}>Nonfat Dry Milk</Text>
          <Text style={{fontSize:15,color:'#7A869A',alignSelf:'center',marginRight:wp('2%')}}>500 ml</Text>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp('2%')}}>
          <Text style={{fontSize:20,color:'#000',alignSelf:'center',marginLeft:wp('2%'),fontWeight:'bold'}}>$10.00</Text>
          <Pressable style={{backgroundColor:"#F4BD2F",width:wp("22%"),height:hp("5%"),borderRadius:10,alignSelf:'center',marginRight:wp("2%")}}><Text style={{fontSize:15,color:'#FFF',alignSelf:'center',marginRight:wp('2%'),textAlign:"center",marginTop:hp("1%")}}>ADD</Text></Pressable>

          </View>

        </View>

      </ScrollView>
      <View>
        <Pressable style={{backgroundColor: '#F4BD2F',width:wp('95%'),height:hp('8%'),borderRadius:10,alignSelf:'center',flexDirection:'row',justifyContent:"space-between"}}>
        <View style={{flexDirection:'row'}}>


        <View
          style={{
            width: wp('13%'),
            height: hp('6%'),
            borderRadius: 7,
            alignSelf: 'center',
            backgroundColor: '#FFFFFF',
            marginLeft: wp('2%'),
          }}>
          <Image
            source={require('../icon/store.png')}
            style={{alignSelf: 'center', marginTop: hp('1%')}}
          />
        </View>
        <View style={{alignSelf:'center',marginLeft:wp("2%")}}>
          <Text style={{fontSize:16,color:'#fff'}}>2 Items</Text>
          <Text style={{fontSize:12,color:'#fff'}}>$ 20.00</Text>
        </View>

        </View>


        <View style={{flexDirection:'row' ,alignSelf:'center',marginRight:wp("2%")}}>
          <Text style={{color:"#fff"}}>Place Order</Text>
          <Righta
              name="right"
              size={20}
              color="#FFF"

            />

        </View>

        </Pressable>
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
  header: {
    flex: 1,
    // backgroundColor:"black",
    height: hp('10%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  product: {
    flex: 4,
    // backgroundColor: 'red',
    height: hp('40%'),
    borderColor:"#000"
  },
  title: {
    flex: 1,
    // backgroundColor: 'yellow',
    height: hp('8%'),
    flexDirection:'row',
  },
  home: {
    flex: 3,
    // backgroundColor: 'blue',
    height: hp('32%'),
  },
  headertitle: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginLeft: wp('3%'),
    color: '#000000',
  },
  titleheader: {
    fontSize: 27,
    color: '#000',
    fontWeight: 'bold',
    marginLeft: wp('3%'),
    marginTop: hp('1%'),
  },

  logo: {
    // flex:1,
    width: wp('60%'),
    height: hp('20%'),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    margin: hp('5%'),
  },
  input: {
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    width: wp('80%'),
    height: hp('6%'),
    alignSelf: 'center',
    color: '#7A869A',
    flexDirection: 'row',
    // backgroundColor:"yellow",
    marginTop: hp('1%'),
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('1%'),
  },
  checkbox: {
    alignSelf: 'center',
    color: '#000',
    borderColor: '#000',
    // backgroundColor:"F4BD2F#"
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
  pressable: {
    width: wp('80%'),
    height: hp('5%'),
    alignSelf: 'center',
    backgroundColor: '#F4BD2F',
    color: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: hp('8%'),
  },
  sign: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: hp('1%'),
    marginBottom: hp('5%'),
  },
  footer: {
    width: wp('100%'),
    // marginBottom:hp("5%"),
    // height:hp("30%")
  },
  icons: {
    marginTop: hp('2%'),
    marginRight: wp('1%'),
  },
  icons1: {
    marginTop: hp('1.3%'),
    marginRight: wp('1%'),
  },
});

export default Home;

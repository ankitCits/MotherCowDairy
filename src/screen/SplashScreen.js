import React, { useState } from 'react';
import { Text, View, ImageBackground, StyleSheet, Image } from 'react-native';

// import background from '../img/splashscreen.png';
import login from '../assets/img/loginimg.png';
import background from '../assets/img/background.jpeg';
import centerlogo from '../assets/img/mothercow.png';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const SplashScreen = ({ navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(() => {
    setTimePassed(true);
  }, 3000);

  if (!timePassed) {
    return (
      <View style={styles.container}>
        <ImageBackground source={background} style={styles.img}>
          <Image source={centerlogo} style={styles.logo}>

          </Image>

        </ImageBackground>
        <Text style={{ color: 'yellow' }}>helloe</Text>
      </View>
    );
  }
  // navigation.push('Login');
  return null;
};
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    flex: 1,
    // justifyContent:'center',
    // alignContent:'center',
  },
  background: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    flex: 1,

    width: wp("100%"),
    height: hp('100%'),
  },
  logo: {
    // flex:1,
    width: wp("60%"),
    height: hp("30%"),
    justifyContent: "center",
    alignSelf: 'center',
    alignItems: "center",
    marginTop: hp("30%"),
  }
});

export default SplashScreen;

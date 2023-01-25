import React, { useEffect, useState } from "react";
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
  TouchableOpacity,
  Modal,
  ActivityIndicator
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
import Righta from "react-native-vector-icons/AntDesign";
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
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";
import { homeProduct, placedProduct } from "../Api/home";
import { setMsg } from "../Storage";
import { userDetails } from "../Api/auth";
// const image = { "C:\Users\ibsha\Desktop\company\AwesomeProject\android\app\src\img\splashscreen.png"}
const Home = ({ navigation }) => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [isSelected, setSelection] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(false);
  const [hProduct, setHproduct] = useState(null);
  const [addTocard, setAddToCard] = useState([]);
  const [addingCard, setAddingCard] = useState(null);
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetchUserDetail()
    fetchProduct();
  }, []);

  const fetchUserDetail = async () => {
    let user = await userDetails()
    if (user) {
      console.log("USER_IN_HOME", user)
      setUserData(user)
    }
  }

  const fetchProduct = async () => {
    setLoader(true);
    let product = await homeProduct();
    if (product) {
      console.log("H__P>", product);
      setHproduct(product);
      setLoader(false);
    } else {
      alert("Check Internet Issue");
      setLoader(false);
    }
  };

  const placedProducts = async () => {
    setLoading(true);
    let payload = [];
    for (let i = 0; i < addTocard.length; i++) {
      payload.push({
        product_id: addTocard[i].id
      });
    }

    console.log("PLACED_PAYLOAD", payload);

    // const arr = [
    //   {
    //      "Country": "BR",
    //      "New Lv1−Lv2": "#N/A"
    //   },
    //   {
    //      "Country": "BR",
    //      "New Lv1−Lv2": "#N/A"
    //   },
    //   {
    //      "Country": "",
    //      "New Lv1−Lv2": "test"
    //   }];
    const convert = (payload) => {
      const res = {};
      payload.forEach((obj) => {
        const key = `${obj.product_id}`;
        if (!res[key]) {
          res[key] = { ...obj, quantity: 0 };
        };
        res[key].quantity += 1;
      });
      return Object.values(res);
    };
    let newPayload = convert(payload)
    let products = await placedProduct(newPayload);
    if (products) {
      console.log("H__P__S>", products);
      setLoading(false);
      if (products.message == "Order Placed") {
        await setMsg(products)
        setAddToCard([])
        setAddingCard(null)
        navigation.navigate('OrderSuccessfull', products)
      }
    } else {
      alert("Check Internet Issue");
      setLoading(false);
    }
  };


  const calculatePrice = async () => {
    return addTocard.reduce((n, {max_price}) => n + max_price, 0)
    console.log(addTocard.reduce((n, {max_price}) => n + max_price, 0))
  }
  console.log(">>>", addTocard);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ alignSelf: "center" }}
              onPress={() => navigation.openDrawer()}
            >
              <Image
                source={require("../assets/img/profile.png")}
                style={{
                  marginLeft: wp("5%"),
                  width: wp("13%"),
                  height: hp("6%"),
                  alignSelf: "center"
                }}
              />
            </TouchableOpacity>
            {userData == null ?

              <Text style={styles.headertitle}>...</Text>
              :

              <Text style={styles.headertitle}>{userData.name}</Text>
            }
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={{
              width: wp("11%"),
              height: hp("5%"),
              borderRadius: 7,
              alignSelf: "center",
              backgroundColor: "#F4BD2F",
              marginRight: wp("2%")
            }}
          >
            <Image
              source={require("../assets/img/bell.png")}
              style={{ alignSelf: "center", marginTop: hp("0.8%") }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.home}>
          <Text style={styles.titleheader}>
            Let's find {"\n"}products near you
          </Text>
          <View
            style={{
              backgroundColor: "yellow",
              width: wp("94%"),
              height: hp("20%"),
              borderRadius: 5,
              alignSelf: "center",
              marginTop: hp("1%"),
              opacity: 10
            }}
          >
            <ImageBackground
              source={require("../assets/img/milk.png")}
              resizeMode="cover"
              style={{
                backgroundColor: "yellow",
                width: wp("94%"),
                height: hp("20%"),
                // borderRadius: 200,
                alignSelf: "center",
                opacity: 10
                // backgroundColor:'red'
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: "#fff",
                  marginLeft: wp("5%"),
                  marginTop: hp("2%")
                }}
              >
                Milk Products
              </Text>
              <Text
                style={{ fontSize: 18, color: "#fff", marginLeft: wp("5%") }}
              >
                100% Naturals
              </Text>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.title}>
          <Image
            source={require("../assets/img/milkk.png")}
            style={{
              marginLeft: wp("2%"),
              width: wp("13%"),
              height: hp("6%"),
              alignSelf: "center"
            }}
          />
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              color: "#000",
              fontWeight: "bold",
              marginLeft: wp("3%")
            }}
          >
            Milk Products
          </Text>
        </View>
        {loader
          ? <View
            style={{
              alignSelf: "center",
              justifyContent: "center",
              // left: "50%",
              height: hp("30%")
            }}
          >
            <ActivityIndicator size="small" color={"#F4BD2F"} />
          </View>
          : <ScrollView horizontal style={styles.product}>
            {hProduct.map((item, index) => {
              return (
                <View style={styles.hProduct}>
                  <Image
                    source={require("../assets/img/fresh.png")}
                    style={{
                      marginTop: hp("-7%"),
                      // width: wp('15%'),
                      // height: hp('7%'),
                      alignSelf: "center"
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: "#000",
                        alignSelf: "center",
                        marginLeft: wp("2%")
                      }}
                    >
                      Nonfat Dry Milk
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        color: "#7A869A",
                        alignSelf: "center",
                        marginRight: wp("2%")
                      }}
                    >
                      500 ml
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: hp("2%")
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#000",
                        alignSelf: "center",
                        marginLeft: wp("2%"),
                        fontWeight: "bold"
                      }}
                    >
                      $10.00
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#F4BD2F",
                        width: wp("16%"),
                        height: hp("4%"),
                        borderRadius: 10,
                        alignSelf: "center",
                        marginRight: wp("2%"),
                        justifyContent: "center"
                      }}
                      onPress={() => {
                        setAddingCard(item);
                        setModalVisible(true);
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 13,
                          color: "#FFF",
                          alignSelf: "center",
                          marginRight: wp("2%"),
                          justifyContent: "center"
                          // marginTop: hp("1%")
                        }}
                      >
                        ADD
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            })}
          </ScrollView>}

        {addTocard.length != 0
          ? <View>
            <TouchableOpacity
              style={{
                backgroundColor: "#F4BD2F",
                width: wp("95%"),
                height: hp("8%"),
                borderRadius: 10,
                alignSelf: "center",
                flexDirection: "row",
                justifyContent: "space-between",
                // bottom:20
                position: "absolute",
                bottom: 7
              }}

              onPress={() => {
                placedProducts();
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: wp("13%"),
                    height: hp("6%"),
                    borderRadius: 7,
                    alignSelf: "center",
                    backgroundColor: "#FFFFFF",
                    marginLeft: wp("2%")
                  }}
                >
                  <Image
                    source={require("../assets/icon/store.png")}
                    style={{ alignSelf: "center", marginTop: hp("1%") }}
                  />
                </View>
                <View style={{ alignSelf: "center", marginLeft: wp("2%") }}>
                  <Text style={{ fontSize: 16, color: "#fff" }}>
                    {addTocard.length} Items
                  </Text>
                  <Text style={{ fontSize: 12, color: "#fff" }}>{addTocard.reduce((n, {max_price}) => n + max_price, 0)}</Text>
                </View>
              </View>

              <TouchableOpacity
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginRight: wp("2%")
                }}
                onPress={() => {
                  placedProducts();
                }}
              >

                {
                  loading ?
                    <ActivityIndicator size="small" color={"#fff"} />
                    :

                    <>
                      <Text style={{ color: "#fff" }}>Place Order</Text>
                      <Righta name="right" size={20} color="#FFF" />
                    </>

                }
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
          : null}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{ backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}
        >
          {addingCard != null
            ? <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{}}>
                  <View
                    style={{
                      backgroundColor: "#7A869A",
                      width: widthPercentageToDP("20%"),
                      height: heightPercentageToDP("0.5%"),
                      alignSelf: "center",
                      borderRadius: 3
                    }}
                  />
                  <View
                    style={{
                      marginTop: "8%",
                      bottom: 0,
                      right: "15%"
                    }}
                  >
                    <Text style={styles.modalText}>Order Confirmation</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: "white",
                      width: widthPercentageToDP("80%"),
                      height: heightPercentageToDP("28%"),
                      borderRadius: 10,
                      marginTop: heightPercentageToDP("2%")
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: heightPercentageToDP("2%"),
                        justifyContent: "space-between"
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <View
                          style={{
                            height: heightPercentageToDP("2%"),
                            backgroundColor: "#F4BD2F",
                            width: widthPercentageToDP("1%"),
                            borderRadius: 5,
                            marginLeft: widthPercentageToDP("5%"),
                            alignSelf: "center"
                          }}
                        />
                        <Text
                          style={{
                            fontSize: 20,
                            // fontFamily: "Roboto-Medium",
                            fontWeight: "bold",
                            color: "#000",
                            marginLeft: widthPercentageToDP("3%")
                          }}
                        >
                          Your Order
                        </Text>
                      </View>
                      <View>
                        <Image
                          source={require("../assets/icon/check.png")}
                          style={{
                            alignSelf: "center",
                            marginRight: widthPercentageToDP("2%")
                          }}
                        />
                      </View>
                    </View>
                    <Text
                      style={{
                        color: "#000",
                        fontSize: 14,
                        // fontFamily: "Roboto",
                        fontWeight: "500",
                        marginLeft: widthPercentageToDP("5%"),
                        marginTop: heightPercentageToDP("2%")
                      }}
                    >
                      {addingCard.name}
                    </Text>
                    <Text
                      style={{
                        color: "#7A869A",
                        fontSize: 12,
                        // fontFamily: "Roboto",
                        marginLeft: widthPercentageToDP("5%")
                      }}
                    >
                      {addingCard.single_packet_quantity}
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        // fontFamily: "Roboto-Medium",
                        fontWeight: "bold",
                        color: "#000",
                        marginLeft: widthPercentageToDP("5%"),
                        marginTop: heightPercentageToDP("1.5%")
                      }}
                    >
                      Delivery Address
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        marginLeft: widthPercentageToDP("5%"),
                        marginTop: heightPercentageToDP("1%")
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#F5F5F5",
                          width: widthPercentageToDP("11%"),
                          height: heightPercentageToDP("5.5%"),
                          borderRadius: 5
                        }}
                      >
                        <Image
                          source={require("../assets/img/bike.png")}
                          style={{
                            alignSelf: "center",
                            marginTop: heightPercentageToDP("1%")
                          }}
                        />
                      </View>
                      <Image
                        source={require("../assets/icon/location.png")}
                        style={{
                          alignSelf: "center",
                          marginLeft: widthPercentageToDP("2%")
                        }}
                      />
                      <Text
                        style={{
                          color: "#7A869A",
                          fontSize: 12,
                          alignSelf: "center",
                          marginLeft: widthPercentageToDP("1%")
                        }}
                      >
                        725 5th Ave, NY 1055, New York
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginTop: heightPercentageToDP("1.5%")
                    }}
                  >
                    <Text style={{ fontSize: 16, color: "#000" }}>
                      Cash on Delivery
                    </Text>
                    <Text
                      style={{
                        fontSize: 20,
                        color: "#000",
                        fontWeight: "bold"
                      }}
                    >
                      {addingCard.max_price}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#F4BD2F",
                      width: widthPercentageToDP("80%"),
                      height: heightPercentageToDP("6%"),
                      borderRadius: 10,
                      alignSelf: "center",
                      marginTop: heightPercentageToDP("1.5%"),
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      console.log(">>ADDING_CARD", addingCard);
                      let old = addTocard;
                      addTocard.push(addingCard);
                      setAddToCard(old);
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.textStyle}>Done</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            : null}
        </TouchableOpacity>
      </Modal>
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
  header: {
    flex: 1,
    // backgroundColor:"black",
    height: hp("10%"),
    flexDirection: "row",
    justifyContent: "space-between"
  },
  product: {
    flex: 4,
    // backgroundColor: 'red',
    height: hp("40%"),
    borderColor: "#000",
    flexDirection: "row"
    // flexDirection:'column'
  },
  title: {
    flex: 1,
    // backgroundColor: 'yellow',
    height: hp("8%"),
    flexDirection: "row"
  },
  home: {
    flex: 3,
    // backgroundColor: 'blue',
    height: hp("32%")
  },
  headertitle: {
    fontSize: 20,
    // fontFamily: "Poppins",
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: wp("3%"),
    color: "#000000"
  },
  titleheader: {
    fontSize: 27,
    color: "#000",
    fontWeight: "bold",
    marginLeft: wp("3%"),
    marginTop: hp("1%")
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
    // backgroundColor:"F4BD2F#"
  },
  label: {
    marginleft: wp("2%"),
    marginTop: hp("0.7%"),
    color: "#000000"
    // backgroundColor: '#F4BD2F',
    // fontWeight: "bold"
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

  /// Test

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // height:200
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: "#F5F5F5",
    // borderRadius: 20,
    // padding: 35,
    alignItems: "center",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: -5
    },
    shadowOpacity: 0.5,
    // shadowRadius: 4,
    elevation: 5,
    height: 430,
    bottom: 35,
    position: "absolute",
    width: "100%",
    borderTopLeftRadius: 20
    // justifyContent:'flex-end'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF"
  },
  buttonClose: {
    backgroundColor: "#2196F3"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    // marginBottom: 15,
    textAlign: "center",
    fontSize: 22,
    fontWeight: "500"
  },
  hProduct: {
    width: wp("55%"),
    height: hp("25%"),
    borderRadius: 25,
    marginTop: hp("5%"),
    marginLeft: wp("3%"),
    borderColor: "#000",
    borderWidth: 0.3,
    borderColor: "grey",
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 2,
    elevation: 5,
    shadowRadius: 15,
    shadowOffset: { width: 10, height: 13 }
  }
});

export default Home;

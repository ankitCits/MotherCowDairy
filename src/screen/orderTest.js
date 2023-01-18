import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP
} from "react-native-responsive-screen";

const OrderTest = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                backgroundColor: "#7A869A",
                width: widthPercentageToDP("20%"),
                height: heightPercentageToDP("0.5%"),
                alignSelf: "center",
                borderRadius: 3
              }}
            />
            <Text style={styles.modalText}>Order Confirmation</Text>
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
                      height: heightPercentageToDP("4%"),
                      backgroundColor: "#F4BD2F",
                      width: widthPercentageToDP("1%"),
                      borderRadius: 5,
                      marginLeft: widthPercentageToDP("5%")
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 22,
                      fontFamily: "Roboto-Medium",
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
                  fontSize: 16,
                  fontFamily: "Roboto",
                  fontWeight: "bold",
                  marginLeft: widthPercentageToDP("5%"),
                  marginTop: heightPercentageToDP("2%")
                }}
              >
                Nonfat Dry Milk
              </Text>
              <Text
                style={{
                  color: "#7A869A",
                  fontSize: 14,
                  fontFamily: "Roboto",
                  marginLeft: widthPercentageToDP("5%")
                }}
              >
                2 Items
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  fontFamily: "Roboto-Medium",
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
                    width: widthPercentageToDP("12%"),
                    height: heightPercentageToDP("6%"),
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
                    fontSize: 13,
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
              <Text style={{ fontSize: 20, color: "#000", fontWeight: "bold" }}>
                $ 20.00
              </Text>
            </View>
            <Pressable
              style={{
                backgroundColor: "#F4BD2F",
                width: widthPercentageToDP("80%"),
                height: heightPercentageToDP("6%"),
                borderRadius: 10,
                alignSelf: "center",
                marginTop: heightPercentageToDP("1.5%")
              }}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Done</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F5F5F5",
    borderRadius: 25,
    padding: 35,
    // alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: widthPercentageToDP("100%"),
    height: heightPercentageToDP("65%"),
    marginTop: heightPercentageToDP("50%")
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
    textAlign: "center",
    marginTop: heightPercentageToDP("1.5%")
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: 'center',
    fontSize: 24,
    color: "#000",
    fontWeight: "bold",
    justifyContent: "flex-start",
    marginTop: heightPercentageToDP("2%")
  }
});

export default OrderTest;

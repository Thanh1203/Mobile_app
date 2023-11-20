import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import baseStyle from "../../style/baseStyle";
import styles from "../../style/homeStyle";
import OptionHome from "../../components/OptionHome";

const HomeScreen = () => {
  const titleList =['Gọi món', 'Thanh toán', "Thống kê"]

  const navigation = useNavigation();

  const openMenu = () => {
    navigation.navigate("MenuScreen");
  };

  const openOrder = () => {
    navigation.navigate("OrderScreen");
  };

  const openPayment = () => {
    navigation.navigate("PaymentScreen");
  };

  const openStatistical = () => {

  }

  return (
    <React.Fragment>
      <View style={styles.headerCtn}>
        <Text style={[styles.h1, styles.headerTitle]}>Trang chủ</Text>
        <TouchableOpacity onPress={openMenu}>
          <FontAwesome name="bars" size={35} color="white" />
        </TouchableOpacity>
      </View>
      <View style={baseStyle.page}>
        <View style={styles.bodyCtn}>
          <OptionHome
            title={titleList[0]}
            handleOption={openOrder} 
            icon="restaurant"
          />
          <OptionHome
            title={titleList[1]}
            handleOption={openPayment}
            icon="credit-card"
          />
          <OptionHome title={titleList[2]}
            handleOption={openStatistical}
            icon="insert-chart-outlined"
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default HomeScreen;

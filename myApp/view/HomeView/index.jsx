import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import baseStyle from "../../style/baseStyle";
import styles from "../../style/homeStyle";
import OptionHome from "../../components/OptionHome";

const HomeScreen = () => {
  const titleList =['Gọi món', 'Thanh toán', "Doanh thu", "Nhân viên", "Cập nhật Menu", "Thiết lập"]

  const navigation = useNavigation();
  //* mở gọi món
  const openOrder = () => {
    navigation.navigate("OrderScreen");
  };
  //* mở thanh toán
  const openPayment = () => {
    navigation.navigate("PaymentScreen");
  };
  //* mở thống kê
  const openStatistical = () => {

  }
  //* mở cập nhật nhân viên
  const openUserInfor = () => {

  }
  //* mở cập nhật menu
  const openMenuUpdate = () => {

  }
  //* mở cài đặt
  const openSetting = () => {
    navigation.navigate("SettingScreen");
  }

  return (
    <React.Fragment>
      <View style={styles.headerCtn}>
        <Text style={[styles.h1, styles.headerTitle]}>Trang chủ</Text>
      </View>
      <View style={baseStyle.page}>
        <View style={styles.bodyCtn}>
          <OptionHome
            title={titleList[0]}
            handleOption={openOrder} 
            icon="edit"
          />
          <OptionHome
            title={titleList[1]}
            handleOption={openPayment}
            icon="credit-card"
          />
          <OptionHome title={titleList[2]}
            handleOption={openStatistical}
            icon="bar-chart"
          />
          <OptionHome
            title={titleList[3]}
            handleOption={openUserInfor}
            icon="user"
          />
          <OptionHome
            title={titleList[4]}
            handleOption={openMenuUpdate}
            icon="list-alt" />
          <OptionHome
            title={titleList[5]}
            handleOption={openSetting}
            icon="gear"
          />
        </View>
      </View>
    </React.Fragment>
  );
};

export default HomeScreen;

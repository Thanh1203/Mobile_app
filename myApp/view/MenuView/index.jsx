import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../style/menuStyle";
import BtnPrePage from "../../components/BtnPreviousPage";
import BtnLogout from "../../components/BtnLogout";

const MenuScreen = () => {
  return (
    <View style={styles.menuCtn}>
      <View style={styles.menuHeader}>
        <BtnPrePage />
      </View>
      <View style={styles.menuBottom}>
        <BtnLogout style={ styles.menuBtnPrePage } />
      </View>
    </View>
  );
};

export default MenuScreen;
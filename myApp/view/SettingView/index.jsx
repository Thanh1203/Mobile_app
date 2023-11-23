import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../style/settingStyle";
import BtnPrePage from "../../components/BtnPreviousPage";
import BtnLogout from "../../components/BtnLogout";

const SettingScreen = () => {
  return (
    <View style={styles.settingCtn}>
      <View style={styles.settingHeader}>
        <BtnPrePage />
      </View>
      <View style={styles.settingBottom}>
        <BtnLogout style={ styles.settingBtnPrePage } />
      </View>
    </View>
  );
};

export default SettingScreen;
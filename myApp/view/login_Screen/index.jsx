import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Keyboard, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "./style/styles";
import { FontAwesome } from '@expo/vector-icons';
import BtnLogin from "../../components/btn_login";

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const checkRole = (text) => {
  const regex = /\buser\b/i;
  return regex.test(text);
}

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    if (username.length === 0 || password.length === 0) {
      Alert.alert("Thông báo", "Tài khoản và mật khẩu không được dể trống");
      return;
    }
    if (checkRole(username)) {
      navigation.navigate("HomeScreenUser");
      return;
    } else {
      navigation.navigate("HomeScreenAdmin");
    }
    Keyboard.dismiss();
  };

  const goSignUp = () => {
      navigation.navigate("SignUpScreen");
  }
  
  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.loginCtn}>
        <Text style={styles.loginText}>MyRestaurant</Text>
        <Text style={[styles.loginDetail]}>Quản lý cửa hàng ngay trong tầm tay</Text>
        <View style={[styles.loginItems]}>
            <Text style={[styles.loginItem_title]}>Tên tài khoản</Text>
            <TextInput style={[styles.loginItem_input]} placeholder="Tài khoản" onChangeText={(text) => setUsername(text)} value={username}/>
        </View>
        <View style={[styles.loginItems]}>
            <Text style={[styles.loginItem_title]}>Mật khẩu</Text>
            <TextInput style={[styles.loginItem_input]} secureTextEntry={true} placeholder="Mật khẩu" onChangeText={(text) => setPassword(text)} value={password}/>
        </View>
        <View style={styles.loginOption}>
            <View style={styles.loginOption_item}>
                <FontAwesome name="hand-o-right" size={24} color="#dd1c1a" />
                <Text onPress={goSignUp} style={styles.goSignUp}>Đăng ký tài khoản ngay!</Text>
            </View>
            <Text style={styles.forgetPass}>Quên mật khẩu?</Text>
        </View>
        <BtnLogin title={"Đăng nhập"} handleOption={handleLogin}/>
      </View>
    </TouchableWithoutFeedback>
  );
};


export default LoginScreen
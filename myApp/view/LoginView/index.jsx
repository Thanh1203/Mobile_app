import React, { useState } from "react";
import {
  Alert,
  ImageBackground,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import styles from "../../style/loginStyle";
import { useNavigation } from "@react-navigation/native";

const dismissKeyboard = () => {
  Keyboard.dismiss();
};

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const handleLogin = () => {
    // Kiểm tra nếu tài khoản và mật khẩu là admin
    if (username.toLowerCase() === "admin" && password === "admin") {
      navigation.navigate("HomeScreen");
    } else if (username === "" || password === "") {
      Alert.alert("Thông báo", "Tài khoản và mật khẩu không được dể trống.");
    } else {
      Alert.alert("Thông báo", "Tài khoản hoặc mật khẩu không đúng.");
    }

    // Nếu muốn đóng bàn phím sau khi xử lý đăng nhập
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <ImageBackground
        style={[styles.loginCtn]}
        source={require('../../assets/bg_login.jpg')}>
        <View style={styles.loginContent}>
          <Text style={[styles.loginText]}>Đăng nhập</Text>
          <View style={[styles.loginItem]}>
            <Text style={[styles.loginItem_text]}>Tên tài khoản</Text>
            <TextInput
              style={[styles.loginInput]}
              placeholder="Tài khoản"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
          <View style={[styles.loginItem]}>
            <Text style={[styles.loginItem_text]}>Mật khẩu</Text>
            <TextInput
              style={[styles.loginInput]}
              secureTextEntry={true}
              placeholder="Mật khẩu"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View>
            <TouchableOpacity style={[styles.loginBtn]} onPress={handleLogin}>
              <Text style={[styles.loginBtn_text]}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen
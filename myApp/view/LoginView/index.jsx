import React, { useState } from "react";
import {
  Alert,
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
      <View style={[styles.loginCtn]}>
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
          <Text style={[styles.loginItem_text]}>Tên tài khoản</Text>
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
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen
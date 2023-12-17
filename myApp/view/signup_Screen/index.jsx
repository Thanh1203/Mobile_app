import { Alert, Keyboard, Text, TextInput, TouchableWithoutFeedback, View } from "react-native"
import styles from "./style/styles"
import { FontAwesome } from '@expo/vector-icons';
import BtnLogin from "../../components/btn_login";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

const dismissKeyboard = () => {
    Keyboard.dismiss();
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
}

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [fullname, setFullname] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypePass, setRetypePass] = useState("");

    const handleSignUp = () => {
        if (fullname.length === 0) {
            Alert.alert("Thông báo","Vui lòng nhập họ tên");
            return;
        }
        if (phoneNumber.length === 0) {
            Alert.alert("Thông báo","Vui lòng nhập số điện thoại");
            return;
        } else {
            const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            if (!vnf_regex.test(phoneNumber)) {
                Alert.alert("Thông báo","Số điện thoại nhập không đúng định dạng");
                return;
            }
        }
        if (username.length === 0) {
            Alert.alert("Thông báo","Vui lòng nhập tài khoản");
            return;
        }
        if (password.length === 0) {
            Alert.alert("Thông báo","Vui lòng nhập mật khẩu");
        } else if (!validatePassword(password)) {
            Alert.alert("Thông báo","Mật khẩu ít nhất 8 ký tự bao gồm số, chữ cái viết hoa và ký tự đặc biệt");
            return;
        }
        if (retypePass.length === 0) {
            Alert.alert("Thông báo","Vui lòng nhập lại mật khẩu");
            return;
        } else if (retypePass !== password) {
            Alert.alert("Thông báo","Mật khẩu nhập lại không giống nhau");
            return
        }
        if (fullname.length && phoneNumber.length && username.length && password.length && password === retypePass) {
            navigation.navigate("HomeScreenAdmin");
        }
    }

    const goLogin = () => {
        navigation.navigate("LoginScreen")
    }

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.signUpCtn}>
                <View style={styles.signUpDetail}>
                    <Text style={styles.signUpDetail_name}>MyRestaurant</Text>
                    <Text style={styles.signUpDetail_slogan}>Quản lý nhà hàng trong bàn tay bạn</Text>
                </View>
                <Text style={styles.signUpText}>Đăng ký tài khoản</Text>
                <View style={styles.signUpItem}>
                    <View style={styles.signUpItem_title}>
                        <Text style={styles.signUpItem_title_text}>Họ và Tên</Text>
                        <Text style={styles.signUpItem_title_start}>*</Text>
                    </View>
                    <TextInput placeholder="Họ và Tên" style={styles.signUpItem_input} onChangeText={(text) => setFullname(text)}/>
                </View>
                <View style={styles.signUpItem}>
                    <View style={styles.signUpItem_title}>
                        <Text style={styles.signUpItem_title_text}>Số điện thoại</Text>
                        <Text style={styles.signUpItem_title_start}>*</Text>
                    </View>
                    <TextInput placeholder="Số đện thoại" style={styles.signUpItem_input} onChangeText={(text) => setPhoneNumber(text)}/>
                </View>
                <View style={styles.signUpItem}>
                    <View style={styles.signUpItem_title}>
                        <Text style={styles.signUpItem_title_text}>Tài khoản</Text>
                        <Text style={styles.signUpItem_title_start}>*</Text>
                    </View>
                    <TextInput placeholder="Tài khoản" style={styles.signUpItem_input} onChangeText={(text) => setUsername(text)}/>
                </View>
                <View style={styles.signUpItem}>
                    <View style={styles.signUpItem_title}>
                        <Text style={styles.signUpItem_title_text}>Mật khẩu</Text>
                        <Text style={styles.signUpItem_title_start}>*</Text>
                    </View>
                    <TextInput placeholder="Mật khẩu" style={styles.signUpItem_input} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
                </View>
                <View style={styles.signUpItem}>
                    <View style={styles.signUpItem_title}>
                        <Text style={styles.signUpItem_title_text}>Nhập lại mật khẩu</Text>
                        <Text style={styles.signUpItem_title_start}>*</Text>
                    </View>
                    <TextInput placeholder="Nhập lại mật khẩu" style={styles.signUpItem_input} secureTextEntry={true} onChangeText={(text) => setRetypePass(text)}/>
                </View>
                <View style={styles.signUpOption}>
                    <FontAwesome name="hand-o-right" size={24} color="#dd1c1a" />
                    <Text onPress={goLogin} style={styles.goLogin}>Quay lại đăng nhập!</Text>
                </View>
                <BtnLogin title={"Đăng ký"} handleOption={handleSignUp}/>   
            </View>
        </TouchableWithoutFeedback>
    )
}

export default SignUpScreen
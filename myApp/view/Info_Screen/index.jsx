import React from "react";
import { Text, View } from "react-native";
import BtnPrePage from "../../components/btn_preScreen";
import styles from "./styles/style";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";



const InforScreen = () => {

    const navigation = useNavigation();

    const handleBackPage = () => {
        navigation.navigate("SettingScreenAdmin");
    };

    return (
        <React.Fragment>
            <View style={styles.InforHeader}>
                <BtnPrePage handleOption={handleBackPage}/>
            </View>
            <View style={styles.InforBody}>
                <View style={styles.InfoEmail}>
                    <Text style={styles.InfoText}>E-mail</Text>
                    <AntDesign name="right" size={15} color="#A9A9A9" />
                </View>
                <View style={styles.InfoPhoneNumber}>
                    <Text style={styles.InfoText}>Số điện thoại</Text>
                    <AntDesign name="right" size={15} color="#A9A9A9" />
                </View>
                <View style={styles.InfoChangePassword}>
                    <Text style={styles.InfoText}>Đổi mật khẩu</Text>
                    <AntDesign name="right" size={15} color="#A9A9A9" />
                </View>
                <View style={styles.InfoDeleteAccount}>
                    <Text style={styles.InfoText}>Xóa tài khoản</Text>
                    <AntDesign name="right" size={15} color="#A9A9A9" />
                </View>
                <View style={styles.InfoDownload}>
                    <Text style={styles.InfoText}>Tải xuống thông tin</Text>
                    <AntDesign name="right" size={15} color="#A9A9A9" />
                </View>
            </View>
        </React.Fragment>
    );
};

export default InforScreen;
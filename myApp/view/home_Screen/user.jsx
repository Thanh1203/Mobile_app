import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import styles from "./style/styles";
import React from "react";
import OptionHome from "../../components/btn_option_home/index";

const HomeScreenUser = () => {
    const navigation = useNavigation();

    //* mở cài đặt
    const openSetting = () => {
        navigation.navigate("SettingScreenUser");
    }

    //* mở gọi món
    const openOrder = () => {
        navigation.navigate("OrderScreenUser");
    };

    //* mở thanh toán
    const openPayment = () => {
        navigation.navigate("PaymentScreenUser");
    };

    return (
        <React.Fragment>
            <View style={styles.homeScreenHeader}>
                <Text style={styles.headerText}>Trang chủ</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.homeScreenBody}>
                    <View style={styles.bodyItem}>
                        <Text style={styles.bodyItem_title}>- Dịch vụ -</Text>
                        <View style={styles.bodyItem_options}>
                            <OptionHome title={"Gọi món"} handleOption={openOrder} icon="edit"/>
                            <OptionHome title={"Thanh toán"} handleOption={openPayment} icon="credit-card"/>
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={styles.bodyItem_title}>- Thiết lập -</Text>
                        <View>
                            <OptionHome title={"Cài đặt"} handleOption={openSetting} icon="gear"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

export default HomeScreenUser
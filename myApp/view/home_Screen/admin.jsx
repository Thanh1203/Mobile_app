import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import styles from "./style/styles";
import OptionHome from "../../components/btn_option_home/index";

const HomeScreenAdmin = () => {
    const navigation = useNavigation();

    //* mở cài đặt
    const openSetting = () => {
        navigation.navigate("SettingScreenAdmin");
    }

    //* mở gọi món
    const openOrder = () => {
        navigation.navigate("OrderScreenAdmin");
    };

    //* mở thanh toán
    const openPayment = () => {
        navigation.navigate("PaymentScreenAdmin");
    };

    //* mở cập nhật nhân viên
    const openStaff = () => {
        navigation.navigate("PersonnelScreen");
    }

    //* mở cập nhật menu
    const openMenuUpdate = () => {
        navigation.navigate("UpdateMenuScreen");
    }

    //* mở thống kê
    const openStatistical = () => {
        Alert.alert("Thông báo", "Chức năng đang trong giai đoạn phát triển");
    }

    // mở danh sách bàn
    const openListTable = () => {
        navigation.navigate("TableScreen");
    }

    const openListFloors = () => {
        navigation.navigate("FloorsScreen");
    }

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
                        <Text style={styles.bodyItem_title}>- Quản lý nhà hàng -</Text>
                        <View style={styles.bodyItem_options}>
                            <OptionHome title={"Nhân viên"} handleOption={openStaff} icon="user"/>
                            <OptionHome title={"Danh sách món ăn"} handleOption={openMenuUpdate} icon="list-alt"/>
                            <OptionHome title={"Danh sách bàn ăn"} handleOption={openListTable} icon="th-list" />
                            <OptionHome title={"Danh sách tầng"} handleOption={openListFloors} icon="th-list" />
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={styles.bodyItem_title}>- Báo cáo thống kê -</Text>
                        <View style={styles.bodyItem_options}>
                            <OptionHome title={"Thống kê doanh thu"} handleOption={openStatistical} icon="bar-chart" />
                            <OptionHome title={"Thống kê hóa đơn"} handleOption={openStatistical} icon="bar-chart" />
                            <OptionHome title={"Thống kê khách hàng"} handleOption={openStatistical} icon="bar-chart"/>
                        </View>
                    </View>
                    <View style={styles.bodyItem}>
                        <Text style={styles.bodyItem_title}>- Thiết lập -</Text>
                        <View style={styles.bodyItem_options}>
                            <OptionHome title={"Cài đặt"} handleOption={openSetting} icon="gear"/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </React.Fragment>
    )
}

export default HomeScreenAdmin
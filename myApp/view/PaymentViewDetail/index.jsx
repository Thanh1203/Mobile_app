import { Text, TouchableOpacity, View } from "react-native"
import styles from "../../style/detailPayStyle"
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";
import baseStyle from "../../style/baseStyle";
import dataListTable from "../../contantData/dataTable";

const filterTable = (id) => {
    let dataTable = {
        id: '',
        people: '',
        floor: ''
    }
    dataListTable.find(item => {
        if (item.id === id) {
            dataTable = item
        }
    })
    
    return dataTable
}

const DetailPaymentScreen = ({route}) => {
    const navigation = useNavigation();
    const { id } = route.params;
    dataTable = filterTable(id)

    const handleBackPage = () => {
        navigation.navigate("PaymentScreen");
    };
    
    const handlePay = () => {
        navigation.navigate("PaymentScreen")
    }

    return (
        <View style={styles.payDetailCtn}>
            <View style={styles.headerPayDetail}>
                <TouchableOpacity style={styles.prePage} onPress={handleBackPage}>
                    <FontAwesome name="arrow-left" size={30} color="#000" />
                    <Text Text style={styles.prePage_text}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyPayDetail}>
                <View style={styles.titlePayDetail}>
                    <Text style={[baseStyle.texth2, baseStyle.textBold, styles.titleDataTable]}>Bàn: {dataTable.id}</Text>
                    <Text style={[baseStyle.texth2, baseStyle.textBold, styles.titleDataTable]}>Tầng: {dataTable.floor}</Text>
                </View>
                <View style={styles.contentPayDetail}>
                    <Text style={[baseStyle.textBold, baseStyle.texth3, baseStyle.textWhite, styles.contentPayDetailTitle]}>Danh sách món ăn</Text>
                    <View style={[styles.contentPayment]}>
                        <View style={[styles.contentPaymentName]}>
                            <Text style={[styles.paymentText]}>Nem nướng nha trang</Text>
                            <Text style={[styles.paymentText]}>Nem lụi</Text>
                            <Text style={[styles.paymentText]}>Bánh đồng xu</Text>
                            <Text style={[styles.paymentText]}>Coca</Text>
                            <Text style={[styles.paymentText]}>7 Up</Text>
                        </View>
                        <View style={[styles.contentPaymentCount]}>
                            <Text style={[styles.paymentText]}>x1</Text>
                            <Text style={[styles.paymentText]}>x6</Text>
                            <Text style={[styles.paymentText]}>x1</Text>
                            <Text style={[styles.paymentText]}>x1</Text>
                            <Text style={[styles.paymentText]}>x1</Text>
                        </View>
                        <View style={[styles.contentPaymentTotal]}>
                            <Text style={[styles.paymentText]}>45.000đ</Text>
                            <Text style={[styles.paymentText]}>72.000đ</Text>
                            <Text style={[styles.paymentText]}>35.000đ</Text>
                            <Text style={[styles.paymentText]}>14.000đ</Text>
                            <Text style={[styles.paymentText]}>14.000đ</Text>
                        </View>
                    </View>
                    <View style={[styles.footerPayment]}>
                        <Text style={[styles.footerPaymentText]}>Tổng tiền: 180.000 đ</Text>
                    </View>
                </View>
                <View style={styles.footerPayDetail}>
                    <TouchableOpacity style={styles.btnPayment} onPress={handlePay}>
                        <Text style={[baseStyle.textBold, baseStyle.texth2, baseStyle.textWhite,
                        styles.btnPaymentText]}>Thanh Toán</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailPaymentScreen
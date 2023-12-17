import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./style/styles";
import { useNavigation } from "@react-navigation/native";
import dataTable from "../../contantData/dataTable.json";
import BtnPrePage from "../../components/btn_preScreen"
import React from "react";
import dataFakeBill from "../../contantData/dataFakeBill.json"
import { MaterialIcons } from '@expo/vector-icons';

const filterTable = (id) => {
  const dataListTable = dataTable.dataListTable;
    let tableInfor = {
        id: '',
        people: '',
        floor: ''
    }
    dataListTable.find(item => {
        if (item.id === id) {
            tableInfor = item
        }
    })
    
    return tableInfor
}

const handleFetchData = (index) => {
    let result = []
    const numberLoop = index;
    const dataLength = dataFakeBill.dataFakes.length
    let tempIndex = 0
    for (let i = 0; i < numberLoop; i++) {
        tempIndex = Math.floor(Math.random() * dataLength);
    }
    const data = dataFakeBill.dataFakes[tempIndex].data;
    data.forEach((item, index) => {
        result.push(
            <View key={index} style={styles.dataBill_item}>
                <Text style={styles.dataBill_item_name}>{ item.name }</Text>
                <Text style={styles.dataBill_item_count}>x{ item.count}</Text>
                <Text style={styles.dataBill_item_price}>{item.price}.000đ</Text>
            </View>
        )
    })
    return result
}

const handleTotalPrice = (index) => {
    let totalBill = 0
    const numberLoop = index;
    const dataLength = dataFakeBill.dataFakes.length
    let tempIndex = 0
    for (let i = 0; i < numberLoop; i++) {
        tempIndex = Math.floor(Math.random() * dataLength);
    }
    const data = dataFakeBill.dataFakes[tempIndex].data;
    data.forEach((item) => {
        totalBill += item.price
    })
    return totalBill
}

const DetailPaymentScreenAdmin = ({route}) => {
    const navigation = useNavigation();
    const { id } = route.params;
    tableInfo = filterTable(id)
    fetchData = handleFetchData(id)
    const handleBackPage = () => {
        navigation.navigate("PaymentScreenAdmin");
    };
    
    const handlePay = () => {
        navigation.navigate("PaymentScreenAdmin")
    }

    return (
        <React.Fragment>
            <View style={styles.headerBill}>
                <BtnPrePage handleOption={handleBackPage} />
            </View>
            <View style={styles.bodyBill}>
                <Text style={styles.titleBill}>Hóa đơn</Text>
                <View style={styles.billTableInfo}>
                    <Text style={styles.billTableInfo_text}>Bàn: {tableInfo.id}</Text>
                    <Text style={styles.billTableInfo_text}>Tầng: {tableInfo.floor}</Text>
                </View>
                <View style={styles.dataBill}>
                    <Text style={styles.dataBill_title}>Danh sách món ăn</Text>
                    <ScrollView showsVerticalScrollIndicator={false} style={styles.dataBill_list}>
                        {handleFetchData(id)}
                    </ScrollView>
                    <Text style={styles.totalBill_text}>Tổng tiền: {handleTotalPrice(id)}.000 đ</Text>
                </View>
            </View>
            <View style={styles.footerBill}>
                <TouchableOpacity style={styles.footerBill_btn} onPress={handlePay}>
                    <Text style={styles.footerBill_text}>Thanh Toán</Text>
                    <MaterialIcons name="payment" size={28} color="#e8e8e9" />
                </TouchableOpacity>
            </View>
        </React.Fragment>
    )
}

export default DetailPaymentScreenAdmin
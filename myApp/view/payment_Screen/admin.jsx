import React, { useState } from "react"
import BtnOptionFloor from "../../components/btn_floor";
import dataTable from "../../contantData/dataTable.json"
import BtnPrePage from "../../components/btn_preScreen";
import { ScrollView, Text, View } from "react-native";
import styles from "./style/styles";
import TableOptions from "../../components/btn_table"
import { useNavigation } from "@react-navigation/native";

const mapFloor = (numberFloor) => {
    const match = numberFloor.match(/\d+$/);
    return match ? parseInt(match[0], 10) : null;
}


const PaymentScreenAmdin = () => {
    const [currentFloor, setCurrentFloor] = useState('Tầng 1');
    const navigation = useNavigation();

    const changeFloor = (indexFloor) => {
        setCurrentFloor(indexFloor);
    }

    const handleBackPage = () => {
        navigation.navigate("HomeScreenAdmin");
    };

    const openDetailPayment = (id) => {
        navigation.navigate("DetailPaymentScreenAdmin", { id });
    }

    const numberFloor = (indexFloor) => {
        let floorArray = [];
        for (let i = 1; i <= indexFloor; i++) {
            const content = `Tầng ${i}`
            floorArray.push(
                <BtnOptionFloor key={i} floorIndex={content} handleOption={() => changeFloor(content)} />
            ) 
        }
        return floorArray
    }

    const listTable = (numberFloor) => {
        let tableArray = [];
        const data = dataTable.dataListTable;
        data.forEach((item) => {
            if (item.floor === numberFloor) {
                tableArray.push(
                    <TableOptions key={item.id} peopleCount={item.people} tableIndex={item.id} handleOption={() => openDetailPayment(item.id)}/>
                )
            }
        })
        return tableArray
    }

    return (
        <React.Fragment>
            <View style={styles.paymentHeader}>
                <BtnPrePage handleOption={handleBackPage}/>
            </View>
            <View style={styles.paymentBody}>
                <Text style={styles.paymentTitle}>Thanh toán</Text>
                <View style={styles.paymentFloor}>
                    <Text style= {styles.paymentFloor_title}>Chọn Tầng: </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {numberFloor(5)}
                    </ScrollView>
                </View>
                <View style={styles.paymentTable}>
                    <Text style={styles.paymentTable_title}>{currentFloor}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.paymentTable_option}> 
                            {listTable(mapFloor(currentFloor))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    )
}

export default PaymentScreenAmdin
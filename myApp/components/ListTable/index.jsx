import { ScrollView, Text, View } from "react-native"
import styles from "../../style/listTableStyle"
import TableOptions from "../ListTableSelect/index"
import dataListTable from "../../contantData/dataTable"
import { useNavigation } from "@react-navigation/native"
import React from "react";

const mapFloor = (numberFloor) => {
  const match = numberFloor.match(/\d+$/); // Lấy tất cả các số ở cuối chuỗi
  return match ? parseInt(match[0], 10) : null;
}

const ListTable = ({ numberFloor, status}) => {
    const navigation = useNavigation();

    const openDetailOrder = (id, index) => {
        if (index === 1) {
            navigation.navigate("DetailOrderScreen", { id });
        }
        if (index == 2) {
            navigation.navigate("DetailPaymentScreen", { id })
        }
    }

    const displayTables = (numberFloor) => {
        let listDisplayTable = []
        dataListTable.forEach((item, index) => {
            if (item.floor == numberFloor) {
                listDisplayTable.push(
                    <TableOptions key={index} tableIndex={item.id} peopleCount={item.people} handleOption={() => openDetailOrder(item.id, status)}/>
                )
            }
        })
        return listDisplayTable
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.tablesContainer}>
                {displayTables(mapFloor(numberFloor))}
            </View>
        </ScrollView>
    )
}

export default ListTable
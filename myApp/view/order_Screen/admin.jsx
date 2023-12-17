import React, { useState } from "react"
import { ScrollView, Text, View } from "react-native"
import BtnPrePage from "../../components/btn_preScreen"
import { useNavigation } from "@react-navigation/native"
import styles from "./style/styles"
import BtnOptionFloor from "../../components/btn_floor"
import dataTable from "../../contantData/dataTable.json"
import TableOptions from "../../components/btn_table"

const mapFloor = (numberFloor) => {
    const match = numberFloor.match(/\d+$/);
    return match ? parseInt(match[0], 10) : null;
}

const OrderScreenAmdin = () => {
    const [currentFloor, setCurrentFloor] = useState('Tầng 1')
    const navigation = useNavigation();
    
    const handleBackPage = () => {
        navigation.navigate("HomeScreenAdmin");
    };

    const changeFloor = (indexFloor) => {
        setCurrentFloor(indexFloor)
    }

    const openDetailOrder = (id) => {
        navigation.navigate("DetailOrderScreenAdmin", { id });
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
                    <TableOptions key={item.id} peopleCount={item.people} tableIndex={item.id} handleOption={() => openDetailOrder(item.id)}/>
                )
            }
        })
        return tableArray
    }

    return (
        <React.Fragment>
            <View style={styles.orderHeader}>
                <BtnPrePage handleOption={handleBackPage}/>
            </View>
            <View style={styles.orderBody}>
                <Text style={styles.orderTitle}>Gọi món</Text>
                <View style={styles.orderFloor}>
                    <Text style= {styles.orderFloor_title}>Chọn Tầng: </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {numberFloor(5)}
                    </ScrollView>
                </View>
                <View style={styles.orderTable}>
                    <Text style={styles.orderTable_title}>{currentFloor}</Text>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.orderTable_option}> 
                            {listTable(mapFloor(currentFloor))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </React.Fragment>
    )
}

export default OrderScreenAmdin
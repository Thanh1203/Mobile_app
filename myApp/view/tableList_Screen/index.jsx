import React, { useEffect, useState } from "react"
import { Alert, Modal, ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles/style"
import BtnPrePage from "../../components/btn_preScreen"
import { useNavigation } from "@react-navigation/native"
import dataFloor from "../../contantData/dataFloor.json"
import BtnAddNoTitle from "../../components/btn_add_noTitle"
import dataTable from "../../contantData/dataTable.json"
import { BlurView } from "expo-blur"

const dataListFloor = dataFloor.data;
const dataListTable = dataTable.dataListTable;

const TableListScreen = () => {
    const navigation = useNavigation();
    const [isVisibleModal, setIsVisibleModal] = useState(false);

    const handleBackPage = () => {
        navigation.navigate("HomeScreenAdmin");
    };

    const handleRednderListTable = (data) => {
        const tableInFloor = [];
        dataListTable.forEach(item => {
            if (item.floor === data) {
                tableInFloor.push(
                    <View style={styles.tableInfor} key={item.id}>
                        <Text style={styles.textContentWidtDefault}>{item.id}</Text>
                        <Text>|</Text>
                        <Text style={styles.textContentWidtDefault}>{ item.people }</Text>
                    </View>
                )
            }
        })
        return tableInFloor;
    };

    const handleOpenModalAdd = () => {
        setIsVisibleModal(true);
    };

    const onCancel = () => {
        setIsVisibleModal(false);
    }

    const handleRenderListTable = () => {
        const floorArray = [];
        dataListFloor.forEach(item => {
            floorArray.push(
                <View style={styles.tableListCtn} key={item.id}>
                    <View style={styles.tableListCtnHeader}>
                        <Text style={styles.tableListCtnTitle}>{item.title}</Text>
                        <BtnAddNoTitle handleAdd={() => handleOpenModalAdd()}/>
                    </View>
                    <View>
                        <View style={styles.tableTitleCol}>
                            <Text style={styles.textTitleWidtDefault}>Tên bàn</Text>
                            <Text>|</Text>
                            <Text style={styles.textTitleWidtDefault}>Sức chứa</Text>
                        </View>
                        {handleRednderListTable(item.id)}
                    </View>
                </View>
            )
        });
        return floorArray;
    };

    return (
        <React.Fragment>
            <View style={styles.tableHeader}>
                <BtnPrePage handleOption={handleBackPage} />
            </View>
            <View style={styles.tableBody}>
                <ScrollView style={styles.tableScrollView}>
                    {handleRenderListTable()}
                </ScrollView>
            </View>
        </React.Fragment>
    );
};

export default TableListScreen
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styles from "../../style/detailOrderStyle"
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import baseStyle from "../../style/baseStyle";
import dataListTable from "../../contantData/dataTable";
import MenuOrderOption from "../../components/MenuOptionOrder";
import {AntDesign} from "@expo/vector-icons"
import dataFoods from '../../contantData/dataFoods.json'

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

const DetailOrderScreen = ({ route }) => {
    const { id } = route.params;
    const navigation = useNavigation();
    dataTable = filterTable(id)
    const maindishes = dataFoods.maindishes
    const extradishes = dataFoods.extradish
    const drinks = dataFoods.drinks
    let isOrder = false

    const handleBackPage = () => {
        navigation.navigate("OrderScreen");
    };

    const handleOrder = () => {
        alert("Đặt món thành công")
    }

    return (
        <View style={styles.orderDetailCtn}>
            <View style={styles.headerOrderDetail}>
                <TouchableOpacity style={styles.prePage} onPress={handleBackPage}>
                    <FontAwesome name="arrow-left" size={30} color="#000" />
                    <Text Text style={styles.prePage_text}>Quay lại</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyOrderDetail}>
                <View style={styles.titleOrderDetail}>
                    <Text style={[baseStyle.texth2, baseStyle.textWeight600, styles.titleDataTable]}>Bàn: {dataTable.id}</Text>
                    <Text style={[baseStyle.texth2, baseStyle.textWeight600, styles.titleDataTable]}>Tầng: {dataTable.floor}</Text>
                </View>
                <View style={styles.contentOrderDetail}>
                    <ScrollView style={[styles.menuOrder]}>
                        <View style={[styles.menuOrderContent]}>
                            <View style={[styles.menuOrderTitle]}>
                                <Text style={[baseStyle.texth3, baseStyle.textWeight600, baseStyle.textWhite]}>
                                    Món chính
                                </Text>
                                <AntDesign name="plussquareo" size={24} color="#fff"/>
                            </View>
                            <MenuOrderOption data={maindishes} checking={isOrder}/>
                        </View>
                        <View style={[styles.menuOrderContent]}>
                            <View style={[styles.menuOrderTitle]}>
                                <Text style={[baseStyle.texth3, baseStyle.textWeight600, baseStyle.textWhite]}>
                                    Món ăn thêm
                                </Text>
                                <AntDesign name="plussquareo" size={24} color="#fff"/>

                            </View>
                            <MenuOrderOption data={extradishes}/>
                        </View>
                        <View style={[styles.menuOrderContent]}>
                            <View style={[styles.menuOrderTitle]}>
                                <Text style={[baseStyle.texth3, baseStyle.textWeight600, baseStyle.textWhite]}>
                                    Đồ uống
                                </Text>
                                <AntDesign name="plussquareo" size={24} color="#fff"/>
                            </View>
                            <MenuOrderOption data={drinks}/>
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.footerOrderDetail}>
                    <TouchableOpacity style={styles.btnOrderDetail}>
                        <View style={styles.btnOrderDetail_content}>
                            <Text  style={[baseStyle.textWhite, baseStyle.textWeight600, baseStyle.texth3]}>Phiếu gọi món</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.btnOrderDetail} onPress={handleOrder}>
                        <View style={styles.btnOrderDetail_content}>
                            <Text style={[baseStyle.textWhite, baseStyle.textWeight600, baseStyle.texth3]}>Gọi món</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailOrderScreen
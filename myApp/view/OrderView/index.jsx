import { ScrollView, Text, View } from "react-native"
import BtnPrePage from "../../components/BtnPreviousPage"
import styles from "../../style/oderStyle"
import baseStyle from "../../style/baseStyle"
import BtnOptionFloor from "../../components/BtnOptionFloor"

const OrderScreen = () => {
    return (
        <View style={styles.orderCtn}>
            <View style={styles.orderHeader}>
                <BtnPrePage />
                <View style={styles.oderHeaderTitle}>
                    <Text style={baseStyle.titleScreen}>Gọi món</Text>
                </View>
            </View>
            <View style={styles.oderBody}>
                <View style={styles.selectFloor}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <BtnOptionFloor />
                        <BtnOptionFloor />
                        <BtnOptionFloor />
                        <BtnOptionFloor />  
                        <BtnOptionFloor />
                        <BtnOptionFloor />
                        <BtnOptionFloor />
                        <BtnOptionFloor />
                    </ScrollView>

                </View>
                <View style={styles.selectTable}>
                    <Text>
                        xin chao
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default OrderScreen
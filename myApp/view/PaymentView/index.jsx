import { Text, View } from "react-native"
import BtnPrePage from "../../components/BtnPreviousPage"
import styles from "../../style/payment"
import baseStyle from "../../style/baseStyle"
import { ScrollView } from "react-native"
import { useState } from "react"
import BtnOptionFloor from "../../components/BtnOptionFloor"
import ListTable from "../../components/ListTable/index"

const PaymentScreen = () => {
    const [currentFloor, setCurrentFloor] = useState('Tầng 1')

    const changeFloor = (indexFloor) => {
        setCurrentFloor(indexFloor)
    }

    const numberFloor = (indexFloor) => {
        let floorArray = []
        for (let i = 1; i <= indexFloor; i++) {
            const content = `Tầng ${i}`
            floorArray.push(
                <BtnOptionFloor key={i} floorIndex={content} handleOption={() => changeFloor(content)} />
            ) 
        }
        return floorArray
    }

    return (
        <View style={[styles.payCtn]}>
            <View style={[styles.payHeader]}>
                <BtnPrePage/>
            </View>
            <View style={styles.payHeaderTitle}>
                <Text style={[baseStyle.texth1, baseStyle.textWeight600, baseStyle.textBlack000]}>Thanh toán</Text>
            </View>
            <View style={styles.payBody}>
                <View style={styles.selectFloor}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {numberFloor(5)}
                    </ScrollView>
                </View>
                <View style={styles.selectTable}>
                    <Text style={[baseStyle.texth2, baseStyle.textWeight600]}>
                        {currentFloor}
                    </Text>
                    <ListTable numberFloor={currentFloor} status={2}/>
                </View>
            </View>
        </View>
    )
}

export default PaymentScreen
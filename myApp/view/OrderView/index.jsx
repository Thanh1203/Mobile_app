import { ScrollView, Text, View } from "react-native"
import BtnPrePage from "../../components/BtnPreviousPage"
import styles from "../../style/oderStyle"
import baseStyle from "../../style/baseStyle"
import BtnOptionFloor from "../../components/BtnOptionFloor"
import { useState } from "react"
import ListTable from "../../components/ListTable/index"

const OrderScreen = () => {
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
        <View style={styles.orderCtn}>
            <View style={styles.orderHeader}>
                <BtnPrePage />
            </View>
            <View style={styles.oderHeaderTitle}>
                <Text style={[baseStyle.texth1, baseStyle.textBold, baseStyle.textWhite]}>Gọi món</Text>
            </View>
            <View style={styles.oderBody}>
                <View style={styles.selectFloor}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {numberFloor(5)}
                    </ScrollView>
                </View>
                <View style={styles.selectTable}>
                    <Text style={[baseStyle.texth2, baseStyle.textBold]}>
                        {currentFloor}
                    </Text>
                    <ListTable numberFloor={currentFloor} status={1}/>
                </View>
            </View>
        </View>
    )
}

export default OrderScreen
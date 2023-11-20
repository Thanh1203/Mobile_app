import { StyleSheet, Text, View } from "react-native"

const BtnOptionFloor = ({floorIndex}) => {
    return (
        <View style={styles.floorItem}>
            <Text>{floorIndex}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    floorItem: {
        height: 50,
        width: 100,
        backgroundColor: "aqua",
        marginHorizontal: 15,  
        alignItems: "center",
        justifyContent: "center"
    }
})

export default BtnOptionFloor
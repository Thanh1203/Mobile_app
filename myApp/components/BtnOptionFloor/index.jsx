import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import baseStyle from "../../style/baseStyle"

const BtnOptionFloor = ({floorIndex, handleOption}) => {
    return (
        <TouchableOpacity onPress={handleOption}>
            <View style={styles.floorItem}>
                <Text style={[baseStyle.textWhite, styles.floorTitle]}>{floorIndex}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    floorItem: {
        height: 50,
        width: 100,
        backgroundColor: "#fff",
        marginHorizontal: 15,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
    },
    floorTitle: {
        fontSize: 16,
        letterSpacing: 3,
        color: "#333"
    }
    
})

export default BtnOptionFloor
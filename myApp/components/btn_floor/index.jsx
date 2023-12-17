import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

const BtnOptionFloor = ({floorIndex, handleOption}) => {
    return (
        <TouchableOpacity onPress={handleOption} style={styles.floorItem}>
            <Text style={styles.floorTitle}>{floorIndex}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    floorItem: {
        height: 50,
        width: 100,
        backgroundColor: "#086788",
        marginHorizontal: 15,  
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    floorTitle: {
        fontSize: 16,
        letterSpacing: 3,
        color: "#fff",
        fontWeight: "500"
    }
    
})

export default BtnOptionFloor
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";

const ItemBoard = ({title, handleOption}) => {
    return (
        <View style={styles.itemBoardCtn}>
            <Text style={styles.itemBoard_title}>{title}</Text>
            <TouchableOpacity onPress={handleOption}>
                <FontAwesome5 name="trash-alt" size={24} color="red" /> 
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemBoardCtn: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#b9bab8",
        paddingVertical: 16,
        paddingHorizontal: 8
    },
    itemBoard_title: {
        fontSize: 16,
        fontWeight: "400",
    }
})
export default ItemBoard
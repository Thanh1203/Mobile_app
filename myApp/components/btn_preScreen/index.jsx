import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

const BtnPrePage = ({handleOption}) => {
    return (
        <TouchableOpacity style={styles.prePage} onPress={handleOption}>
            <FontAwesome name="arrow-left" size={30} color="#fff" />
            <Text Text style={styles.prePage_text}>Quay lại</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    prePage: {
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        width: 130
    },
    prePage_text: {
        paddingLeft: 10,
        fontSize: 20,
        fontWeight: "600",
        color: "#fff"
    },
})

export default BtnPrePage
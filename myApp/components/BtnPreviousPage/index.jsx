import { StyleSheet, Text, TouchableOpacity } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const BtnPrePage = () => {
    const navigation = useNavigation();
    const handleBackPage = () => {
        navigation.navigate("HomeScreen");
    };
    return (
        <TouchableOpacity style={styles.prePage} onPress={handleBackPage}>
            <FontAwesome name="arrow-left" size={30} color="#000" />
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
    },
})

export default BtnPrePage
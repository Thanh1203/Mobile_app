import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native"
import { StyleSheet } from "react-native"
import {Entypo} from '@expo/vector-icons'

const BtnLogout = () => {
    const navigation = useNavigation();
    const handleLogout = () => {
        navigation.navigate("LoginScreen");
    };
    return (
        <TouchableOpacity style={styles.logoutBTn} onPress={handleLogout}>
            <Text style={styles.logoutBtn_text}>Đăng xuất</Text>
            <Entypo name="log-out" size={30} color="white" />
        </TouchableOpacity>
 )
}

const styles = StyleSheet.create({
    logoutBTn: {
        height: 60,
        width: "100%",
        backgroundColor: "#dd1c1a",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 16
    },
    logoutBtn_text: {
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 5,
        fontSize: 30,
        flex: 1,
        textAlign: "center",
        paddingLeft: 30
    },
})

export default BtnLogout
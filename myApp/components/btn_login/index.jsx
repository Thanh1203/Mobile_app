import { StyleSheet, Text, TouchableOpacity } from "react-native"

const BtnLogin = ({title, handleOption}) => {
    return (
        <TouchableOpacity style={styles.loginBtn} onPress={handleOption}>
            <Text style={styles.loginBtn_title}>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginBtn: {
        backgroundColor: "#00cecb",
        height: 50,
        width: 200,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    loginBtn_title: {
        fontSize: 24,
        fontWeight: "600",
        color: "#fffdfd",
    },
})
export default BtnLogin
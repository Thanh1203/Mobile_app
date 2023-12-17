import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loginCtn: {
        flex: 1,
        backgroundColor: "#fffdfd",
        alignItems: "center",
        justifyContent: "center",
    },
    loginText: {
        letterSpacing: 5,
        color: "#04030f",
        marginBottom: 12,
        fontWeight: "800",
        fontSize: 34,
    },
    loginDetail: {
        letterSpacing: 1,
        marginBottom: 24,
        color: "#0d1010",
        fontSize: 20,
    },
    loginItems: {
        width: "100%",
        paddingHorizontal: 24,
        alignItems: "flex-start",
        marginBottom: 24,
    },
    loginItem_title: {
        marginBottom: 8,
        fontSize: 14,
    },
    loginItem_input: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#0d1010",
        paddingHorizontal: 12
    },
    loginOption: {
        width: "100%",
        paddingHorizontal: 24,
        marginBottom: 24,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    loginOption_item: {
        flexDirection: "row",
        alignItems: "center",
    },
    goSignUp: {
        fontSize: 14,
        color: "#dd1c1a",
        marginLeft: 8
    },
    forgetPass: {
        height: 20,
        textDecorationLine: "underline"
    },
})

export default styles
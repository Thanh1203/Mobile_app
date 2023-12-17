import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    signUpCtn: {
        flex: 1,
        backgroundColor: "#fffdfd",
        alignItems: "center",
        justifyContent: "center",
    },
    signUpDetail: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    signUpDetail_name: {
        marginRight: 8,
        color: "#f0c808",
        fontSize: 34,
        fontWeight: "800",
        letterSpacing: 5,
    },
    signUpDetail_slogan: {
        fontSize: 16,
        marginTop: 8,
        color: "#04030f",
    },
    signUpText: {
        letterSpacing: 5,
        color: "#04030f",
        marginBottom: 4,
        fontWeight: "800",
        fontSize: 34,
    },
    signUpItem: {
        marginBottom: 12,
        width: "100%",
        paddingHorizontal: 24,
        alignItems: "flex-start"
    },
    signUpItem_title: {
        flexDirection: "row",
        marginBottom: 8
    },
    signUpItem_title_text: {
        fontSize: 14,
    },
    signUpItem_title_start: {
        marginLeft: 8,
        color: "red"
    },
    signUpItem_input: {
        height: 50,
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#0d1010",
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    signUpOption: {
        width: "100%",
        paddingHorizontal: 24,
        marginBottom: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start"
    },
    goLogin: {
        fontSize: 14,
        color: "#dd1c1a",
        marginLeft: 8
    },
    validMessage: {
        color: "red",
        fontSize: 12,
    },
    hideMessage: {
        display: "none"
    },
})

export default styles
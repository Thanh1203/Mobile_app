import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
    InforHeader: {
        height: 80,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 10,
    },
    InforBody: {
        paddingHorizontal:10,
    },
    InfoEmail: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        padding: 4,
        height: 40,
    },
    InfoPhoneNumber: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        padding: 4,
        height: 40,
    },
    InfoChangePassword: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        padding: 4,
        height: 40,
    },
    InfoDeleteAccount: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        padding: 4,
        height: 40,
    },
    InfoDownload: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#C0C0C0",
        padding: 4,
        height: 40,
    },
    InfoText: {
        fontSize: 22,
    }
})

export default styles
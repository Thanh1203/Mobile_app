import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    paymentHeader: {
        height: 80,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    paymentBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    paymentTitle: {
        fontSize: 34,
        fontWeight: "500",
        color: "#06aed5",
        marginBottom: 8,
    },
    paymentFloor: {
        alignItems: "flex-start",
        bpaymentRadius: 10,
        marginBottom: 24,
        height: 90,
    },
    paymentFloor_title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 8,
        marginLeft: 24,
        color: "#06aed5",
    },
    paymentTable: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 24,
    },
    paymentTable_title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 8,
        color: "#06aed5",
    },
    paymentTable_option: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    }
})

export default styles
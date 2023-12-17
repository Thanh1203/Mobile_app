import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    orderDetailHeader: {
        height: 80,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    orderDetailBody: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
    },
    orderDetailBody_Info: {
        backgroundColor: "#06aed5",
        paddingVertical: 12,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 10,
        marginBottom: 24,
    },
    tableInfo_text: {
        color: "#f2f4f3",
        fontWeight: "500",
        fontSize: 24,
        letterSpacing: 2,
    },
    orderScrollView: {
        width: "100%",
        marginBottom: 4,
    },
    orderDetailMenu: {
        width: "100%",
        backgroundColor: "#06aed5",
        borderRadius: 10,
        padding: 12,
        marginBottom: 24,
    },
    orderDetailMenu_title: {
        fontSize: 20,
        color: "#f2f4f3",
        fontWeight: "500",
        marginBottom: 8,
    },
    orderrDetail_footer: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        paddingVertical: 8,
    },
    btnOrder: {
        height: "100%",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#dd1c1a",
        borderRadius: 10,
        paddingHorizontal: 8,
    },
    orderDetai_btnText: {
        fontWeight: "600",
        color: "#f2f4f3",
        fontSize: 18,
        marginRight: 8
    },
})

export default styles
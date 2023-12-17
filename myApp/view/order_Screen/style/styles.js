import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    orderHeader: {
        height: 80,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    orderBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    orderTitle: {
        fontSize: 34,
        fontWeight: "500",
        color: "#06aed5",
        marginBottom: 8,
    },
    orderFloor: {
        alignItems: "flex-start",
        borderRadius: 10,
        marginBottom: 24,
        height: 90,
    },
    orderFloor_title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 8,
        marginLeft: 24,
        color: "#06aed5",
    },
    orderTable: {
        flex: 1,
        width: "100%",
        paddingHorizontal: 24,
    },
    orderTable_title: {
        fontSize: 18,
        fontWeight: "500",
        marginBottom: 8,
        color: "#06aed5",
    },
    orderTable_option: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    }
})

export default styles
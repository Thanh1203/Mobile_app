import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    tableHeader: {
        height: 80,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    tableBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    tableListCtn: {

        marginBottom: 24,
        backgroundColor: "#f4fffb",
        width: "100%",
        borderRadius: 10
    },
    tableListCtnHeader: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#DDDDDD",
        paddingVertical: 8,
        marginBottom: 16,
        paddingHorizontal: 24,
    },
    tableListCtnTitle: {
        fontSize: 20,
        fontWeight: "600"
    },
    tableScrollView: {
        width: "100%",
        paddingHorizontal: 24,
    },
    tableInfor: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 24,
        marginVertical: 16,
    },
    tableTitleCol: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 24,
    },
    textTitleWidtDefault: {
        width: "30%",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    textContentWidtDefault: {
        width: "30%",
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500",
    },
    modalCtn: {
        flex: 1,
    }
})

export default styles
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    homeScreenHeader: {
        height: 80,
        backgroundColor: "#f0c808",
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 15,
    },
    headerText: {
        fontSize: 36,
        fontWeight: "700",
        letterSpacing: 2,
        color: "#fff",
    },
    homeScreenBody: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        padding: 24,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    bodyItem: {
        width: "100%",
        backgroundColor: "#f4fffb",
        paddingTop: 24,
        paddingHorizontal: 12,
        marginBottom: 24,
        justifyContent: "flex-start"
    },
    bodyItem_title: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: "500",
        color: "#086788",
    },
    bodyItem_options: {
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
    }
})

export default styles
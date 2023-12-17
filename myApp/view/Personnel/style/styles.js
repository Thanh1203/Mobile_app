import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    personnalHeader: {
        height: 80,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    perTitle: {
        fontSize: 28,
        fontWeight: "500",
        color: "#ff0022",
        paddingHorizontal: 24,
        marginBottom: 12
    },
    perScroll: {
        paddingHorizontal: 12,
    },
    perList: {
        marginBottom: 20,
        paddingHorizontal: 24,
        paddingBottom: 12,
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#b9bab8",
    },
    perFooter: {
        height: 80,
        paddingHorizontal: 24,
        paddingVertical: 12,
    },
    closeBoard: {
        height: 0,
        overflow: "hidden",
        borderWidth: 0,
        borderColor: "#828282",
    },
})

export default styles
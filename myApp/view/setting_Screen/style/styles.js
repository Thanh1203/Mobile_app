import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    settingCtn: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    settingHeader: {
        height: 80,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        backgroundColor: "#f0c808",
        marginBottom: 24,
    },
    settingFooter: {
        height: 80,
        width: "100%",
        paddingHorizontal: 12,
        alignItems: "center",
        justifyContent: "center",
        borderTopWidth: 1,
        borderColor: "#404242",
    }
})

export default styles
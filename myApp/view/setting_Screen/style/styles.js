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
    },
    setttingBody: {
        flex: 1,
        paddingHorizontal: 24,
        width: "100%",
    },
    settingInfo: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#086788", 
        width: "100%",
        height: 50,
        justifyContent:"center",
        marginBottom: 24,
    },
    settingInfoText: {
        fontSize: 25,
        color: "#fff",
        marginLeft: 5,
    },
    settingLanguage: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: "#086788", 
        width: "100%",
        height: 50,
        justifyContent:"center",
        
    },
    settingLanguageText: {
        fontSize: 25,
        color: "#fff",
        marginLeft: 5,
    }
})

export default styles
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {MaterialIcons} from '@expo/vector-icons'

const OptionHome = ({ title, handleOption, icon }) => {
    return (
        <TouchableOpacity onPress={handleOption}>
            <View style={styles.navItem}>
                <MaterialIcons name={`${icon}`} size={30} color="white" />
                <Text style={styles.navItem_text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    navItem: {
        height: 100,
        width: 180,
        backgroundColor: "#000",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: 10,
        paddingVertical: 10,
        margin: 10
    },
    navItem_text: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
})
export default OptionHome
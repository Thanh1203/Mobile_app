import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import {FontAwesome} from '@expo/vector-icons'

const OptionHome = ({ title, handleOption, icon }) => {
    return (
        <TouchableOpacity onPress={handleOption} style={styles.ctn}>
            <FontAwesome name={`${icon}`} size={30} color="white" />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ctn: {
        backgroundColor: "#81d0e8",
        minHeight: 100,
        width: 150,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 24,
        paddingHorizontal: 24,
        paddingVertical: 16,
    
    },
    text: {
        marginTop: 8,
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
        textAlign: "center",
    }
})
export default OptionHome
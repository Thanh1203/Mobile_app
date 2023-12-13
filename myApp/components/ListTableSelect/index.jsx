import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons'; 
import baseStyle from "../../style/baseStyle";
const TableOptions = ({ tableIndex, peopleCount, handleOption }) => {
    return (
        <View style={styles.optionCtn}>
            <TouchableOpacity onPress={handleOption}>
                <View>
                    <View style={[styles.groupContent, styles.grContentTop]}>
                        <Text style={[baseStyle.texth2, baseStyle.textWeight600, styles.numberPeople]}>{peopleCount}</Text>
                        <FontAwesome5 name="users" size={32} color="black" />
                    </View>
                    <View style={[styles.groupContent, styles.grContentBottom]}>
                        <Text style={[baseStyle.texth2, baseStyle.textWeight600]}>Bàn: {tableIndex}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    optionCtn: {
        height: 150,
        width: 150,
        backgroundColor: "#fff",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        margin: 15,
    },
    groupContent: {
        width: "100%",
        height: "50%",
        justifyContent: "center",
        flexDirection: "row",
    },
    grContentTop: {
        alignItems: "flex-end",
        paddingBottom: 10
    },
    grContentBottom: {
        alignItems: "flex-start",
        paddingTop: 10
    },
    numberPeople: {
        paddingRight: 10,
    }
})

export default TableOptions
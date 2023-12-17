import { useState } from "react"
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"

const OrderSelect = ({title}) => {
    const [count, setCount] = useState(0)
    const hadleMinu = () => {
        if (count === 0) {
            setCount(0)
        }
        else {
            const temp = count -1
            setCount(temp)
        }
    }

    const handlePlus = () => {
        const temp = count + 1
        setCount(temp)
    }

    return (
        <View style={styles.orderSelectCtn}>
            <Text style={styles.orderSelectCtn_title} numberOfLines={2}>{title}</Text>
            <View style={styles.orderSelectCtn_action}>
                <TouchableOpacity onPress={hadleMinu}>
                    <AntDesign name="minuscircleo" size={24} color="#f2f4f3" />
                </TouchableOpacity>
                <Text style={styles.action_count}>{ count }</Text>
                <TouchableOpacity onPress={handlePlus}>
                    <AntDesign name="pluscircleo" size={24} color="#f2f4f3"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderSelectCtn: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
        borderColor: "#f2f2f2",
    },
    orderSelectCtn_title: {
        width: "50%",
        textAlign: "left",
        fontSize: 16,
        fontWeight: "500",
        color: "#f2f4f3",
    },
    orderSelectCtn_action: {
        width: "50%",
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
    action_count: {
        color: "#f2f4f3",

    }
})


export default OrderSelect
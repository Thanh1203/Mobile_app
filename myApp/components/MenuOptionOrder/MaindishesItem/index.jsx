import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import baseStyle from "../../../style/baseStyle"
import {AntDesign} from "@expo/vector-icons"
import { useState } from "react"

const MaindishesItem = ({ title }) => {
    const [count, setCount] = useState(0)
    const [isCheck, setIsCheck] = useState(false)
    const hadleMinu = () => {
        if (count === 0) {
            setCount(0)
            setIsCheck(false)
        }
        else {
            const temp = count -1
            setCount(temp)
        }
    }

    const handlePlus = () => {
        const temp = count + 1
        setCount(temp)
        setIsCheck(true)
    }

    return (
        <View style={[styles.itemCtn]}>
            <Text style={[baseStyle.textBase, styles.title]} numberOfLines={2}>{title}</Text>
            <View style={[styles.actionctn]}>
                <TouchableOpacity onPress={hadleMinu}>
                    <AntDesign name="minuscircleo" size={24} color="#fff" />
                </TouchableOpacity>
                <Text style={[baseStyle.textWhite, baseStyle.texth2]}>{ count }</Text>
                <TouchableOpacity onPress={handlePlus}>
                    <AntDesign name="pluscircleo" size={24} color="#fff"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemCtn: {
        height: 70,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        borderBottomWidth: 1
    },
    title: {
        flexBasis: "50%",
    },
    actionctn: {
        flexBasis: "45%",
        height: "100%",
        backgroundColor: "#1E90FF",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    }
})

export default MaindishesItem
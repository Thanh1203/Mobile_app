import { Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";
import baseStyle from "../../style/baseStyle";

const TitleListBoard = ({ title , handleOpen, condition}) => {
    return (
    <TouchableOpacity onPress={handleOpen} style={[styles.btn]}>
        <Text style={[baseStyle.texth3, baseStyle.textWeight600, baseStyle.textBlack333]}>
            {title}
        </Text>
        <FontAwesome5 name="angle-down" size={24} color="#333" style={{ transform: [{ rotate: condition ? "0deg" : "180deg" }] }}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  btn: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
export default TitleListBoard
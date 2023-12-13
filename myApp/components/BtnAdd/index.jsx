import { StyleSheet, Text, TouchableOpacity } from "react-native"
import baseStyle from "../../style/baseStyle"
import { AntDesign } from "@expo/vector-icons";

const BtnAddNew = ({title, handleAdd}) => {
  return (
    <TouchableOpacity onPress={handleAdd} style={[styles.ctn]}>
        <Text style={[baseStyle.texth2, baseStyle.textWeight600, baseStyle.textWhite, styles.ctnText]}>
            {title}
        </Text>
        <AntDesign name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  ctn: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  ctnText: {
    marginRight: 10,
  },
});

export default BtnAddNew
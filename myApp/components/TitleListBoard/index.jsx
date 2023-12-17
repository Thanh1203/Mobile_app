import { Text, TouchableOpacity, View } from "react-native"
import { StyleSheet } from "react-native"
import { FontAwesome5 } from "@expo/vector-icons";

const TitleListBoard = ({ title , handleOpen, condition}) => {
    return (
    <TouchableOpacity onPress={handleOpen} style={[styles.btn, condition ? styles.btnOpen : styles.btnClose]}>
        <Text style={styles.btnText}>{title}</Text>
        <FontAwesome5 name="angle-down" size={24} color="#edfdfb" style={{ transform: [{ rotate: condition ? "0deg" : "180deg" }] }}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#b9bab8",
    paddingHorizontal: 24,
    paddingVertical: 12
  },
  btnOpen: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  btnClose: {
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#edfdfb"
  }
});
export default TitleListBoard
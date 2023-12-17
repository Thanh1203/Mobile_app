import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { AntDesign } from "@expo/vector-icons";

const BtnAddNew = ({title, handleAdd}) => {
  return (
    <TouchableOpacity onPress={handleAdd} style={[styles.ctn]}>
        <Text style={styles.ctnText}>
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
    backgroundColor: "#289944",
    borderRadius: 10
  },
  ctnText: {
    marginRight: 10,
    fontWeight: "600",
    color: "#fff",
    fontSize: 22
  },
});

export default BtnAddNew
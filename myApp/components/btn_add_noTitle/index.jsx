import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const BtnAddNoTitle = ({handleAdd}) => {
  return (
    <TouchableOpacity style={style.ctn} onPress={handleAdd}>
      <AntDesign name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  ctn: {
    width: 40,
    height: 40,
    backgroundColor: "#289944",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});

export default BtnAddNoTitle;

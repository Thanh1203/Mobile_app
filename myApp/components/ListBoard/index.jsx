import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import baseStyle from "../../style/baseStyle";
import { FontAwesome5 } from "@expo/vector-icons";

const RenderBoard = ({ data, handleOption }) => {
  if (!data) {
    return null;
  }
  let result = [];
  data.forEach((ele) => {
    result.push(
      <View key={ele.key} style={[styles.item]}>
        <Text style={[baseStyle.textBlack333, styles.name]}>{ele.value}</Text>
        <TouchableOpacity onPress={handleOption}>
          <FontAwesome5 name="trash-alt" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  });
  return result;
};

const BoardList = ({ data, isOpen, handleOption }) => {
  return (
    <View style={[styles.ctn, !isOpen && styles.closeBoard]}>
      <RenderBoard data={data} handleOption={handleOption} />
    </View>
  );
};

const styles = StyleSheet.create({
  ctn: {
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "#828282",
  },
  item: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  name: {
    fontSize: 16,
    fontWeight: 500,
  },
  closeBoard: {
    height: 0,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "#828282",
  },
});

export default BoardList;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import baseStyle from "../../../style/baseStyle";
const deleteItem = () => { 
  alert('hi')
}

const RenderList = ({ data }) => {
  if (!data) {
    return null;
  }
  let result = []
  data.forEach(item => {
    result.push(
      <View key={item.key} style={[styles.itemList]}>
        <Text style={[baseStyle.textBlack333, styles.itemName]}>{item.value}</Text>
        <TouchableOpacity onPress={deleteItem}>
          <FontAwesome5 name="trash-alt" size={24} color="red" />
        </TouchableOpacity>
      </View>
    );
  });
  return result
}

const FoodList = ({ data, isOpen }) => {
  return (
    <View style={[styles.foodList, !isOpen && styles.closeList]}>
      <RenderList data={data} />
    </View>
  ); 
};

const styles = StyleSheet.create({
  foodList: {
    marginBottom: 20,
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: "#828282",
  },
  itemList: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
  },
  itemName: {
    fontSize: 16,
    fontWeight: 500,
  },
  closeList: {
    height: 0,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "#828282",
  },
});

export default FoodList;

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const TableOptions = ({ tableIndex, peopleCount, handleOption }) => {
  return (
    <TouchableOpacity onPress={handleOption} style={styles.tableOptionCtn}>
      <View style={styles.tableOptionItem}>
        <Text style={styles.tableOptionItem_title}>{peopleCount}</Text>
        <FontAwesome5 name="users" size={32} color="#fff" />
      </View>
      <View style={styles.tableOptionItem}>
        <Text style={styles.tableOptionItem_title}>Bàn: {tableIndex}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tableOptionCtn: {
    height: 100,
    width: 150,
    backgroundColor: "#086788",
    borderRadius: 10,
    marginBottom: 24,
  },
  tableOptionItem: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  tableOptionItem_title: {
    marginRight: 8,
    fontSize: 20,
    color: "#fff",
    fontWeight: "500",
  }
});

export default TableOptions;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderCtn: {
    flex: 1,
  },
  orderHeader: {
    height: 150,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  oderHeaderTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  oderBody: {
    flex: 1,
  },
  selectFloor: {
    height: 60,
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "center",
  },
  selectTable: {
    flex: 1,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  payCtn: {
    flex: 1,
    backgroundColor: "#fff",
  },
  payHeader: {
    height: 100,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  payHeaderTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#F5F7FE",
  },
  payBody: {
    flex: 1,
    backgroundColor: "#F5F7FE",
  },
  selectFloor: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
  },
  selectTable: {
    flex: 1,
    padding: 24,
  },
});

export default styles;

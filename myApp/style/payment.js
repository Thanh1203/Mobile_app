import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  payCtn: {
    flex: 1,
    backgroundColor: "#fff",
  },
  payHeader: {
    height: 100,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  payHeaderTitle: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#0000CD",
  },
  payBody: {
    flex: 1,
    backgroundColor: "#F5FFFA",
  },
  payBodyTitle: {},
  selectFloor: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B0C4DE",
  },
  selectTable: {
    flex: 1,
    padding: 24,
  },
});

export default styles;

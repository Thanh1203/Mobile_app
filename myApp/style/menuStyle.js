import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuCtn: {
    flex: 1,
    justifyContent: "space-between",
  },
  menuHeader: {
    width: "100%",
    height: 100,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  menuBottom: {
    height: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
  },
});

export default styles;
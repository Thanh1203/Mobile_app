import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  personnelCtn: {
    flex: 1,
    backgroundColor: "#f5f7fe",
  },
  personnelHeader: {
    height: 100,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  personnelBody: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});

export default styles;

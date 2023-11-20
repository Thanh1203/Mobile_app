import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerCtn: {
    height: 120,
    width: "100%",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 60,
  },
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  headerTitle: {
    flexGrow: 1,
    paddingLeft: 115,
    flex: 1,
  },
  bodyCtn: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuCtn: {
    flex: 1,
    backgroundColor: "#f5f7fe",
  },
  menuHeader: {
    height: 100,
    borderBottomWidth: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: "#fff",
  },
  menuBody: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 4,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  menuHeaderText: {
    marginBottom: 20,
    width: "100%",
  },
  foodListCtn: {
    height: 50,
    width: "100%",
    paddingHorizontal: 24,
    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#828282",
  },
  menuFooter: {
    height: 50,
    backgroundColor: "#0066FF",
    margin: 10,
    padding: 5,
    borderRadius: 4,
  },
});

export default styles;

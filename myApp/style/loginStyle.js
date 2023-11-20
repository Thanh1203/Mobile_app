import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginCtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginText: {
    fontSize: 60,
    color: "#333",
    fontWeight: "bold",
    letterSpacing: 5,
    marginBottom: 50,
  },
  loginItem: {
    marginBottom: 20,
    width: "80%",
    height: 100,
  },
  loginItem_text: {
    color: "#333",
    fontSize: 16,
    paddingBottom: 10,
  },
  loginInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#333",
    paddingLeft: 10,
  },
  loginBtn: {
    padding: 10,
    height: 60,
    width: 150,
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBtn_text: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default styles;

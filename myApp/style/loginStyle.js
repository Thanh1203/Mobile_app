import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loginCtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  loginContent: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,.75)",
  },
  loginText: {
    fontSize: 60,
    color: "#fff",
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
    color: "#fff",
    fontSize: 16,
    paddingBottom: 10,
  },
  loginInput: {
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    paddingLeft: 10,
    backgroundColor: "#fff",
  },
  loginBtn: {
    padding: 10,
    height: 60,
    width: 150,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  loginBtn_text: {
    color: "#333",
    fontWeight: "bold",
  },
});

export default styles;

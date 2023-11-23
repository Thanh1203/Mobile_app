import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  payDetailCtn: {
    flex: 1,
    backgroundColor: "#fff",
  },
  prePage: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: 130,
  },
  prePage_text: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  headerPayDetail: {
    height: 100,
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  bodyPayDetail: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
  },
  titlePayDetail: {
    flex: 2,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
  titleDataTable: {
    textAlign: "center",
  },
  contentPayDetail: {
    flex: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    padding: 10,
  },
  contentPayDetailTitle: {
    backgroundColor: "#778899",
    height: 50,
    padding: 10,
    borderRadius: 10,
  },
  contentPayment: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    flex: 1,
  },
  contentPaymentName: {
    flex: 3,
  },
  contentPaymentCount: {
    flex: 1,
    alignItems: "center",
  },
  contentPaymentTotal: {
    flex: 2,
    alignItems: "center",
  },
  paymentText: {
    height: 50,
    lineHeight: 30,
    fontSize: 16,
  },
  footerPayment: {
    height: 40,
    justifyContent: "center",
    padding: 10,
  },
  footerPaymentText: {
    fontSize: 18,
    textAlign: "right",
    paddingHorizontal: 10,
  },
  footerPayDetail: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  btnPayment: {
    justifyContent: "center",
    width: "100%",
    backgroundColor: "red",
  },
  btnPaymentText: {
    textAlign: "center",
  },
});

export default styles;

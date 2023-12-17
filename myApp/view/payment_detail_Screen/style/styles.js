import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerBill: {
    height: 80,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    backgroundColor: "#f0c808",
    marginBottom: 24,
  },
  bodyBill: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 24
  },
  titleBill: {
    fontSize: 34,
    fontWeight: "500",
    color: "#06aed5",
    marginBottom: 8,
  },
  billTableInfo: {
    backgroundColor: "#06aed5",
    paddingVertical: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 10,
    marginBottom: 24,
  },
  billTableInfo_text: {
    color: "#f2f4f3",
    fontWeight: "500",
    fontSize: 24,
    letterSpacing: 2,
  },
  dataBill: {
    flex: 1,
    width: "100%",
  },
  dataBill_title: {
    fontSize: 24,
    color: "#289944",
    marginBottom: 8
  },
  dataBill_list: {
    marginBottom: 24
  },
  dataBill_item: {
    flexDirection: "row", 
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#bebdbd"
  },
  dataBill_item_name: {
    flex: 2,
    textAlign: "left",
  },
  dataBill_item_count: {
    flex: 1,
    textAlign: "center",
  },
  dataBill_item_price: {
    flex: 1,
    textAlign: "right",
  },
  totalBill_text: {
    textAlign: "right",
    fontSize: 20,
    color: "#dd1c1a",
    marginBottom: 24,
  },
  footerBill: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  footerBill_btn: {
    backgroundColor: "#289944",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  footerBill_text: {
    fontSize: 28,
    fontWeight: "500",
    color: "#e8e8e9",
    marginRight: 8
  }
});

export default styles;

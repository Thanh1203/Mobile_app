import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderDetailCtn: {
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
  headerOrderDetail: {
    height: 100,
    justifyContent: "flex-end",
    paddingHorizontal: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  bodyOrderDetail: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
  },
  titleOrderDetail: {
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
  contentOrderDetail: {
    flex: 10,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
  },
  footerOrderDetail: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 10,
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "space-between",
  },
  btnOrderDetail: {
    flexBasis: "50%",
    height: "100%",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  btnOrderDetail_content: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  menuOrder: {
    padding: 12,
  },
  menuOrderContent: {
    paddingBottom: 24,
  },
  menuOrderTitle: {
    height: 60,
    width: "100%",
    backgroundColor: "red",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    lineHeight: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default styles;

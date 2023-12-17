import { useNavigation } from "@react-navigation/native";
import dataFoods from "../../contantData/dataFoods.json";
import dataTable from "../../contantData/dataTable.json";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./style/styles";
import BtnPrePage from "../../components/btn_preScreen";
import OrderSelect from "../../components/order_select";
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const filterTable = (id) => {
  const dataListTable = dataTable.dataListTable;
  let tableinfo = {
    id: "",
    people: "",
    floor: "",
  };
  dataListTable.find((item) => {
    if (item.id === id) {
      tableinfo = item;
    }
  });

  return tableinfo;
};

const DetailOrderScreenAdmin = ({ route }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const maindishes = dataFoods.maindishes;
  const extradishes = dataFoods.extradish;
  const drinks = dataFoods.drinks;
  const tableInfo = filterTable(id);

  const handleBackPage = () => {
    navigation.navigate("OrderScreenAdmin");
  };

  const handleOrder = () => {
    alert("Đặt món thành công");
  };

  const ListFoods = ({ data }) => {
    if (!data) {
      return null;
    }
    let result = [];
    data.forEach((ele) => {
      result.push(<OrderSelect key={ele.key} title={ele.value} />);
    });
    return result;
  };

  return (
    <React.Fragment>
      <View style={styles.orderDetailHeader}>
        <BtnPrePage handleOption={handleBackPage} />
      </View>
      <View style={styles.orderDetailBody}>
        <View style={styles.orderDetailBody_Info}>
          <Text style={styles.tableInfo_text}>Bàn: {tableInfo.id}</Text>
          <Text style={styles.tableInfo_text}>Tầng: {tableInfo.floor}</Text>
        </View>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={styles.orderScrollView}>
          <View style={styles.orderDetailMenu}>
            <Text style={styles.orderDetailMenu_title}>Món chính</Text>
            <ListFoods data={maindishes} />
          </View>
          <View style={styles.orderDetailMenu}>
            <Text style={styles.orderDetailMenu_title}>Món phụ</Text>
            <ListFoods data={extradishes} />
          </View>
          <View style={styles.orderDetailMenu}>
            <Text style={styles.orderDetailMenu_title}>Đồ uống</Text>
            <ListFoods data={drinks} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.orderrDetail_footer}>
        <TouchableOpacity style={styles.btnOrder} onPress={handleOrder}>
          <Text style={styles.orderDetai_btnText}>Gọi món</Text>
          <Feather name="shopping-cart" size={24} color="#f2f4f3" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

export default DetailOrderScreenAdmin;

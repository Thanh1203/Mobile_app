import { Alert, ScrollView, Text, View } from "react-native";
import TitleListBoard from "../../components/TitleListBoard";
import React, { useState } from "react";
import dataPersonnel from "../../contantData/dataPersonnel.json";
import BtnAddNew from "../../components/btn_add";
import styles from "./style/styles";
import { useNavigation } from "@react-navigation/native";
import ItemBoard from "../../components/item_board";
import BtnPrePage from "../../components/btn_preScreen";

const addNew = () => {
  Alert.alert("Thông báo", "Chức năng đang trong giai đoạn phát triển");
};

const deleteItem = () => {
  Alert.alert("Thông báo", "Dữ liệu hông đươc phép xóa!");
};

const PersonnelScreen = () => {
  const navigation = useNavigation();
  const [iOLCashier, setiOLCashier] = useState(false);
  const [iOLServingStaffs, setiOLServingStaffs] = useState(false);
  const [iOLKitchenStaffs, setiOLKitchenStaffs] = useState(false);
  const [iOLCleaningStaffs, setiOLCleaningStaffs] = useState(false);
  const [iOLGuards, setiOLGuards] = useState(false);

  const cashiers = dataPersonnel.Cashier;
  const servingStaffs = dataPersonnel.servingStaff;
  const kitchenStaffs = dataPersonnel.kitchenStaff;
  const cleaningStaffs = dataPersonnel.cleaningStaff;
  const guards = dataPersonnel.Guard;

  const openlist = (value) => {
    if (value === 0) setiOLCashier(!iOLCashier);
    if (value === 1) setiOLServingStaffs(!iOLServingStaffs);
    if (value === 2) setiOLKitchenStaffs(!iOLKitchenStaffs);
    if (value === 3) setiOLCleaningStaffs(!iOLCleaningStaffs);
    if (value === 4) setiOLGuards(!iOLGuards);
  };

  const handleBackPage = () => {
    navigation.navigate("HomeScreenAdmin");
  };

  const handleRenderBoard = (data) => {
    if (!data) {
      return null;
    }
    let result = [];
    data.forEach(e => {
      result.push(
        <ItemBoard key={e.key} title={e.value} handleOption={() => deleteItem()}/>
      )
    });
    return result
  }

  return (
    <React.Fragment>
      <View style={styles.personnalHeader}>
        <BtnPrePage handleOption={handleBackPage}/>
      </View>
      <Text style={styles.perTitle}>Danh sách nhân viên</Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.perScroll}>
        <TitleListBoard title={"Nhân viên thu ngân"} condition={iOLCashier} handleOpen={() => openlist(0)} />
        <View style={[styles.perList, !iOLCashier && styles.closeBoard]}>
          {handleRenderBoard(cashiers)}
        </View>

        <TitleListBoard title={"Nhân viên chạy bàn"} condition={iOLServingStaffs} handleOpen={() => openlist(1)} />
        <View style={[styles.perList, !iOLServingStaffs && styles.closeBoard]}>
          {handleRenderBoard(servingStaffs)}
        </View>

        <TitleListBoard title={"Nhân viên bếp"} condition={iOLKitchenStaffs} handleOpen={() => openlist(2)} />
        <View style={[styles.perList, !iOLKitchenStaffs && styles.closeBoard]}>
          {handleRenderBoard(kitchenStaffs)}
        </View>

        <TitleListBoard title={"Nhân viên dọn dẹp"} condition={iOLCleaningStaffs} handleOpen={() => openlist(3)} />
        <View style={[styles.perList, !iOLCleaningStaffs && styles.closeBoard]}>
          {handleRenderBoard(cleaningStaffs)}
        </View>

        <TitleListBoard title={"Nhân viên bảo vệ"} condition={iOLGuards} handleOpen={() => openlist(4)} />
        <View style={[styles.perList, !iOLGuards && styles.closeBoard]}>
          {handleRenderBoard(guards)}
        </View>
      </ScrollView>
      <View style={styles.perFooter}>
        <BtnAddNew title={"Thêm mới nhân viên"} handleAdd={() => addNew()}/>
      </View>
    </React.Fragment>
  );
};

export default PersonnelScreen;

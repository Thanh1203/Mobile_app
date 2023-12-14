import { ScrollView, Text, View } from "react-native";
import styles from "../../style/personnelStyle";
import BtnPrePage from "../../components/BtnPreviousPage";
import baseStyle from "../../style/baseStyle";
import TitleListBoard from "../../components/TitleListBoard";
import { useState } from "react";
import dataPersonnel from "../../contantData/dataPersonnel.json"
import BoardList from "../../components/ListBoard";
import BtnAddNew from "../../components/BtnAdd";

const addNew = () => {
  alert(1);
};

const deleteItem = () => {
  alert(2); 
}

const PersonnelScreen = () => {
  const [iOLCashier, setiOLCashier] = useState(false);
  const [iOLServingStaffs, setiOLServingStaffs] = useState(false);
  const [iOLKitchenStaffs, setiOLKitchenStaffs] = useState(false);
  const [iOLCleaningStaffs, setiOLCleaningStaffs] = useState(false)
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
  }

  return (
    <View style={[styles.personnelCtn]}>
      <View style={[styles.personnelHeader]}>
        <BtnPrePage />
      </View>
      <View style={[styles.personnelBody]}>
        <Text style={[baseStyle.textBlack333, baseStyle.textWeight600, baseStyle.texth1, styles.personnelTitle]}>Danh sách nhân viên</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.personnelListCtn]}>
            <TitleListBoard title={"Nhân viên thu ngân"} condition={iOLCashier} handleOpen={() => openlist(0)}/> 
          </View>
          <BoardList data={cashiers} isOpen={iOLCashier} handleOption={() => deleteItem()} />
          
          <View style={[styles.personnelListCtn]}>
            <TitleListBoard title={"Nhân viên chạy bàn"} condition={iOLServingStaffs} handleOpen={() => openlist(1)}/> 
          </View>
          <BoardList data={servingStaffs} isOpen={iOLServingStaffs} handleOption={() => deleteItem()} />

          <View style={[styles.personnelListCtn]}>
            <TitleListBoard title={"Nhân viên bếp"} condition={iOLKitchenStaffs} handleOpen={() => openlist(2)}/> 
          </View>
          <BoardList data={kitchenStaffs} isOpen={iOLKitchenStaffs} handleOption={() => deleteItem()} />

          <View style={[styles.personnelListCtn]}>
            <TitleListBoard title={"Nhân viên dọn dẹp"} condition={iOLCleaningStaffs} handleOpen={() => openlist(3)}/> 
          </View>
          <BoardList data={cleaningStaffs} isOpen={iOLCleaningStaffs} handleOption={() => deleteItem()} />

          <View style={[styles.personnelListCtn]}>
            <TitleListBoard title={"Nhân viên bảo vệ"} condition={iOLGuards} handleOpen={() => openlist(4)}/> 
          </View>
          <BoardList data={guards} isOpen={iOLGuards} handleOption={() => deleteItem()} />
        </ScrollView>
      </View>
      <View style={[styles.personnelFooter]}>
        <BtnAddNew title={"Thêm mới nhân viên"} handleAdd={() => addNew()} />
      </View>
    </View>
  );
};

export default PersonnelScreen;

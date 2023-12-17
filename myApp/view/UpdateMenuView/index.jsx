import { Alert, ScrollView, Text, View } from "react-native";
import BtnPrePage from "../../components/btn_preScreen";
import dataFoods from "../../contantData/dataFoods.json";
import React, { useState } from "react";
import BtnAddNew from "../../components/btn_add";
import TitleListBoard from "../../components/TitleListBoard";
import styles from "./style/styles";
import ItemBoard from "../../components/item_board";
import { useNavigation } from "@react-navigation/native";

const addNew = () => {
  Alert.alert("Thông báo", "Chức năng đang trong giai đoạn phát triển");
}

const deleteItem = () => {
  Alert.alert("Thông báo", "Dữ liệu hông đươc phép xóa!");
}

const UpdateMenuScreen = () => {
  const navigation = useNavigation();
  const [isOpenListMaindishes, setIsOpenListMaindishes] = useState(false);
  const [isOpenListExtradishes, setIsOpenListExtradishes] = useState(false);
  const [isOpenListDrinks, setIsOpenListDrinks] = useState(false);

  const maindishes = dataFoods.maindishes;
  const extradishes = dataFoods.extradish;
  const drinks = dataFoods.drinks;

  const openlist = (value) => {
    if (value === 0) setIsOpenListMaindishes(!isOpenListMaindishes);
    if (value === 1) setIsOpenListExtradishes(!isOpenListExtradishes);
    if (value === 2) setIsOpenListDrinks(!isOpenListDrinks);
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

  const handleBackPage = () => {
    navigation.navigate("HomeScreenAdmin");
  };

  return (
      <React.Fragment>
        <View style={styles.updateMenuHeader}>
          <BtnPrePage handleOption={handleBackPage}/>
        </View>
        <Text style={styles.updateMenuTitle}>Danh sách món ăn</Text>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.updateMenuScroll}>
            <TitleListBoard title={"Món chính"} condition={isOpenListMaindishes} handleOpen={() => openlist(0)}/>
            <View style={[styles.updateMenuList, !isOpenListMaindishes && styles.closeBoard]}>
              {handleRenderBoard(maindishes)}
            </View>
        
            <TitleListBoard title={"Món phụ"} condition={isOpenListExtradishes} handleOpen={() => openlist(1)}/>
            <View style={[styles.updateMenuList, !isOpenListExtradishes && styles.closeBoard]}>
              {handleRenderBoard(extradishes)}
            </View>
            
            <TitleListBoard title={"Đồ uống"} condition={isOpenListDrinks} handleOpen={() => openlist(2)}/>
            <View style={[styles.updateMenuList, !isOpenListDrinks && styles.closeBoard]}>
              {handleRenderBoard(drinks)}
            </View>
          </ScrollView>
        <View style={styles.updateMenuFooter}>
          <BtnAddNew title={"Thêm mới món ăn"} handleAdd={() => addNew()} />
        </View>
      </React.Fragment>
  );
};

export default UpdateMenuScreen;

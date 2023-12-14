import { ScrollView, Text, View } from "react-native";
import styles from "../../style/menuStyle";
import BtnPrePage from "../../components/BtnPreviousPage";
import baseStyle from "../../style/baseStyle";
import dataFoods from "../../contantData/dataFoods.json";
import { useState } from "react";
import BtnAddNew from "../../components/BtnAdd";
import TitleListBoard from "../../components/TitleListBoard";
import BoardList from "../../components/ListBoard";

const addNew = () => {
  alert(1);
}

const deleteItem = () => {
  alert(2); 
}

const UpdateMenuScreen = () => {
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

  return (
    <View style={[styles.menuCtn]}>
      <View style={[styles.menuHeader]}>
        <BtnPrePage />
      </View>
      <View style={[styles.menuBody]}>
        <Text style={[baseStyle.texth1, baseStyle.textBlack000, baseStyle.textWeight600, styles.menuHeaderText,]}>Danh sách món ăn</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.foodListCtn]}>
            <TitleListBoard title={"Món chính"} condition={isOpenListMaindishes} handleOpen={() => openlist(0)}/>
          </View>
          <BoardList data={maindishes} isOpen={isOpenListMaindishes} handleOption={() => deleteItem()}/>
          <View style={[styles.foodListCtn]}>
            <TitleListBoard title={"Món phụ"} condition={isOpenListExtradishes} handleOpen={() => openlist(1)}/>
          </View>
          <BoardList data={extradishes} isOpen={isOpenListExtradishes} handleOption={() => deleteItem()}/>
          <View style={[styles.foodListCtn]}>
            <TitleListBoard title={"Đồ uống"} condition={isOpenListDrinks} handleOpen={() => openlist(2)}/>
          </View>
          <BoardList data={drinks} isOpen={isOpenListDrinks} handleOption={() => deleteItem()}/>
        </ScrollView>
      </View>
      <View style={[styles.menuFooter]}>
        <BtnAddNew title={"Thêm mới món ăn"} handleAdd={() => addNew()} />
      </View>
    </View>
  );
};

export default UpdateMenuScreen;

import { ScrollView, Text, View } from "react-native";
import styles from "../../style/menuStyle";
import BtnPrePage from "../../components/BtnPreviousPage";
import baseStyle from "../../style/baseStyle";
import FoodList from "./components/foodList";
import dataFoods from "../../contantData/dataFoods.json";
import { useState } from "react";
import BtnAddNew from "../../components/BtnAdd";
import TitleListTable from "../../components/TitleListTable";

const addNew = () => {
  alert(1)
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
    if (value == 2) setIsOpenListDrinks(!isOpenListDrinks);
  };

  return (
    <View style={[styles.menuCtn]}>
      <View style={[styles.menuHeader]}>
        <BtnPrePage />
      </View>
      <View style={[styles.menuBody]}>
        <Text
          style={[
            baseStyle.texth2,
            baseStyle.textBlack000,
            baseStyle.textWeight600,
            styles.menuHeaderText,
          ]}
        >
          Danh sách món ăn
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.foodListCtn]}>
            <TitleListTable
              title={"Món chính"}
              condition={isOpenListDrinks}
              handleOpen={() => openlist(0)}
            />
          </View>
          <FoodList data={maindishes} isOpen={isOpenListMaindishes} />
          <View style={[styles.foodListCtn]}>
            <TitleListTable
              title={"Món phụ"}
              condition={isOpenListDrinks}
              handleOpen={() => openlist(1)}
            />
          </View>
          <FoodList data={extradishes} isOpen={isOpenListExtradishes} />
          <View style={[styles.foodListCtn]}>
            <TitleListTable
              title={"Đồ uống"}
              condition={isOpenListDrinks}
              handleOpen={() => openlist(2)}
            />
          </View>
          <FoodList data={drinks} isOpen={isOpenListDrinks} />
        </ScrollView>
      </View>
      <View style={[styles.menuFooter]}>
        <BtnAddNew title={"Thêm mới món ăn"} handleAdd={() => addNew()} />
      </View>
    </View>
  );
};

export default UpdateMenuScreen;

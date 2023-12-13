import { View } from "react-native";
import styles from "../../style/personnelStyle";
import BtnPrePage from "../../components/BtnPreviousPage";

const addNew = () => {
  alert(1);
};

const PersonnelScreen = () => {
  return (
    <View style={[styles.personnelCtn]}>
      <View style={[styles.personnelHeader]}>
        <BtnPrePage />
      </View>
          <View style={[styles.personnelBody]}>
              
      </View>
    </View>
  );
};

export default PersonnelScreen;

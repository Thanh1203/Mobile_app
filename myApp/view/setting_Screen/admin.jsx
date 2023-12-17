import { View } from "react-native"
import styles from "./style/styles"
import BtnPrePage from "../../components/btn_preScreen"
import { useNavigation } from "@react-navigation/native";
import BtnLogout from "../../components/btn_Logout";

const SettingScreenAdmin = () => {
    const navigation = useNavigation();

    const handleBackPage = () => {
        navigation.navigate("HomeScreenAdmin");
    };

    return (
        <View style={styles.settingCtn}>
            <View style={styles.settingHeader}>
                <BtnPrePage handleOption={handleBackPage}/>
            </View>
            <View style={styles.settingFooter}>
                <BtnLogout/>
            </View>
        </View>
    )
}

export default SettingScreenAdmin
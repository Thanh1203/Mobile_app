import { Text, TouchableOpacity, View } from "react-native"
import styles from "./style/styles"
import BtnPrePage from "../../components/btn_preScreen"
import { useNavigation } from "@react-navigation/native";
import BtnLogout from "../../components/btn_Logout";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const SettingScreenAdmin = () => {
    const navigation = useNavigation();

    const handleBackPage = () => {
        navigation.navigate("HomeScreenAdmin");
    };

    const handleOpenInfor = () => {
        navigation.navigate("InforScreen");
    }

    

    return (
        <View style={styles.settingCtn}>
            <View style={styles.settingHeader}>
                <BtnPrePage handleOption={handleBackPage}/>
            </View>
            <View style={styles.setttingBody}>
                <TouchableOpacity style={styles.settingInfo} onPress={handleOpenInfor}>
                    <Ionicons name="information-circle" size={27} color="white" />
                    <Text style={styles.settingInfoText}>
                        Thông tin cá nhân
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.settingLanguage}>
                    <FontAwesome5 name="language" size={27} color="white" />
                    <Text style={styles.settingLanguageText}>
                        Ngôn ngữ
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.settingFooter}>
                <BtnLogout/>
            </View>
        </View>
    )
}

export default SettingScreenAdmin
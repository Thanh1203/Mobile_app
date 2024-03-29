import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screen
// login & signup
import LoginScreen from "./view/login_Screen";
import SignUpScreen from "./view/signup_Screen";
// home
import HomeScreenAdmin from "./view/home_Screen/admin";
import HomeScreenUser from "./view/home_Screen/user";
// oder
import OrderScreenAmdin from "./view/order_Screen/admin";
import OrderScreenUser from "./view/order_Screen/user";
// order detail
import DetailOrderScreenAdmin from "./view/order_detail_Screen/admin";
import DetailOrderScreenUser from "./view/order_detail_Screen/user";
// payment
import PaymentScreenAmdin from "./view/payment_Screen/admin";
import PaymentScreenUser from "./view/payment_Screen/user";
// payment detail
import DetailPaymentScreenAdmin from "./view/payment_detail_Screen/admin";
import DetailPaymentScreenUser from "./view/payment_detail_Screen/user";
// Management screen
import UpdateMenuScreen from "./view/UpdateMenuView";
import PersonnelScreen from "./view/Personnel";
import TableListScreen from "./view/tableList_Screen";
import FloorsScreen from "./view/floor_Screen";
// setting
import SettingScreenAdmin from "./view/setting_Screen/admin";
import SettingScreenUser from "./view/setting_Screen/user";

// infor
import InforScreen from "./view/Info_Screen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginScreen">
          {/* login and signUp */}
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ title: "", headerShown: false }}
          />
          {/* Home screen */}
          <Stack.Screen
            name="HomeScreenAdmin"
            component={HomeScreenAdmin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="HomeScreenUser"
            component={HomeScreenUser}
            options={{ title: "", headerShown: false }}
          />
          {/* Order screen */}
          <Stack.Screen
            name="OrderScreenUser"
            component={OrderScreenUser}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="OrderScreenAdmin"
            component={OrderScreenAmdin}
            options={{ title: "", headerShown: false }}
          />
          {/* detail order screen */}
          <Stack.Screen
            name="DetailOrderScreenAdmin"
            component={DetailOrderScreenAdmin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="DetailOrderScreenUser"
            component={DetailOrderScreenUser}
            options={{ title: "", headerShown: false }}
          />
          {/* Payment screen */}
          <Stack.Screen
            name="PaymentScreenAdmin"
            component={PaymentScreenAmdin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="PaymentScreenUser"
            component={PaymentScreenUser}
            options={{ title: "", headerShown: false}}
          />
          {/* Payment detail screen */}
          <Stack.Screen
            name="DetailPaymentScreenAdmin"
            component={DetailPaymentScreenAdmin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="DetailPaymentScreenUser"
            component={DetailPaymentScreenUser}
            options={{ title: "", headerShown: false }}
          />
          {/* Management screen */}
          <Stack.Screen
            name="UpdateMenuScreen"
            component={UpdateMenuScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="PersonnelScreen"
            component={PersonnelScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="TableScreen"
            component={TableListScreen}
            options={{title: "", headerShown: false}}
          />
          <Stack.Screen
            name="FloorsScreen"
            component={FloorsScreen}
            options={{title: "", headerShown: false}}
          />
          {/* Setting screen */}
          <Stack.Screen
            name="SettingScreenAdmin"
            component={SettingScreenAdmin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="SettingScreenUser"
            component={SettingScreenUser}
            options={{ title: "", headerShown: false }}
          />
          {/* info screen */}
          <Stack.Screen
            name="InforScreen"
            component={InforScreen}
            options={{ title: "", headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

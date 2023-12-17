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

import UpdateMenuScreen from "./view/UpdateMenuView";
import PersonnelScreen from "./view/Personnel";
// setting
import SettingScreenAdmin from "./view/setting_Screen/admin";
import SettingScreenUser from "./view/setting_Screen/user";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UpdateMenuScreen">
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
            name="SettingScreenAdmin"
            component={SettingScreenAdmin}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="SettingScreenUser"
            component={SettingScreenUser}
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

import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//* screen
import LoginScreen from "./view/LoginView";
import HomeScreen from "./view/HomeView";
import SettingScreen from "./view/SettingView";
import OrderScreen from "./view/OrderView";
import PaymentScreen from "./view/PaymentView";
import DetailOrderScreen from "./view/OrderViewDetail";
import DetailPaymentScreen from "./view/PaymentViewDetail";
import UpdateMenuScreen from "./view/UpdateMenuView";
import PersonnelScreen from "./view/Personnel";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: "", headerShown: false }}
          />
          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="OrderScreen"
            component={OrderScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PaymentScreen"
            component={PaymentScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailOrderScreen"
            component={DetailOrderScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="DetailPaymentScreen"
            component={DetailPaymentScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="UpdateMenuScreen"
            component={UpdateMenuScreen}
            options={{
              title: "",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="PersonnelScreen"
            component={PersonnelScreen}
            options={{
              title: "",
              headerShown: false,
            }}
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

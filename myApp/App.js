import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./view/LoginView";
import HomeScreen from "./view/HomeView";
import MenuScreen from "./view/MenuView";
import OrderScreen from "./view/OrderView";
import PaymentScreen from "./view/PaymentView";

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
            name="MenuScreen"
            component={MenuScreen}
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

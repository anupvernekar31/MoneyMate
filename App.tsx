import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "./theme";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import Categories from "./screens/Categories";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer theme={theme}>
        <StatusBar style="light" />
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              headerBackTitle: "Back",
            }}
            name="Categories"
            component={Categories}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

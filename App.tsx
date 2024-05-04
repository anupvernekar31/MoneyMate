import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Expenses, Add, Reports, Settings } from "./screens";
import { theme } from "./theme";
import { TabBarIcon } from "./components/TabBarIcon";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <StatusBar style="light" />
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  color={focused ? "white" : "gray"}
                  size={24}
                  type={"expenses"}
                />
              );
            },
          }}
          name="Expenses"
          component={Expenses}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  color={focused ? "white" : "gray"}
                  size={24}
                  type={"reports"}
                />
              );
            },
          }}
          name="Reports"
          component={Reports}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  color={focused ? "white" : "gray"}
                  size={24}
                  type={"add"}
                />
              );
            },
          }}
          name="Add"
          component={Add}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarIcon
                  color={focused ? "white" : "gray"}
                  size={24}
                  type={"settings"}
                />
              );
            },
          }}
          name="Settings"
          component={Settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

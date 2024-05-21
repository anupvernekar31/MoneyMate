import { Alert, StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";
import { useNavigation } from "@react-navigation/native";

export const Settings = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        margin: 16,
        borderRadius: 11,
        overflow: "hidden",
      }}
    >
      <ListItem
        label="Categories"
        onClick={() => navigation.navigate("Categories" as never)}
        detail={<Entypo name="chevron-small-right" size={24} color={"gray"} />}
      />

      <ListItem
        label="Erase all data"
        isDestructive
        onClick={() => {
          Alert.alert(
            "Are u sure?",
            "This action cannot be undone",
            [
              {
                text: "Cancel",
                onPress: () => console.log("111"),
                style: "cancel",
              },
              {
                text: "Erase data",
                style: "destructive",
                onPress: () => console.log("222"),
              },
            ],
            {
              userInterfaceStyle: "dark",
            }
          );
        }}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

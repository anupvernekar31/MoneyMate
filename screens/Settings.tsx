import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListItem from "../components/ListItem";
import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";

export const Settings = () => {
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
        onClick={() => {}}
        detail={
          <Entypo
            name="chevron-small-right"
            size={24}
            color={"gray"}
          />
        }
      />

      <ListItem label="Erase all data" isDestructive onClick={() => {}} />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});

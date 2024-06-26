import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Modal,
  ScrollView,
} from "react-native";
import { ColorPicker, fromHsv } from "react-native-color-picker";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import { MaterialIcons } from "@expo/vector-icons";

import { Entypo } from "@expo/vector-icons";
import { theme } from "../theme";
import { FontAwesome } from "@expo/vector-icons";
import { RectButton, Swipeable } from "react-native-gesture-handler";
import { CategoryRow } from "../components/CategoryRow";

const Categories = () => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState(theme.colors.primary);
  const [newName, setNewName] = useState("");

  const [categories, setCategories] = useState([
    {
      id: "1",
      color: "red",
      name: "Hello",
    },
    {
      id: "2",
      color: "blue",
      name: "sbkvbvkbkwbv",
    },
  ]);

  const onSelectColor = (hex: string) => {
    setSelectedColor(hex);
  };

  const createCategory = () => {
    if (newName.length === 0) {
      return;
    }
    setCategories([
      ...categories,
      {
        id: Math.random().toString(),
        color: selectedColor,
        name: newName,
      },
    ]);

    setNewName("");
    setSelectedColor(theme.colors.primary);
  };

  const deleteCategory = (id: any) => {
    setCategories(categories.filter((item) => item.id !== id));
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={100}
        style={{
          margin: 16,
          flex: 1,
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              borderRadius: 11,
              overflow: "hidden",
            }}
          >
            {categories.map(({ id, color, name }) => (
              <Swipeable
                key={id}
                renderRightActions={() => {
                  return (
                    <View
                      style={{
                        backgroundColor: theme.colors.error,
                        width: 75,
                      }}
                    >
                      <RectButton
                        style={{
                          flex: 1,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onPress={() => deleteCategory(id)}
                      >
                        <MaterialIcons name="delete" size={24} color="white" />
                      </RectButton>
                    </View>
                  );
                }}
              >
                <CategoryRow color={color} name={name} />
              </Swipeable>
            ))}
          </View>
        </ScrollView>

        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            paddingVertical: 8,
          }}
        >
          <TouchableOpacity
            onPress={() => setShowColorPicker(!showColorPicker)}
          >
            <View
              style={{
                backgroundColor: selectedColor,
                width: 32,
                height: 32,
                borderRadius: 16,
                borderWidth: 3,
                borderColor: "white",
              }}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Category name"
            placeholderTextColor={theme.colors.textSecondary}
            onChange={(event) => setNewName(event.nativeEvent.text)}
            value={newName}
            style={{
              color: "white",
              height: 40,
              borderColor: theme.colors.border,
              borderWidth: 1,
              flex: 1,
              borderRadius: 8,
              paddingLeft: 8,
              marginLeft: 16,
            }}
          />
          <TouchableOpacity
            onPress={createCategory}
            style={{
              padding: 12,
            }}
          >
            <FontAwesome name="send" size={24} color={theme.colors.primary} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <Modal
        transparent
        visible={showColorPicker}
        animationType="slide"
        onRequestClose={() => setShowColorPicker(false)}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 24,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              padding: 24,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: theme.colors.card,
              overflow: "hidden",
              borderRadius: 12,
            }}
          >
            <ColorPicker
              hideSliders
              color={selectedColor}
              onColorChange={(color) => onSelectColor(fromHsv(color))}
              style={{ width: "100%", height: 300 }}
            />
            <Button onPress={() => setShowColorPicker(false)} title="Select" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Categories;

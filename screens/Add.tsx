import {
  InputAccessoryView,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState, useRef, useMemo } from "react";
import ListItem from "../components/ListItem";
import { theme } from "../theme";
import { Recurrence } from "../types/recurrence";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

export const Add = () => {
  const sheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

  const [recurrence, setRecurrence] = useState(Recurrence.None);
  const [amount, setAmount] = useState("");
  const [sheetView, setSheetView] = useState<"recurrence" | "category">(
    "recurrence"
  );
  const [date, setDate] = useState(new Date());
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("");

  const selectRecurrence = (selectedRecurrence: string) => {
    setRecurrence(selectedRecurrence as Recurrence);
    sheetRef.current?.close();
  };

  return (
    <>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={112}
        style={{ margin: 16, flex: 1, alignItems: "center" }}
      >
        <View
          style={{
            borderRadius: 11,
            overflow: "hidden",
            width: "100%",
          }}
        >
          <ListItem
            label="Amount"
            detail={
              <TextInput
                placeholder="Amount"
                onChangeText={(text: string) => {
                  setAmount(text);
                }}
                value={amount}
                textAlign="right"
                keyboardType="numeric"
                inputAccessoryViewID="dismissKeyboard"
                style={{
                  height: 40,
                  color: "white",
                  flex: 1,
                  borderRadius: 8,
                  paddingLeft: 8,
                  fontSize: 16,
                }}
              />
            }
          />

          <ListItem
            label="Recurrence"
            detail={
              <TouchableOpacity
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  setSheetView("recurrence");
                  sheetRef.current?.snapToIndex(1);
                }}
              >
                <Text
                  style={{
                    color: theme.colors.primary,
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  {recurrence}
                </Text>
              </TouchableOpacity>
            }
          />
          {/* <ListItem
            label="Date"
            detail={
              Platform.OS === "ios" && (
                <DateTimePicker
                  // value={date}
                  mode={"date"}
                  is24Hour={true}
                  themeVariant="dark"
                  maximumDate={new Date()}
                  minimumDate={
                    new Date(
                      new Date().getFullYear() - 1,
                      new Date().getMonth(),
                      new Date().getDate()
                    )
                  }
                  // onChange={(event, newDate) => setDate(newDate)}
                />
              )
            }
          /> */}

          <ListItem
            label="Note"
            detail={
              <TextInput
                placeholder="Note"
                onChangeText={(text: string) => setNote(text)}
                value={note}
                textAlign="right"
                inputAccessoryViewID="dismissKeyboard"
                style={{
                  height: 40,
                  color: "white",
                  flex: 1,
                  borderRadius: 8,
                  paddingLeft: 8,
                  fontSize: 16,
                }}
              />
            }
          />

          <ListItem
            label="Category"
            detail={
              <TouchableOpacity
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-end",
                }}
                onPress={() => {
                  setSheetView("category");
                  sheetRef.current?.snapToIndex(1);
                }}
              >
                <Text
                  style={{
                    color: "white" || "category?.color",
                    textTransform: "capitalize",
                    fontSize: 16,
                  }}
                >
                  {"category?.name"}
                </Text>
              </TouchableOpacity>
            }
          />
        </View>
      </KeyboardAvoidingView>
      <BottomSheet
        ref={sheetRef}
        index={-1}
        handleStyle={{
          backgroundColor: theme.colors.card,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        handleIndicatorStyle={{ backgroundColor: "#FFFFFF55" }}
        enablePanDownToClose
        snapPoints={snapPoints}
      >
        {sheetView === "recurrence" && (
          <BottomSheetFlatList
            data={Object.keys(Recurrence)}
            keyExtractor={(i) => i}
            renderItem={(item) => (
              <TouchableHighlight
                style={{ paddingHorizontal: 18, paddingVertical: 12 }}
                onPress={() => selectRecurrence(item.item)}
              >
                <Text style={{ color: "white", fontSize: 18 }}>
                  {item.item}
                </Text>
              </TouchableHighlight>
            )}
            style={{ backgroundColor: theme.colors.card }}
          />
        )}
        {/* {sheetView === 'category' && (
          <BottomSheetFlatList
            data={categories[0]?.isValid() ? categories : []}
            keyExtractor={({ _id }) => _id.toHexString()}
            renderItem={({ item }) => (
              <TouchableHighlight
                style={{ paddingHorizontal: 18, paddingVertical: 12 }}
                onPress={() => selectCategory(item)}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: item.color,
                      width: 12,
                      height: 12,
                      borderRadius: 6,
                    }}
                  />
                  <Text
                    style={{ color: 'white', fontSize: 18, marginLeft: 12 }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableHighlight>
            )}
            style={{ backgroundColor: theme.colors.card }}
          />
        )} */}
      </BottomSheet>
      <InputAccessoryView nativeID='dismissKeyboard'>
        <View
          style={{
            height: 44,
            display: 'flex',
            justifyContent: 'center',
            paddingHorizontal: 16,
            alignItems: 'flex-end',
            backgroundColor: theme.colors.card,
            borderTopColor: theme.colors.border,
            borderTopWidth: 1,
          }}
        >
          <TouchableOpacity onPress={() => Keyboard.dismiss()}>
            <MaterialIcons
              name='keyboard-hide'
              size={28}
              style={{ color: theme.colors.primary }}
            />
          </TouchableOpacity>
        </View>
      </InputAccessoryView>
    </>
  );
};

export default Add;

const styles = StyleSheet.create({});

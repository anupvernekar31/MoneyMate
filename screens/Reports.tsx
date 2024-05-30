import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import React, { useRef, useState } from "react";
import { Recurrence } from "../types/recurrence";
import { ExpensesList } from "../components/ExpensesList";
import { theme } from "../theme";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import WeeklyChart from "../components/charts/WeeklyChart";
import { YearlyChart } from "../components/charts/YearlyChart";
import { MonthlyChart } from "../components/charts/MonthlyChart";

const data = [
  {
    day: "Today",
    expenses: [
      {
        id: "5",
        amount: 222,
        recurrence: Recurrence.Daily,
        date: new Date(),
        note: "Hello",
        category: {
          id: "112",
          color: "green",
          name: "chocolate",
        },
      },
      {
        id: "567",
        amount: 222,
        recurrence: Recurrence.Daily,
        date: new Date(),
        note: "Hello",
        category: {
          id: "112",
          color: "green",
          name: "chocolate",
        },
      },
    ],
    total: 500,
  },
  {
    day: "Yesterday",
    expenses: [
      {
        id: "1",
        amount: 234,
        recurrence: Recurrence.Daily,
        date: new Date(),
        note: "sbvksbvkjsbvslv",
        category: {
          id: "45",
          color: "red",
          name: "books",
        },
      },
    ],
    total: 500,
  },
];

const expenses = [
  {
    id: "166",
    amount: 100,
    recurrence: Recurrence.Daily,
    date: new Date(),
    note: "sbvksbvkjsbvslv",
    category: {
      id: "45",
      color: "red",
      name: "books",
    },
  },
  {
    id: "2",
    amount: 600,
    recurrence: Recurrence.Daily,
    date: new Date("2024-05-30"),
    note: "dqwd",
    category: {
      id: "577",
      color: "red",
      name: "books",
    },
  },

  {
    id: "3",
    amount: 900,
    recurrence: Recurrence.Daily,
    date: new Date("2024-05-29"),
    note: "dqwd",
    category: {
      id: "33",
      color: "red",
      name: "books",
    },
  },
];

export const Reports = ({ reportsSheetRef }) => {
  const [recurrence, setRecurrence] = useState<Recurrence>(Recurrence.Weekly);

  const selectRecurrence = (selectedRecurrence: Recurrence) => {
    // dispatch({
    //   type: PagerReducerActionTypes.SET_RECURRENCE,
    //   payload: selectedRecurrence,
    // });
    setRecurrence(selectedRecurrence);
    reportsSheetRef.current.close();
    // listRef.current.scrollToIndex({ index: 0 });
  };

  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          overflow: "scroll",
          paddingHorizontal: 16,
          width: "100%",
          paddingTop: 16,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ color: theme.colors.textPrimary, fontSize: 20 }}>
              {"12 Sep - 18 Sep"}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  color: theme.colors.textSecondary,
                  fontSize: 16,
                }}
              >
                ₹
              </Text>
              <Text
                style={{
                  color: theme.colors.textPrimary,
                  fontSize: 17,
                  fontWeight: "600",
                  marginLeft: 4,
                }}
              >
                {"44"}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ color: theme.colors.textPrimary, fontSize: 20 }}>
              Avg/Day
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginTop: 8,
              }}
            >
              <Text
                style={{
                  color: theme.colors.textSecondary,
                  fontSize: 16,
                }}
              >
                ₹
              </Text>
              <Text
                style={{
                  color: theme.colors.textPrimary,
                  fontSize: 17,
                  fontWeight: "600",
                  marginLeft: 4,
                }}
              >
                {"6767"}
              </Text>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 16 }}>
          {recurrence === Recurrence.Weekly && (
            <WeeklyChart expenses={expenses} />
          )}
          {recurrence === Recurrence.Monthly && (
            <MonthlyChart date={new Date()} expenses={expenses} />
          )}
          {recurrence === Recurrence.Yearly && (
            <YearlyChart expenses={expenses} />
          )}
        </View>

        <ExpensesList groups={data} />
      </View>

      <BottomSheet
        ref={reportsSheetRef}
        index={-1}
        handleStyle={{
          backgroundColor: theme.colors.card,
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
        }}
        handleIndicatorStyle={{ backgroundColor: "#FFFFFF55" }}
        enablePanDownToClose
        snapPoints={["25%", "50%"]}
      >
        <BottomSheetFlatList
          style={{ backgroundColor: theme.colors.card }}
          data={[Recurrence.Weekly, Recurrence.Monthly, Recurrence.Yearly]}
          renderItem={({ item }) => (
            <TouchableHighlight
              style={{ paddingHorizontal: 18, paddingVertical: 12 }}
              onPress={() => selectRecurrence(item)}
            >
              <Text
                style={{
                  fontSize: 18,
                  textTransform: "capitalize",
                  color: recurrence === item ? theme.colors.primary : "white",
                }}
              >
                {item}
              </Text>
            </TouchableHighlight>
          )}
        />
      </BottomSheet>
    </>
  );
};

export default Reports;

const styles = StyleSheet.create({});

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

type TabBarIconProps = {
  color: string;
  size: number;
  type: "expenses" | "reports" | "add" | "settings";
};

export const TabBarIcon = ({ type, color, size }: TabBarIconProps) => {
  switch (type) {
    case "expenses":
      return (
        <MaterialCommunityIcons
          name="tray-arrow-up"
          size={size}
          color={color}
        />
      );

    case "reports":
      return <Foundation name="graph-bar" size={24} color={color} />;

    case "add":
      return <Feather name="plus" size={24} color={color} />;

    case "settings":
      return <Ionicons name="settings" size={22} color={color} />;
  }
};

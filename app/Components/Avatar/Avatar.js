import React from "react";
import { View } from "react-native";
import styles from "./Avatar.style";
import {
  FontAwesome,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
export default function Avatar({ iconName }) {
  const RenderIcon = () => {
    switch (iconName) {
      case "Mail":
        return <Feather name="mail" color="white" size={30} />;

      case "Bell":
        return <Feather name="bell" color="white" size={30} />;

      case "FAQ":
        return <Feather name="help-circle" color="white" size={40} />;

      case "Shop":
        return <Fontisto name="shopping-store" color={COLORS.primary} size={30} />;

      case "LogOut":
        return (
          <MaterialCommunityIcons
            name="logout"
            color={COLORS.primary}
            size={40}
          />
        );
      default:
        return <FontAwesome name="user" color={COLORS.primary} size={30} />;
    }
  };
  return (
    <View style={styles.container}>
      <RenderIcon />
    </View>
  );
}

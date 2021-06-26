import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./AddProductStep.style";
import { MaterialCommunityIcons, MaterialIcons } from "react-native-vector-icons";
import TextView from "../TextView";
import { COLORS } from "../../GlobalStyle";
export default function AddProductStep({ nbImages, onclick, title, iconName, categorySelected }) {
  const numberImages = nbImages ? nbImages : 0;
  const category = categorySelected ? categorySelected : "----";

  const RenderIcon = () => {
    switch (iconName) {
      case "camera":
        return <MaterialCommunityIcons name="camera-plus" size={30} color={COLORS.primary}/>;

      case "list":
        return <MaterialCommunityIcons name="format-list-bulleted" size={30} color={COLORS.primary}/>;

      default:
        return <MaterialCommunityIcons name="camera-plus" size={30} color={COLORS.primary}/>;
    }
  };

  return (
    <TouchableOpacity onPress={onclick} style={styles.container}>
      <View style={styles.iconContainer}>
        <RenderIcon />
      </View>

      <View style={styles.infoContainer}>
        <TextView fontSize={14} fontFamily="Source-Regular">{title}</TextView>
        {iconName == "camera" && (
          <TextView fontSize={12} style={styles.subtext} fontFamily="Source-Regular">
            Vous aver choisi: {numberImages} images.
          </TextView>
        )}

        {iconName == "list" && (
          <TextView fontSize={11} style={[styles.subtext]} fontFamily="Source-Regular">
            {category}
          </TextView>
        )}
      </View>

      <View style={styles.buttonContainer}>
      <MaterialIcons name="arrow-forward-ios" color={COLORS.primary} size={30} />
      </View>
    </TouchableOpacity>
  );
}

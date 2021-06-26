import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CategoryItem.style";
import TextView from "../../Components/TextView/TextView";

export default function CategoryItem({ onClick, item }) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.item}>
      <TextView fontFamily="Source-Regular" fontSize={20}>
        {item}{" "}
      </TextView>
    </TouchableOpacity>
  );
}

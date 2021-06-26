import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./CategoryItem.style";
import TextView from "../../Components/TextView/TextView";

function CategoryItem({ onClick, item }) {
  return (
    <TouchableOpacity delayPressOut={0} onPress={onClick} style={styles.item}>
      <TextView fontFamily="Source-Regular" fontSize={20}>
        {item}{" "}
      </TextView>
    </TouchableOpacity>
  );
}

export default React.memo(CategoryItem)

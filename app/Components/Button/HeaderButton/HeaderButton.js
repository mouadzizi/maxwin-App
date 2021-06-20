import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./HeaderButton.style";
import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../../../GlobalStyle";
import TextView from "../../../Components/TextView/TextView";

export default function HeaderButton({ titleButton, onClick }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <TextView fontSize={15} style={styles.title}>
        {titleButton}
      </TextView>
      <Ionicons
        name="arrow-forward"
        color={COLORS.primary}
        size={19}
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
}

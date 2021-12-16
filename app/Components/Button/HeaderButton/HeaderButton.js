import React from "react";
import { TouchableOpacity} from "react-native-gesture-handler";
import {Text} from "react-native"
import styles from "./HeaderButton.style";
import { Ionicons } from "react-native-vector-icons";

export default function HeaderButton({ titleButton, onClick }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text fontSize={15} style={styles.title}>
        {titleButton}
      </Text>
      <Ionicons
        name="arrow-forward"
        color={"white"}
        size={19}
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
}

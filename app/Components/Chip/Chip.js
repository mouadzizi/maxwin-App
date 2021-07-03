import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Chip.style";
import TextView from '../TextView'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
export default function Chip({ title, onClick, active, iconName, style}) {
  return (
    <TouchableOpacity
    onPress={onClick}
    style={ active ? [styles.containerFill, style]: [styles.containerOutlined, style]}>
      <MaterialCommunityIcons name={iconName} color={COLORS.primary} size={25}/>
      <TextView fontFamily="Source-Regular" fontSize={17} style={{marginLeft : 10}}>{title}</TextView>
    </TouchableOpacity>
  );
}

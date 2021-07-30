import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Chip.style";
import TextView from "../TextView";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
export default function Chip({ title, onClick, iconName, style }) {
  const [active, setActive] = useState(false);
  const callBack = () => {
    setActive(!active);
    onClick(title, !active);
  };
  return (
    <TouchableOpacity
      onPress={callBack}
      style={
        active
          ? [styles.containerFill, style]
          : [styles.containerOutlined, style]
      }
    >
      <TextView
        fontFamily="Source-Regular"
        fontSize={17}
        style={{ marginLeft: 10, color: active ? "white" : COLORS.primary }}
      >
        {title}
      </TextView>
      <MaterialCommunityIcons
        name={iconName}
        color={active ? "white" : COLORS.primary}
        size={25}
      />
    </TouchableOpacity>
  );
}

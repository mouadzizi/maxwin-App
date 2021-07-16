import React from "react";
import { View, Text } from "react-native";
import styles from "./Equipement.style";
import { AntDesign } from "react-native-vector-icons";
import TextView from "../../../../Components/TextView";
import { COLORS } from "../../../../GlobalStyle";
export default function Equipement() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <AntDesign name="heart" size={40} color={COLORS.secondary} />
        <TextView
          fontFamily="Source-Regular"
          fontSize={17}
          style={styles.textInfo}
        >
          hello
        </TextView>
      </View>

      <View style={styles.row}>
        <AntDesign name="heart" size={40} color={COLORS.secondary} />
        <TextView
          fontFamily="Source-Regular"
          fontSize={17}
          style={styles.textInfo}
        >
          hello
        </TextView>
      </View>

      <View style={styles.row}>
        <AntDesign name="heart" size={40} color={COLORS.secondary} />
        <TextView
          fontFamily="Source-Regular"
          fontSize={17}
          style={styles.textInfo}
        >
          hello
        </TextView>
      </View>
    </View>
  );
}

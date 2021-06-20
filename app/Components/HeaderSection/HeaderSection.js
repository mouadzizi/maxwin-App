import React from "react";
import { View, Text } from "react-native";
import styles from "./HeaderSection.style";
import HeaderButton from "../Button/HeaderButton";
import TextView from "../../Components/TextView/TextView";
export default function headerSection({ title, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TextView fontSize={19} style={styles.title}>
          {title}
        </TextView>
      </View>

      <View style={styles.container2}>
        <HeaderButton
          titleButton="Voir tout"
          onClick={() => navigation.navigate("HomeSectionProductView")}
        />
      </View>
    </View>
  );
}

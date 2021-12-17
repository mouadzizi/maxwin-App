import React from "react";
import { View } from "react-native";
import styles from "./HeaderSection.style";
import HeaderButton from "../Button/HeaderButton";
import TextView from "../../Components/TextView/TextView";
export default function headerSection({ title, navigation, collection }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <TextView 
        fontSize={22}
        fontFamily= "Source-Regular"
        style={styles.title}>
          {title}
        </TextView>
      </View>

      <View style={styles.container2}>
        <HeaderButton
          titleButton="Voir tout"
          onClick={() => navigation.navigate("HomeSectionProductView",{collection: collection})}
        />
      </View>
    </View>
  );
}

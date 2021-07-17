import React from "react";
import { View, Text } from "react-native";
import styles from "./Skeleton.style";
import { EvilIcons } from "react-native-vector-icons";

export default function Skeleton() {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.containerSection1}>
        <View style={styles.title}></View>
      </View>
      <View style={styles.imageContainer}>
        <EvilIcons name="image" size={250} color="#eee" />
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.info}></View>
      </View>
    </View>
  );
}

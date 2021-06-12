import React from "react";
import styles from "./ProfileSeeAll.style";
import { MaterialIcons } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ProfileSeeAll({onClick}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <MaterialIcons name="arrow-forward-ios" color="white" size={30} />
    </TouchableOpacity>
  );
}

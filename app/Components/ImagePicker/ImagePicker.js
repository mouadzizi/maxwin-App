import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./ImagePicker.style";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Image } from "react-native";

export default function ImagePicker({ uri, onClick }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      {uri ? (
        <Image
        source={{ uri: uri}}
        style={styles.image}
      />
      ) : (
        <MaterialCommunityIcons name="camera-plus" size={65} />
      )}
    </TouchableOpacity>
  );
}

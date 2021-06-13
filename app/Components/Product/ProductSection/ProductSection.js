import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./ProductSection.style";
import TextView from '../../../Components/TextView/TextView'

export default function ProductSection({
  onClick,
  title,
  price,
  imageCover,
}) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onClick}>
      <View style={styles.containerImage}>
        <Image
          source={imageCover}
          resizeMode='cover'
          style={styles.image}
          PlaceholderContent={<ActivityIndicator color="white" size="large" />}
          placeholderStyle={{ backgroundColor: "#bbb" }}
        />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerTitle}>
          <TextView h3 s={styles.title}>{title}</TextView>
        </View>
        <View style={styles.containerPrice}>
          <TextView h2 bold s={styles.price}>{price}  </TextView>
          <TextView  h2 bold> DHS </TextView>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

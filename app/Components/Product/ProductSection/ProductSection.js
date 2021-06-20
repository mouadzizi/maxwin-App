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
          <TextView fontFamily="Source-Regular" fontSize={17} style={styles.title}>{title.substring(0, 15)}</TextView>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.DHS}> DHS </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

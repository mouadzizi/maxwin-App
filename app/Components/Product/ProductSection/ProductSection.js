import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from 'react-native-elements';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import styles from "./ProductSection.style";

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
          PlaceholderContent={<ActivityIndicator color="white" size="large"/>}
          placeholderStyle={{backgroundColor: "#bbb"}}
          />
      </View>
      <View style={styles.containerInfo}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.price}>{price} <Text style={styles.strong}> DHS </Text>  </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

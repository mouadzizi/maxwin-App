import React from "react";
import { View, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ImagePreview.style";

export default function ImagePreview({ route }) {
  const images = route.params?.images;

  return (
    <View
      style={styles.container}
    >
      <Swiper activeDotColor="#FF6347">
        {images.map((item, index) => (
          <View key={index}>
            <Image
              key={index}
              source={{ uri: item }}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}

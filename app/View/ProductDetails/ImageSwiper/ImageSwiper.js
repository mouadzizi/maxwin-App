import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ImageSwiper.style";
export default function ImageSwiper({ images, onClick }) {
  return (
    <Swiper activeDotColor="#FF6347" style={styles.imageContainer}>
      {images.map((item, index) => (
        <TouchableWithoutFeedback key={index} onPress={onClick}>
          <Image
            key={index}
            source={{ uri: item }}
            resizeMode="cover"
            style={styles.imageSlider}
          />
        </TouchableWithoutFeedback>
      ))}
    </Swiper>
  );
}

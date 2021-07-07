import React from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ImageSwiper.style";
export default function ImageSwiper({images}) {
  return (
    <Swiper activeDotColor="#FF6347" style={styles.imageContainer}>
      <TouchableWithoutFeedback>
        <Image
          source={images[0].url}
          resizeMode="cover"
          style={styles.imageSlider}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <Image
          source={images[1].url}
          resizeMode="cover"
          style={styles.imageSlider}
        />
      </TouchableWithoutFeedback>

    </Swiper>
  );
}

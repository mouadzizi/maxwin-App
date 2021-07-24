import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, Image, Alert } from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ImageSwiper.style";
import { COLORS } from "../../../GlobalStyle";

export default function ImageSwiper({ images, onClick}) {
  return (
    <>
      <Swiper activeDotColor={COLORS.secondary} style={styles.imageContainer}>
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
    </>
  );
}

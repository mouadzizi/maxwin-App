import React from "react";
import {
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  Image,
  View,
} from "react-native";
import Swiper from "react-native-swiper";
import styles from "./ProductDetails.style";

export default function ProductDetails() {
  return (
    <ScrollView>
        <Swiper 
        activeDotColor="#FF6347"
        style={styles.imageContainer} >
        <TouchableWithoutFeedback>
            <Image
              source={require("../../../assets/ProductTest/product4.jpeg")}
              resizeMode="cover"
              style={styles.imageSlider}
            />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
            <Image
              source={require("../../../assets/ProductTest/product6.jpeg")}
              resizeMode="cover"
              style={styles.imageSlider}
            />
      </TouchableWithoutFeedback>
        </Swiper>
    </ScrollView>
  );
}

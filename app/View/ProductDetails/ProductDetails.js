import React from "react";
import { View, Text } from "react-native";
import Swiper from "react-native-swiper";

export default function ProductDetails() {
  return (
    <View>
      <Swiper activeDotColor="#FF6347">
        <Text>hey 1</Text>
        <Text>hey 2</Text>
        <Text>hey 3</Text>
        <Text>hey 4</Text>
      </Swiper>
    </View>
  );
}

import React from "react";
import { View, Image, Text } from "react-native";
import { FAB } from "react-native-elements";
import Swiper from "react-native-swiper";
import { COLORS } from "../../GlobalStyle";
import styles from "./ImagePreview.style";
import { Ionicons } from "react-native-vector-icons";

export default function ImagePreview({ route, navigation }) {
  const images = route.params?.images;

  return (
    <View style={styles.container}>
      <FAB
        icon={<Ionicons name="arrow-back" size={25} color="white" />}
        color="rgba(255, 255, 255, 0.3)"
        style={{ top: 30, left: 20, position: "absolute", zIndex: 1 }}
        onPress={() => navigation.goBack()}
      />
      <Swiper activeDotColor={COLORS.third}>
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

import React, { useState } from "react";
import { TouchableWithoutFeedback, Image } from "react-native";
import { FAB } from "react-native-elements";
import { FontAwesome, AntDesign } from "react-native-vector-icons";
import Swiper from "react-native-swiper";
import styles from "./ImageSwiper.style";
import { COLORS } from "../../../GlobalStyle";

export default function ImageSwiper({ images, onClick }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

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
      <FAB
      title="Like"
        icon={
          isLiked ? (
            <AntDesign name="like1" size={23} color={COLORS.secondary} />
          ) : (
            <AntDesign name="like2" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 470, right: 20, zIndex: 1 ,position: "absolute" }}
        onPress={() => setIsLiked(!isLiked)}
      />
      <FAB
        style={{ top: 250, right: 20, position: "absolute" }}
        color={COLORS.primary}
        icon={<FontAwesome name="whatsapp" size={28} color="white" />}
        onPress={() => alert("Whats app")}
      />
      <FAB
        icon={<AntDesign name="sharealt" size={25} color="white" />}
        color={COLORS.primary}
        style={{ top: 310, right: 20, position: "absolute" }}
        onPress={() => alert("Partagé")}
      />
      <FAB
        icon={
          isFavorite ? (
            <AntDesign name="heart" size={23} color={COLORS.secondary} />
          ) : (
            <AntDesign name="hearto" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 370, right: 20, position: "absolute" }}
        onPress={() => setIsFavorite(!isFavorite)}
      />
    </>
  );
}

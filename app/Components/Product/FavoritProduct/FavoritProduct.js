import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { EvilIcons } from "react-native-vector-icons";

import styles from "./FavoritProduct.style";

export default function FavoritProduct({ fav, onClick, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.imageContainer}
        onPress={() =>
          navigation.navigate("ProductDetails", { product: fav.product })
        }
      >
        <Image
          source={{ uri: fav.image }}
          style={styles.image}
          resizeMode="cover"
          PlaceholderContent={
            <ActivityIndicator size="large" color={"white"} />
          }
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.detailsContainer} onPress={onClick}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{fav.title}</Text>
          <Text style={styles.price}>
            {fav.price}
            <Text> Dhs</Text>
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <EvilIcons name="trash" color={"white"} size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

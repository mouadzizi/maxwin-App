import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";

import { Ionicons } from "react-native-vector-icons";
import { COLORS } from "../../../GlobalStyle";
import styles from "./FavoritProduct.style";

export default function FavoritProduct({ fav, onClick, navigation }) {
  console.log(fav);
  return (
    <LinearGradient style={styles.container} colors={["#FFF", "#FFF", "#FFF"]}>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: fav.images }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator size="large" color={"red"} />}
        />
      </View>
      <TouchableOpacity style={styles.containerInfo} onPress={()=> navigation.navigate("ProductDetails", { product: fav })}>
        <Text style={styles.info}>
          {" "}
          titre : <Text style={styles.value}> {fav.title} </Text>{" "}
        </Text>
        <Text style={styles.info}>
          {" "}
          prix : <Text style={styles.value}> {fav.price} </Text>{" "}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerBin} onPress={onClick}>
        <Ionicons
          name="ios-trash-bin-outline"
          size={50}
          style={{ padding: 10 }}
          color={COLORS.primary}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
}

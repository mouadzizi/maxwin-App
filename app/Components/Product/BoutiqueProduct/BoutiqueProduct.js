import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {MaterialIcons} from 'react-native-vector-icons'
import { COLORS } from "../../../GlobalStyle";
import styles from "./BoutiqueProduct.style";

export default function BoutiqueProduct({ image, title, onClick, price }) {
  const res = require("../../../../assets/ProductTest/product2.jpeg");
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <View style={styles.imageContainer}>
        <Image
          source={{uri:image}}
          style={styles.image}
          resizeMode="cover"
          PlaceholderContent={
            <ActivityIndicator size="large" color={"white"} />
          }
        />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>
            {price}<Text> Dhs</Text>
          </Text>
        </View>
        <View
        style={styles.iconContainer}>
            <MaterialIcons name="arrow-forward-ios" color={COLORS.third} size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

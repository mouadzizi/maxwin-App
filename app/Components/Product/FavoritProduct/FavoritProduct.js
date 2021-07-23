import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { Image } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import {Ionicons} from 'react-native-vector-icons'
import { COLORS } from "../../../GlobalStyle";
import styles from "./FavoritProduct.style";
export default function FavoritProduct({fav,onClick}) {
  
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image
          source={{ uri: fav.image }}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator size="large" color={"red"} />}
        />
      </View>
      <View style={styles.containerInfo}>
          <Text style={styles.info}> {fav.title} </Text>
          <Text style={styles.info}> {fav.price}  </Text>
          <Text style={styles.info}> {fav.category} </Text>
          <Text style={styles.info}> Product Title </Text>
      </View>
      <TouchableOpacity 
      style={styles.containerBin}
      onPress={onClick}>
          <Ionicons name="ios-trash-bin-outline" size={50} style={{padding : 10}} color={COLORS.primary}/>
      </TouchableOpacity>
    </View>
  );
}

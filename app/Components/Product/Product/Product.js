import React, { useState } from "react";
import { Image } from "react-native-elements";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./Product.style";
import TextView from "../../../Components/TextView";

import { COLORS } from "../../../GlobalStyle";
import { AntDesign } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Product({
  numberImages,
  images,
  title,
  location,
  nbLikes,
  price,
  onClick,
  quartier,
}) {
  return (
    <View style={styles.containerGlobal} onPress={onClick}>
      <TouchableOpacity onPress={onClick}>
        <View style={styles.containerSection1}>
          <>
            <TextView
              fontColor={COLORS.primary}
              fontSize={16}
              style={styles.location}
              fontFamily="Source-Regular"
            >
              {location}, {quartier}
            </TextView>
          </>
          <View style={styles.containerLikes}>
            {nbLikes === 0 ? (
              <>
                <AntDesign name="like2" color={COLORS.primary} size={25} />
                <Text style={styles.likeNumber}>{nbLikes || 0}</Text>
              </>
            ) : (
              <>
                <AntDesign name="like1" color={COLORS.primary} size={25} />
                <Text style={styles.likeNumber}>{nbLikes}</Text>
              </>
            )}
          </View>
        </View>

        {numberImages === 1 && (
          <View style={styles.imageContainer}>
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: images[0] }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
                placeholderStyle={{ backgroundColor: "#bbb" }}
                PlaceholderContent={
                  <ActivityIndicator color="white" size="large" />
                }
              />
            </View>
          </View>
        )}

        {numberImages === 2 && (
          <View style={styles.imageContainer}>
            <View style={{ flex: 1, margin: 1 }}>
              <Image
                source={{ uri: images[0] }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
                placeholderStyle={{ backgroundColor: "#bbb" }}
                PlaceholderContent={
                  <ActivityIndicator color="white" size="large" />
                }
              />
            </View>

            <View style={{ flex: 1, margin: 1 }}>
              <Image
                source={{ uri: images[1] }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
                placeholderStyle={{ backgroundColor: "#bbb" }}
                PlaceholderContent={
                  <ActivityIndicator color="white" size="large" />
                }
              />
            </View>
          </View>
        )}

        {numberImages > 2 && (
          <View style={styles.imageContainer}>
            <View style={{ flex: 2, margin: 1 }}>
              <Image
                source={{ uri: images[0] }}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
                placeholderStyle={{ backgroundColor: "#bbb" }}
                PlaceholderContent={
                  <ActivityIndicator color="white" size="large" />
                }
              />
            </View>

            <View style={{ flex: 1, margin: 1 }}>
              <View style={{ flex: 1, margin: 1 }}>
                <Image
                  source={{ uri: images[1] }}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                  placeholderStyle={{ backgroundColor: "#bbb" }}
                  PlaceholderContent={
                    <ActivityIndicator color="white" size="large" />
                  }
                />
              </View>

              <View style={{ flex: 1, margin: 1 }}>
                <Image
                  source={{ uri: images[2] }}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                  placeholderStyle={{ backgroundColor: "#bbb" }}
                  PlaceholderContent={
                    <ActivityIndicator color="white" size="large" />
                  }
                />
              </View>
            </View>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.informationContainer}>
        <View style={styles.informationContainerSection1}>
          <TextView
            fontColor={COLORS.primary}
            fontSize={16}
            fontFamily="Source-Regular"
          >
            {title}
          </TextView>

          <Text style={styles.priceText}>{price} MAD</Text>
        </View>

        <View style={styles.informationContainerSection2}></View>
      </View>
    </View>
  );
}

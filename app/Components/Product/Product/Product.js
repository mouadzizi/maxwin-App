import React from "react";
import { Image } from "react-native";
import { View, Text } from "react-native";
import styles from "./Product.style";
import TextView from "../../../Components/TextView";
import ButtonOutlined from "../../../Components/Button/ButtonOutlined";

import { COLORS } from "../../../GlobalStyle";
import { AntDesign } from "react-native-vector-icons";

export default function Product({
  numberImages,
  images,
  title,
  location,
  nbLikes,
  price,
}) {
  return (
    <View style={styles.containerGlobal}>
      <View style={styles.containerSection1}>
        <>
          <TextView
            fontColor={COLORS.primary}
            fontSize={14}
            style={styles.location}
          >
            {location}
          </TextView>
        </>
        <View style={styles.containerLikes}>
          {nbLikes > 0 && (
            <>
              <AntDesign name="like1" color={COLORS.primary} size={25} />
              <Text style={styles.likeNumber}>{nbLikes}</Text>
            </>
          )}
        </View>
      </View>

      {numberImages === 1 ? (
        <View style={styles.imageContainer}>
          <View style={{ flex: 1 }}>
            <Image
              source={require("../../../../assets/ProductTest/product8.jpeg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>
        </View>
      ) : null}

      {numberImages === 2 ? (
        <View style={styles.imageContainer}>
          <View style={{ flex: 1, margin: 1 }}>
            <Image
              source={require("../../../../assets/ProductTest/product9.jpeg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>

          <View style={{ flex: 1, margin: 1 }}>
            <Image
              source={require("../../../../assets/ProductTest/product11.jpeg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="stretch"
            />
          </View>
        </View>
      ) : null}

      {numberImages > 2 ? (
        <View style={styles.imageContainer}>
          <View style={{ flex: 1, margin: 1 }}>
            <Image
              source={require("../../../../assets/ProductTest/product4.jpeg")}
              style={{ height: "100%", width: "100%" }}
              resizeMode="cover"
            />
          </View>

          <View style={{ flex: 1, margin: 1 }}>
            <View style={{ flex: 1, margin: 1 }}>
              <Image
                source={require("../../../../assets/ProductTest/product6.jpeg")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="stretch"
              />
            </View>

            <View style={{ flex: 1, margin: 1 }}>
              <Image
                source={require("../../../../assets/ProductTest/Product1.jpeg")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="stretch"
              />
            </View>
          </View>
        </View>
      ) : null}

      <View style={styles.informationContainer}>
        <View style={styles.informationContainerSection1}>
          <TextView
            fontColor={COLORS.primary}
            fontSize={14}
            fontFamily="Nova-Regular"
          >
            {title}
          </TextView>

          <Text style={styles.priceText}>{price} MAD</Text>
        </View>

        <View style={styles.informationContainerSection2}>
          <ButtonOutlined
            style={{ width: 100 }}
            title="Voir details"
            onClick={() => alert("page details")}
          />
        </View>
      </View>
    </View>
  );
}

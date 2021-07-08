import React from "react";
import { View } from "react-native";
import TextView from "../../../Components/TextView";
import Divider from "../../../Components/Divider";
import Row from "./InfoRow";
import RowAccessory from "./accessoryRow";

import styles from "./ProductInformation.style";
import { COLORS } from "../../../GlobalStyle";
import { Entypo, AntDesign } from "react-native-vector-icons";
export default function ProductInformation({
  title,
  price,
  negotiable,
  goodState,
  description,
  category,
  product,
}) {
  return (
    <>
      <View style={styles.container}>
        <TextView fontFamily="Source-Regular" fontSize={23}>
          {title}Honda Jazz 2015
        </TextView>
        <Divider width="95%" />
        <TextView
          fontFamily="Source-Regular"
          fontSize={23}
          style={styles.headerSt}
        >
          {price}13.000 DHS
        </TextView>
      </View>

      <View style={styles.container}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={20}
          style={styles.headerSt}
        >
          Services Disponibles
        </TextView>
        <Divider width="95%" />
        {negotiable ||
          (true && (
            <View style={styles.row}>
              <Entypo name="price-ribbon" color={COLORS.primary} size={35} />
              <TextView
                fontFamily="Source-Regular"
                fontSize={20}
                style={[styles.textSt, { marginLeft: 5 }]}
              >
                Prix négociable
              </TextView>
            </View>
          ))}

        {goodState ||
          (true && (
            <View style={styles.row}>
              <AntDesign name="like2" color={COLORS.primary} size={30} />
              <TextView
                fontFamily="Source-Regular"
                fontSize={20}
                style={[styles.textSt, { marginLeft: 10 }]}
              >
                En bonne état
              </TextView>
            </View>
          ))}
      </View>

      <View style={styles.container}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={20}
          style={styles.headerSt}
        >
          Description
        </TextView>
        <Divider width="95%" />

        <TextView
          fontFamily="Source-Regular"
          fontSize={15}
          style={styles.textSt}
        >
          {description}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially
        </TextView>
      </View>

      <View style={styles.container}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={20}
          style={styles.headerSt}
        >
          Description
        </TextView>
        <Divider width="95%" />
        <Row detail="Section" value="VIHUCULE" />
        <Row detail="Catégorie" value="Voiture" />
        <Row detail="Ville" value="Tanger" />
        <Row detail="Etat de produit" value="Neuf" />
        <Row detail="Marque de Voiture" value="Ford" />
        <Row detail="Année de fabrication" value="2018" />
        <Row detail="Kilométrage" value="210.000 Km" />
        <Row detail="Boîte de vitesse" value="210.000 Km" />
        <Row detail="Kilométrage" value="Automatic" />
        <Row detail="Puissance Fiscale" value="11 CH" />
        <Row detail="Ram" value="4 Gb" />
        <Row detail="Rom" value="128 Gb" />
        <Row detail="Superficiel" value="120 m" />
        <Row detail="nombre de piece" value="4 personnes" />
      </View>

      <View style={styles.container}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={20}
          style={styles.headerSt}
        >
          accessory
        </TextView>
        <Divider width="95%"/>
        <RowAccessory value="test" />

      </View>
    </>
  );
}

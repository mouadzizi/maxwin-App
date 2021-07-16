import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../GlobalStyle";
import { Entypo, AntDesign, Feather, FontAwesome5 } from "react-native-vector-icons";

import TextView from "../../../Components/TextView";
import Divider from "../../../Components/Divider";
import Row from "./InfoRow";
import RowAccessory from "./accessoryRow";
import styles from "./ProductInformation.style";

export default function ProductInformation({ negotiable, goodState, product }) {
  return (
    <>
      <View style={styles.container}>
        <TextView fontFamily="Source-Regular" fontSize={23}>
          {product.title}
        </TextView>
        <Divider width="95%" />
        <TextView
          fontFamily="Source-Regular"
          fontSize={23}
          style={styles.headerSt}
        >
          {product.price} DH
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

        {goodState ||
          (true && (
            <View style={styles.row}>
              <Feather name="truck" color={COLORS.primary} size={30} />
              <TextView
                fontFamily="Source-Regular"
                fontSize={20}
                style={[styles.textSt, { marginLeft: 10 }]}
              >
                Livraison
              </TextView>
            </View>
          ))}

        {goodState ||
          (true && (
            <View style={styles.row}>
              <FontAwesome5 name="handshake" color={COLORS.primary} size={25} />
              <TextView
                fontFamily="Source-Regular"
                fontSize={20}
                style={[styles.textSt, { marginLeft: 10 }]}
              >Paiement en livraison
              </TextView>
            </View>
          ))}
      </View>

      {product.description && (
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
            {product.description}
          </TextView>
        </View>
      )}

      <View style={styles.container}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={20}
          style={styles.headerSt}
        >
          Description
        </TextView>
        <Divider width="95%" />
        <Row detail="Section" value={product.category[0]} />
        <Row detail="Catégorie" value={product.category[1]} />
        <Row detail="Ville" value={product.city} />
        {product.etat && <Row detail="Etat de produit" value={product.etat} />}

        {product.marqueVoiture && (
          <Row detail="Marque de Voiture" value={product.marqueVoiture} />
        )}

        {product.anneeFabrication && (
          <Row detail="Année de Fabrication" value={product.anneeFabrication} />
        )}

        {product.kilometrage && (
          <Row detail="Kilometrage" value={product.kilometrage + " Km"} />
        )}
        {product.transaction && (
          <Row detail="Transaction" value={product.transaction} />
        )}

        {product.puissanceFiscale && (
          <Row detail="Puissance Fiscale" value={product.puissanceFiscale} />
        )}
      </View>

      {product.chips[0] && (
        <View style={styles.container}>
          <TextView
            fontFamily="Source-Regular"
            fontSize={20}
            style={styles.headerSt}
          >
            Accessory
          </TextView>
          <Divider width="95%" />
          <RowAccessory value={product.chips} />
        </View>
      )}
    </>
  );
}

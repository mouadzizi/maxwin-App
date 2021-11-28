import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../GlobalStyle";
import { AntDesign, Feather } from "react-native-vector-icons";

import TextView from "../../../Components/TextView";
import Divider from "../../../Components/Divider";
import CashOnDelivery from "../../../icons/CashOnDelivery";
import PriceTag from "../../../icons/PriceTag";
import Row from "./InfoRow";

import Equipement from "./Equipement";

import styles from "./ProductInformation.style";

export default function ProductInformation({ product }) {
  return (
    <>
      <View style={styles.container}>
        <TextView fontFamily="Source-Regular" fontSize={23}>
          {product.title || "" } 
        </TextView>
        <Divider width="95%" />
        <TextView
          fontFamily="Source-Regular"
          fontSize={23}
          style={styles.headerSt}
        >
          {product.price || "ERR"} DH
        </TextView>
      </View>

      {(product.negotiable ||
        product.goodState ||
        product.cashOnDelivery ||
        product.delivery) && (
        <View style={styles.container}>
          <TextView
            fontFamily="Source-Regular"
            fontSize={20}
            style={styles.headerSt}
          >
            Services Disponibles
          </TextView>
          <Divider width="95%" />
          {product.negotiable && (
            <View style={styles.row}>
              <PriceTag />
              <TextView fontFamily="Source-Regular" fontSize={20}>
                Prix négociable
              </TextView>
            </View>
          )}

          {product.goodState && (
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
          )}

          {product.delivery && (
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
          )}
          {product.cashOnDelivery && (
            <View style={styles.row}>
              <CashOnDelivery />
              <TextView
                fontFamily="Source-Regular"
                fontSize={20}
                style={[styles.textSt, { marginLeft: 10 }]}
              >
                Paiement en livraison
              </TextView>
            </View>
          )}
        </View>
      )}

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
          Détails
        </TextView>
        <Divider width="95%" />
         <Row detail="Section" value={product.category[0]} />
       <Row detail="Catégorie" value={product.category[1]} />
         <Row detail="Ville" value={product.city} />
        {product.etat && <Row detail="Etat de produit" value={product.etat ? product.etat : "*"} />}
        {product.marqueVoiture && (
          <Row detail="Marque de Voiture" value={product.marqueVoiture} />
        )}
        {product.marqueVoiture && (
          <Row detail="Carburant de Voiture" value={product.carburant} />
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
        {product.ROM && <Row detail="ROM : " value={product.ROM} />}
        {product.RAM && <Row detail="RAM : " value={product.RAM} />}
        {product.pouces && <Row detail="Taille : " value={product.pouces} />}
        
        {product.superficie && <Row detail="superficie : " value={product.superficie + " m²"}  />}
      </View>

      {product.chips.length > 0 && <Equipement chips={product.chips} />}
    </>
  );
}

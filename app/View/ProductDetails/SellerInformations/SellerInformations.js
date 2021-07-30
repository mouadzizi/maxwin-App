import React, { useFocusEffect, useCallback, useState } from "react";
import { View, Text } from "react-native";

import styles from "./SellerInformation.style";
import { Entypo } from "react-native-vector-icons";
import Divider from "../../../Components/Divider";

export default function SellerInformations({ product }) {
  console.log(product.owner);
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.firstRow}>
          <View style={styles.avatarContainer}>
            <Entypo name="user" size={60} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {product.owner.lastName} {product.owner.firstName.toUpperCase()}{" "}
            </Text>
            <Text style={styles.product}>
              {" "}
              Type : {product.owner.type.toUpperCase()}
            </Text>
          </View>
        </View>
        <Divider width={"100%"} />

        <View style={styles.secondRow}>
          <View style={styles.row}>
            <Text style={styles.info}> Email : </Text>
            <Text style={styles.value}> {product.owner.email}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.info}> Genre :</Text>
            <Text style={styles.value}> {product.owner.phone}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.info}> Nationalité :</Text>
            <Text style={styles.value}> Marocaine </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

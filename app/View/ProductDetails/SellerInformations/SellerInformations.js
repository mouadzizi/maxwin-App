import React from "react";
import { View, Text } from "react-native";

import styles from "./SellerInformation.style";
import Divider from "../../../Components/Divider";
import { Entypo } from "react-native-vector-icons";

export default function SellerInformations({ product }) {
  const owner = {
    firstName: product.owner?.firstName,
    lastName: product.owner?.lastName,
    address: product.owner?.address,
    type: product.owner?.type,
    gender: product.owner?.gender,
    creationDate: product.owner?.creationDate,
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.firstRow}>
          <View style={styles.avatarContainer}>
            <Entypo name="user" size={60} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {owner.lastName} {owner.firstName}
            </Text>
            <Text style={styles.product}> Type : {owner.type}</Text>
          </View>
        </View>
        <Divider width={"100%"} />

        <View style={styles.secondRow}>
          <View style={styles.row}>
            <Text style={styles.info}> date d'inscription en Maxwin : </Text>
            <Text style={styles.value}> {owner.creationDate} </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.info}> Genre :</Text>
            <Text style={styles.value}> {owner.gender} </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.info}> Adresse :</Text>
            <Text style={styles.value}> {owner.address} </Text>
          </View>


        </View>
      </View>
    </View>
  );
}

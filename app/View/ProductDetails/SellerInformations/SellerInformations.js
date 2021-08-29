import React from "react";
import { View, Text } from "react-native";

import styles from "./SellerInformation.style";
import Divider from "../../../Components/Divider";
import { Entypo, Fontisto } from "react-native-vector-icons";

export default function SellerInformations({ product }) {
  const owner = {
    firstName: product.owner?.firstName,
    lastName: product.owner?.lastName,
    city: product.owner?.city,
    type: product.owner?.type,
    gender: product.owner?.gender,
    creationDate: product.owner?.creationDate,
    address: product.owner?.address,
    id : product.owner?.uid,
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>
        <View style={styles.firstRow}>
          {owner.gender === "Femme" ? (
            <View style={styles.avatarContainer}>
              <Fontisto name="female" size={60} />
            </View>
          ) : (
            <View style={styles.avatarContainer}>
              <Entypo name="user" size={60} />
            </View>
          )}

          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              {owner.lastName} {owner.firstName}
            </Text>

            <Text style={styles.product}>{owner.type ? owner.type : "Particullier"}</Text>
            <Text style={styles.info}>Ville : {owner.city}</Text>
          </View>
        </View>
        <Divider width={"100%"} />

        <View style={styles.secondRow}>
          <View style={styles.row}>
            <Text style={styles.info}>date d'inscription : </Text>
            <Text style={styles.value}> {owner.creationDate} </Text>
          </View>

          <View style={[styles.row, {marginTop: 12, alignItems: 'center'}]}>
            <Text style={styles.info}>ID :  </Text>
            <Text style={styles.infoID}>{owner.id} </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

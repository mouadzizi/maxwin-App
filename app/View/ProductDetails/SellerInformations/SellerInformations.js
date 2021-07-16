import React from "react";
import { View, Text } from "react-native";
import styles from "./SellerInformation.style";
import { Entypo } from "react-native-vector-icons";
import Divider from "../../../Components/Divider"
export default function SellerInformations() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCard}>

        <View style={styles.firstRow}>
          <View style={styles.avatarContainer}>
            <Entypo name="user" size={60} />
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.name}> MOAD ZIZI</Text>
            <Text style={styles.product}> Produits : 10</Text>
          </View>
        </View>
        <Divider width={"100%"}/>

        <View style={styles.secondRow}>
          <View style={styles.row}>
            <Text style={styles.info}> Date de creation de Profile :</Text>
            <Text style={styles.value}> 19/03/2021</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.info}> Genre :</Text>
            <Text style={styles.value}> Homme</Text>
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

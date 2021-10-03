import React from "react";
import { View, Text } from "react-native";

import styles from "./SellerInformation.style";
import Divider from "../../../Components/Divider";
import { Entypo, Fontisto } from "react-native-vector-icons";
import TextView from "../../../Components/TextView";
import { COLORS } from "../../../GlobalStyle";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import { Image } from "react-native-elements/dist/image/Image";

export default function SellerInformations({ product }) {
  const owner = {
    firstName: product.owner?.firstName,
    lastName: product.owner?.lastName,
    username: product.owner?.username,
    city: product.owner?.city,
    type: product.owner?.type,
    gender: product.owner?.gender,
    creationDate: product.owner?.creationDate,
    address: product.owner?.address,
    id : product.owner?.uid,
    picUrl: product.owner?.picUrl,
  };
  return (
    <View style={styles.container}>
    <TextView
      fontFamily="Source-Regular"
      fontSize={20}
      style={styles.headerSt}
    >  Informations du vendeur  
    </TextView>
    <Divider width="95%" style={{marginBottom : 10}}/>

      <View style={styles.containerCard}>
        <View style={styles.firstRow}>
         
            <View style={styles.avatarContainer}>
            {owner.picUrl ? 
              <Avatar 
                source={{ uri: owner.picUrl}}
                rounded
                containerStyle={{height: '100%', width: '100%'}}
              />
              : 
              <Entypo
                name="user"
                size={45}
              />
            }
            
            </View>


          <View style={styles.nameContainer}>
            <Text style={styles.name}>
              { owner.username || (owner.lastName + owner.firstName)}
            </Text>

            <Text style={styles.product}>{owner.type ? owner.type : "Particullier"}</Text>
            {owner.city && 
              <Text style={styles.info}>Ville : {owner.city}</Text>
            }
            
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

import React from "react";
import { View, Text } from "react-native";
import TextView from "../../../Components/TextView";
import Divider from "../../../Components/Divider";

import styles from "./ProductInformation.style";
import { COLORS } from "../../../GlobalStyle";

export default function ProductInformation() {
  return (
      <>
    <View style={styles.container}>
      <TextView fontFamily="Source-Regular" fontSize={23}>
        Honda Jazz 2015
      </TextView>
      <Divider width="95%"/>
      <TextView fontFamily="Source-Regular" fontSize={23} style={{color: COLORS.secondary, marginTop: 5}}>
        13.000 DHS
      </TextView>
    </View>

    <View style={styles.container}>
 
      <TextView fontFamily="Source-Regular" fontSize={20} style={{color: COLORS.secondary, marginTop: 5}}>
        Services Disponibles
      </TextView>
      <Divider width="95%"/>

    </View>

    </>
  );
}

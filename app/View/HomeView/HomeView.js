import React, { useEffect } from "react";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../GlobalStyle";
import styles from "./HomeView.style";

import HeaderCategories from "../../Components/HeaderCategories";
import Immobilier from "./Immobilier";
import Vehicule from "./Vehicule";
import Electronics from "./Electronics";
import Decorations from "./Decorations";
import Mens from "./Mens";
import Female from "./Female";
import Babe from "./Babe";
import ServicesMaterial from "./ServicesMaterial";
import { getAllProducts } from "../../API/APIFunctions";
import { db } from "../../API/Firebase";

export default function HomeView({ navigation }) {
  // useEffect(() => {
  //   getAllProducts().then(res=>{
  //     res.forEach(p=>{
  //       db.collection('products').doc(p.id).update({kilometrage:parseFloat(p.kilometrage)})
  //     })
  //   })
  //   return () => {
      
  //   }
  // }, [])
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollContainer}>
        <StatusBar backgroundColor={COLORS.primary} />
        <HeaderCategories navigation={navigation} />
        <Vehicule navigation={navigation} />
        <Immobilier navigation={navigation} />
        <Decorations navigation={navigation} />
        <Electronics navigation={navigation} />
        <Female navigation={navigation} />
        <Mens navigation={navigation} />
        <Babe navigation={navigation}/>
        <ServicesMaterial navigation={navigation}/>
      </ScrollView>
    </View>
  );
}

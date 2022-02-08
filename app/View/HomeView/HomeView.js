import React, { useEffect } from "react";
import { StatusBar, View, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../GlobalStyle";
import styles from "./HomeView.style";

import HeaderCategories from "../../Components/HeaderCategories";
import Immobilier from "./Immobilier";
import Vehicule from "./Vehicule";
import Phones from "./Phones"
import Decorations from "./Decorations";

import MaleShoes from "./MaleShoes";
import MaleWatches from "./MaleWatches";
import MaleClothes from "./MaleClothes";
import FemaleShoes from "./FemaleShoes";
import FemaleClothes from "./FemaleClothes";
import FemaleWatches from "./FemaleWatches";

import Babe from "./Babe";
import ServicesMaterial from "./ServicesMaterial";
import * as Updates from "expo-updates";
import { InteractionManager } from "react-native";
import { openURL } from "expo-linking";

export default function HomeView({ navigation }) {
  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
      }, 2500);
    });
    return () => {};
  }, []);
  const update = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert("INFO", "New updates Available", [
          {
            text: "Update",
            style: "default",
            onPress: () =>
              openURL(
                "https://play.google.com/store/apps/details?id=com.us.maxwin"
              ),
          },
        ]);
      }
    } catch (e) {
      alert("Update Error " + e.message);
    }
  };
  
  /** 
   * 1)Vêtements femmes 
   * 2)Chaussures femmes 
   * 3)Montres & Acc femmes 
   * 4)Vêtements hommes 
   * 5)Chaussures hommes 
   * 6)Montres & Acc hommes 
   * 7)Téléphones 
8)Ordinateurs & Tablettes 
9)Accessoires lnformatiques 
10)Électroménagers 
11)Meuble & Déco 
12)Appartements à vendre 
13)Appartements à louer 
14)Voitures à vendre 
15)Location de voitures 
16)Motos & Vélos 
17)Matériels professionnels 
18)Services professionnels
     */

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollContainer}>
        <StatusBar backgroundColor={COLORS.primary} />
        <HeaderCategories navigation={navigation} />

        <FemaleClothes navigation={navigation} />
        <FemaleShoes navigation={navigation} />
        <FemaleWatches navigation={navigation} />

        <MaleClothes navigation={navigation} />
        <MaleWatches navigation={navigation} />
        <MaleShoes navigation={navigation} />

        <Phones navigation={navigation} />

        <Babe navigation={navigation} />
        <Decorations navigation={navigation} />
        <Vehicule navigation={navigation} />
        <Immobilier navigation={navigation} />
        <ServicesMaterial navigation={navigation} />
      </ScrollView>
    </View>
  );
}

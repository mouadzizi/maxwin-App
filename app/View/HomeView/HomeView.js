import React, { useEffect } from "react";
import { StatusBar, View, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../GlobalStyle";
import styles from "./HomeView.style";

import HeaderCategories from "../../Components/HeaderCategories";
import ApartmentRent from "./ApartmentRent";
import Apartment from "./Apartment";

import Phones from "./Phones"
import Decorations from "./Decorations";

import Laptops from "./Laptops";
import MaleShoes from "./MaleShoes";
import MaleWatches from "./MaleWatches";
import MaleClothes from "./MaleClothes";
import FemaleShoes from "./FemaleShoes";
import FemaleClothes from "./FemaleClothes";
import FemaleWatches from "./FemaleWatches";
import HomeAppliance from "./HomeAppliance";
import VehiculeRent from "./VehiculeRent";
import VehiculeSell from "./VehiculeSell";

import Babe from "./Babe";
import ServicesMaterial from "./ServicesMaterial";
import * as Updates from "expo-updates";
import { InteractionManager } from "react-native";
import { openURL } from "expo-linking";

export default function HomeView({ navigation }) {
  // useEffect(() => {
  //   InteractionManager.runAfterInteractions(() => {
  //     setTimeout(() => {
  //       update();
  //     }, 2500);
  //   });
  //   return () => {};
  // }, []);
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

        <Babe navigation={navigation} />

        <Phones navigation={navigation} />
        <Laptops navigation={navigation} />

        <HomeAppliance navigation={navigation} />
        <Decorations navigation={navigation} />

        <Apartment navigation={navigation} />
        <ApartmentRent navigation={navigation} />

        <VehiculeSell navigation={navigation} />
        <VehiculeRent navigation={navigation} />

        <ServicesMaterial navigation={navigation} />
      </ScrollView>
    </View>
  );
}

import React, { useEffect,useState } from "react";
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
import { useFocusEffect } from "@react-navigation/native";


export default function HomeView({ navigation }) {
  const [isload, setLoad] = useState(false)
  // useEffect(() => {
  //   InteractionManager.runAfterInteractions(() => {
  //     setTimeout(() => {
  //       update();
  //     }, 2500);
  //   });
  //   return () => {};
  // }, []);
  useFocusEffect(React.useCallback(()=>{
    console.log('home focused');
    setLoad(true)
    return ()=>setLoad(false)
  },[]))
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

        <FemaleClothes navigation={navigation} load={isload} />
        <FemaleShoes navigation={navigation} load={isload} />
        <FemaleWatches navigation={navigation} load={isload} />

        <MaleClothes navigation={navigation} load={isload} />
        <MaleWatches navigation={navigation} load={isload} />
        <MaleShoes navigation={navigation} load={isload} />

        <Babe navigation={navigation} load={isload} />

        <Phones navigation={navigation} load={isload} />
        <Laptops navigation={navigation} load={isload} />

        <HomeAppliance navigation={navigation} load={isload} />
        <Decorations navigation={navigation} load={isload} />

        <Apartment navigation={navigation} load={isload} />
        <ApartmentRent navigation={navigation} load={isload} />

        <VehiculeSell navigation={navigation} load={isload} />
        <VehiculeRent navigation={navigation} load={isload} />

        <ServicesMaterial navigation={navigation} load={isload} />
      </ScrollView>
    </View>
  );
}

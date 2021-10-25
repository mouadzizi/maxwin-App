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
import * as Updates from "expo-updates";
import { InteractionManager } from "react-native";

export default function HomeView({ navigation }) {
  useEffect(() => {
    InteractionManager.runAfterInteractions(()=>{
      setTimeout(() => {
        update();
      }, 2500);
    })
    return () => {
    }
  }, [])
  const update = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert("INFO", "New updates Available", [
          {
            text: "Update",
            style: "default",
            onPress: async () => {
              await Updates.fetchUpdateAsync();
              // ... notify user of update ...
              await Updates.reloadAsync();
            },
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

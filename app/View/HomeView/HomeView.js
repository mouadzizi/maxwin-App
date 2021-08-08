import React from "react";
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

export default function HomeView({ navigation }) {
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

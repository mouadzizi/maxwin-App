import React from "react";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../GlobalStyle";
import styles from "./HomeView.style";

import Immobilier from "./Immobilier";
import Vehicule from "./Vehicule";
import Electronics from "./Electronics";
import Decorations from "./Decorations";
import Mens from "./Mens";
import Female from "./Female";
import Services from "./Services";
import Babe from "./Babe";
import HeaderCategories from "../../Components/HeaderCategories";

export default function HomeView({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollContainer}>
        <StatusBar backgroundColor={COLORS.primary} />
        <HeaderCategories navigation={navigation} />
        <Vehicule navigation={navigation} />
        <Immobilier navigation={navigation} />
        <Electronics navigation={navigation} />
        <Mens navigation={navigation} />
        <Female navigation={navigation} />
        <Babe navigation={navigation}/>
        <Decorations navigation={navigation} />
        <Services navigation={navigation} />
      </ScrollView>
    </View>
  );
}

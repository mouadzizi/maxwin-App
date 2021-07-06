import React from "react";
import { StatusBar, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./HomeView.style";
import { COLORS } from "../../GlobalStyle";

import Immobilier from "./Immobilier";
import Vehicule from "./Vehicule";
import Electronics from "./Electronics";
import Decorations from "./Decorations";
import Mens from "./Mens";
import HeaderCategories from "../../Components/HeaderCategories";

export default function HomeView({ navigation }) {

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollContainer}>
        <StatusBar backgroundColor={COLORS.primary} />
        <HeaderCategories />
        <Vehicule navigation={navigation} />
        <Immobilier navigation={navigation} />
        <Electronics navigation={navigation} />
        <Decorations navigation={navigation} />
        <Mens navigation={navigation} />
      </ScrollView>
    </View>
  );
}

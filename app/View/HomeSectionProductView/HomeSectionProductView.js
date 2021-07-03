import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from '../../Components/HeaderCategories'
export default function HomeSectionProductView({navigation}) {
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderCategories />

        <Product numberImages={3} location="Tanger, Val Fleuri" nbLikes={55} title="Hundai i30" price={10000} navigation={navigation} />
        <Product numberImages={1} location="Casablanca, El bernousi" nbLikes={10} title="Apparetement par jour" price={400} navigation={navigation} />
        <Product numberImages={2} location="Merakech, Gulize" nbLikes={0} title="Iphone 13 new lbi3" price={5708} navigation={navigation} />
        <Product numberImages={5} location="Agadir, Hay saada" nbLikes={2} title="Plombie Agadir safae" price={4000} navigation={navigation} />
      </ScrollView>
    </View>
  );
}

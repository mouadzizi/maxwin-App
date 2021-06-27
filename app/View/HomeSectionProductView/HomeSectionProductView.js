import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from '../../Components/HeaderCategories'
export default function HomeSectionProductView() {
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderCategories />

        <Product />
        <Product />
        <Product />
        <Product />
      </ScrollView>
    </View>
  );
}

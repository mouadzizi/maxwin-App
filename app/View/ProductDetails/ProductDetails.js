import React from "react";
import { ScrollView } from "react-native";
import ImageSwiper from "./ImageSwiper";
import ProductInformation from "./ProductInformation";

const IMAGES = [
  { url: require("../../../assets/ProductTest/product4.jpeg") },
  { url: require("../../../assets/ProductTest/product11.jpeg") },
];
export default function ProductDetails() {
  return (
    <ScrollView>
      <ImageSwiper images={IMAGES}/>
      <ProductInformation/>
    </ScrollView>
  );
}

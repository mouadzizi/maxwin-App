import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import ImageSwiper from "./ImageSwiper";
import ProductInformation from "./ProductInformation";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  return (
    <ScrollView>
      <ImageSwiper
        images={product.images}
        onClick={() =>
          navigation.navigate("ImagePreview", {
            images: product.images,
          })
        }
      />
      <ProductInformation product={product} />      
    </ScrollView>
  );
}

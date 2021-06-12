import React from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
export default function Electronics() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "PlayStation 5",
      price: "5.200",
      imageCover: require("../../../../assets/ProductTest/product8.jpeg"),
    },
    {
      id: "3ac68afc-c60e8d3-a4f8-fbd91aa97f63",
      title: "IPhone 12 jedid",
      price: "11.230",
      imageCover: require("../../../../assets/ProductTest/product9.jpeg"),
    },
    {
      id: "3ac68afc-c605-48dsa4f8-fbd91aa97f63",
      title: "Asus Rog X3",
      price: "125.000",
      imageCover: require("../../../../assets/ProductTest/product10.jpeg"),
    },
    {
      id: "3ac68afc-c605-48dsa4fd91aa97f63",
      title: "I-Pad 11",
      price: "3.000",
      imageCover: require("../../../../assets/ProductTest/product11.jpeg"),
    },
  ];

  const ItemRender = ({ item }) => (
    <ProductSection
      onClick={() => Alert.alert(item.title)}
      title={item.title}
      price={item.price}
      imageCover={item.imageCover}
    />
  );

  return (
    <>
      <HeaderSection title="ELECTRONICS" />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={ItemRender}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

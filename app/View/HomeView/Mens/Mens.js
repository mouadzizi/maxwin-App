import React from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";

export default function Mens() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "MW X3 550",
      price: "50.000",
      imageCover: require("../../../../assets/ProductTest/product17.jpeg"),
    },
    {
      id: "3ac68afc-c60e8d3-a4f8-fbd91aa97f63",
      title: "SCamion Benz",
      price: "120.000",
      imageCover: require("../../../../assets/ProductTest/product15.jpeg"),
    },
    {
      id: "3ac68afc-c605-48dsa4f8-fbd91aa97f63",
      title: "Tesla model S",
      price: "1.120.000",
      imageCover: require("../../../../assets/ProductTest/product16.jpeg"),
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
      <HeaderSection title="VEHICULE" />
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

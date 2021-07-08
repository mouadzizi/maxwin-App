import React, { useEffect, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from "../../../API/APIFunctions";

export default function Vehicule({ navigation }) {
  const [products, setProducts] = React.useState([]);
  const collection = "VEHICULES";
  React.useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(items);
    });
    return () => {};
  }, []);
 
  const ItemRender = ({ item }) => (
    <ProductSection
      onClick={() => navigation.navigate("ProductDetails")}
      title={item.title}
      price={item.price}
      uri={item.images[0]}
    />
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <HeaderSection title={collection} navigation={navigation} />
      <FlatList
        
        data={products}
        keyExtractor={keyExtractor}
        renderItem={ItemRender}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

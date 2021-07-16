import React, { useEffect, useCallback, useState } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from "../../../API/APIFunctions";

export default function Service({ navigation }) {
  const [products, setProducts] = useState([]);
  const collection = "MATERIELS ET SERVICES";
  useEffect(() => {
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
      <HeaderSection
        title={"Services"}
        navigation={navigation}
        collection={collection}
      />
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

import React, { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
import { shuffle } from "underscore";

export default function Immobilier({ navigation }) {
  const [products, setProducts] = useState([]);
  const collection = "IMMOBILIER";

  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(shuffle(items));
    });
    return () => {};
  }, []);

  const ItemRender = useCallback(
    ({ item }) => (
      <ProductSection
        onClick={() => navigation.navigate("ProductDetails", { product: item })}
        title={item.title}
        price={item.price}
        uri={item.images[0]}
      />
    ),
    []
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <HeaderSection
        title={collection}
        navigation={navigation}
        collection={collection}
      />
      {products.length < 1 ? (
        <Skeleton />
      ) : (
        <FlatList
          data={products}
          renderItem={ItemRender}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
}

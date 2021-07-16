import React, { useState, useCallback, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
export default function Electronics({ navigation }) {
  const collection = "INFORMATIQUE ET ELECTRONIQUE";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getItemsByCollection("INFORMATIQUE ET ELECTRONIQUE", 10).then((items) =>
      setProducts(items)
    );
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
        title="ELECTRONIQUE"
        collection={collection}
        navigation={navigation}
      />
      {products.length < 1 ? (
        <Skeleton />
      ) : (
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={ItemRender}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      )}
    </>
  );
}

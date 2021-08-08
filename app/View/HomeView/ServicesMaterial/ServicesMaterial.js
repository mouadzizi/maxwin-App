import React, { useEffect, useCallback, useState } from "react";
import { FlatList } from "react-native";

import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";

import { getItemsByCollection } from "../../../API/APIFunctions";

export default function ServicesMaterial({ navigation }) {
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
      onClick={() => navigation.navigate("ProductDetails", { product: item })}
      title={item.title}
      price={item.price}
      uri={item.images[0]}
    />
  );

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <>
      <HeaderSection
        title={"SERVICE & MATERIELS"}
        navigation={navigation}
        collection={collection}
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

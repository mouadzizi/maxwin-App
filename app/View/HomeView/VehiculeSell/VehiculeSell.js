import React, { useState, useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
import SeeAllList from "../../../Components/SeeAllList";

export default function Laptops({ navigation, load }) {
  const collection = "Voitures";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(items)
    });
    return () => {
    };
  }, []);

  useEffect(() => {
    if (load) {
      getItemsByCollection(collection, 10).then((items) => {
        setProducts(items)
      });
    }
    return () => {
    };
  }, [load]);
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
  return (
    <>
      <HeaderSection
        title="Voitures"
        collection={collection}
        navigation={navigation}
        type="category"
      />
      {products.length < 1 ? (
        <Skeleton />
      ) : (
        <FlatList
          data={products}
          renderItem={ItemRender}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={
          <SeeAllList
          title="Voir tout"
          navigation={navigation}
          collection={collection}
          />}
        />
      )}
    </>
  );
}
import React, { useState, useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
import {shuffle} from 'underscore'
import SeeAllList from "../../../Components/SeeAllList";

export default function Decorations({ navigation }) {
  const collection = "MAISON & DECO";
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(items)
    });
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
          keyExtractor={keyExtractor}
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

import React, { useState, useCallback, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
import {shuffle} from 'underscore'
import SeeAllList from "../../../Components/SeeAllList";

export default function Electronics({ navigation }) {
  const collection = "INFORMATIQUE ET ELECTRONIQUE";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(shuffle(items))
    });
    return () => {
    };
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

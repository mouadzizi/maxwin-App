import React, { useEffect, useCallback, useState } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import {useFocusEffect} from '@react-navigation/native'
import {getItemsByCollection } from "../../../API/APIFunctions";

export default function Babe({ navigation }) {
  const [products, setProducts] = useState([]);
  const collection = "ESPACE BEBES ET ENFANTS";

  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(items);
    });
    return () => {

    };
  }, []);

  useFocusEffect(useCallback(
    () => {
    },
    [],
  ))
  const ItemRender = ({ item }) => (
    <ProductSection
      onClick={() => navigation.navigate("ProductDetails", { product: item })}
      title={item.title}
      price={item.price}
      uri={item.images[0]}
    />
  );


  return (
    <>
      <HeaderSection
        title={"ESPACE ENFANTS"}
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

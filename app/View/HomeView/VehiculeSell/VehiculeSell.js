import React, { useState, useCallback, useEffect } from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCategory } from "../../../API/APIFunctions";
import SeeAllList from "../../../Components/SeeAllList";

export default function Laptops({ navigation }) {
  const collection = "Voitures";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getItemsByCategory(collection, 10).then((items) => {
      setProducts(items)
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

import React, { useEffect, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from "../../../API/APIFunctions";
import Skeleton from "../Skeletone";
import {shuffle} from 'underscore'
import SeeAllList from "../../../Components/SeeAllList";

export default function Vehicule({ navigation }) {
  const [products, setProducts] = React.useState([]);
  const collection = "ESPACE FEMMES";


  useEffect(() => {
    getItemsByCollection(collection, 10).then((items) => {
      setProducts(shuffle(items))    });
    return () => {
    
    };
  }, []);

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
        title={"ESPACE FEMMES"}
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

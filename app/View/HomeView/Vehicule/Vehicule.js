import React, { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCategory } from "../../../API/APIFunctions";
import Skeleton from "../Skeletone";
import {shuffle} from 'underscore'
import SeeAllList from "../../../Components/SeeAllList";


export default function Vehicule({ navigation }) {
  const [products, setProducts] = useState([]);
  const collection = "VEHICULES";

  useEffect(() => {
    getItemsByCategory(collection,10).then(res=>{
      setProducts(shuffle(res))
    })
    return () => {
    };
  }, []);


  const ItemRender = ({ item }) => (
    <ProductSection
      onClick={() => navigation.navigate("ProductDetails", { product: item })}
      title={item.title}
      price={item.price}
      uri={item.images[0] || item.images.uri}
    />
  );

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

import React, { useEffect, useCallback, useState } from "react";
import { FlatList, Text } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { fecthItem,getItemsByCategory } from "../../../API/APIFunctions";
import Skeleton from "../Skeletone";
import { db } from "../../../API/Firebase";

export default function Vehicule({ navigation }) {
  const [products, setProducts] = useState([]);
  const collection = "VEHICULES";
  const categoryRef = db
    .collection("products")
    .where("category", "array-contains", collection)
    .orderBy("createdDate", "desc");

  useEffect(() => {
    // const cleanUp = categoryRef
    //   .limit(10)
    //   .onSnapshot((snap) => fecthItems(snap).then((res) => {
    //     console.log(res[0])
    //     setProducts(res)}));
    getItemsByCategory(collection,10).then(res=>setProducts(res))
    return () => {
      // cleanUp();
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
        />
      )}
    </>
  );
}

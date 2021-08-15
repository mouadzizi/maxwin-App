import React, { useState, useCallback, useEffect } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import Skeleton from "../Skeletone";
import { getItemsByCollection } from "../../../API/APIFunctions";
import { fecthItems } from "../../../API/APIFunctions";
import { db } from "../../../API/Firebase";

export default function Electronics({ navigation }) {
  const collection = "INFORMATIQUE ET ELECTRONIQUE";
  const [products, setProducts] = useState([]);
  const categoryRef = db
    .collection("products")
    .where("category", "array-contains", collection)
    .orderBy("createdDate", "desc");

  useEffect(() => {
    const cleanUp = categoryRef
      .limit(10)
      .onSnapshot((snap) => fecthItems(snap).then((res) => setProducts(res)));
    return () => {
      cleanUp();
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
        />
      )}
    </>
  );
}

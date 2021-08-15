import React, { useEffect, useCallback } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from "../../../API/APIFunctions";
import Skeleton from "../Skeletone";
import { fecthItems } from "../../../API/APIFunctions";
import { db } from "../../../API/Firebase";
export default function Vehicule({ navigation }) {
  const [products, setProducts] = React.useState([]);
  const collection = "ESPACE FEMMES";
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
        />
      )}
    </>
  );
}

import React, { useEffect } from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from "../../../API/APIFunctions";
import Skeleton from "../Skeletone";
import SeeAllList from "../../../Components/SeeAllList";
import { useFocusEffect } from "@react-navigation/native";


export default function FemaleClotes({ navigation,load}) {
  const [products, setProducts] = React.useState([]);
  const collection = "Vêtements Femmes";


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
        title={"Vêtements Femmes"}
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

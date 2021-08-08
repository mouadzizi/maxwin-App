import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from "../../Components/HeaderCategories";
import { getItemsByCollection } from "../../API/APIFunctions";
import Skeleton from './Skeleton'

export default function HomeSectionProductView({ navigation, route }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { collection } = route.params;
    getItemsByCollection(collection, 10)
      .then((items) => {
        setProducts(items);
      })
      .catch(({ message }) => console.warn(message));
    return () => {};
  }, []);
  const renderItem = useCallback(
    ({ item }) => (
      <Product
        numberImages={item.images.length}
        images={item.images}
        location={item.city}
        nbLikes={item.likes}
        title={item.title}
        price={item.price}
        onClick={() => navigation.navigate("ProductDetails", { product: item })}
      />
    ),
    []
  );
  const renderHeader = () => <HeaderCategories navigation={navigation} />;
  const keyExtractor = useCallback((item) => item.id, []);
  return (
    <View style={styles.container}>
      {products.length > 1 ? (
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
        />
      ) : (
        <>
        <Skeleton />
        <Skeleton />
        </>
      )}
    </View>
  );
}

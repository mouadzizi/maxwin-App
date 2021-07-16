import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList } from "react-native";
import Product from "../../Components/Product/Product";
import { getItemsByCollection } from "../../API/APIFunctions";
import styles from './ResultView.style'

export default function ResultView({ route }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const { collection } = route.params;
    console.log(collection);
    getItemsByCollection(collection, 10)
      .then((items) => {
        setProducts(items);
      })
      .catch(({ message }) => console.warn(message));
    return () => { };
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <Product
        numberImages={item.images.length}
        images={item.images}
        location={item.city}
        nbLikes={55}
        title={item.title}
        price={item.price}
        onClick={() => navigation.navigate("ProductDetails", { product: item })}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item) => item.id, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
}

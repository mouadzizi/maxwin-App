import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList } from "react-native";
import Product from "../../Components/Product/Product";
import { getItemsByCategory, filter } from "../../API/APIFunctions";
import styles from "./ResultView.style";

export default function ResultView({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const { parent } = route.params;

  useEffect(() => {
    switch (parent) {
      case "FilterView":
        const filterOpt = route.params?.filterOpt;
        console.log(filterOpt);
        filter(filterOpt)
          .then((data) => setProducts(data))
          .catch(({ message }) => alert(message));
        break;

      case "test":
        console.log("test");
        const collection = route.params?.collection;
        getItemsByCategory(collection, 10)
          .then((items) => {
            setProducts(items);
          })
          .catch(({ message }) => console.warn(message));
        break;
    }

    return () => {};
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

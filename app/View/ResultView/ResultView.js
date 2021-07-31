import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, Dimensions } from "react-native";
import Product from "../../Components/Product/Product";
import { getItemsByCategory, filter } from "../../API/APIFunctions";
import styles from "./ResultView.style";
import * as Progress from "react-native-progress";
import {COLORS} from '../../GlobalStyle'



export default function ResultView({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const { parent } = route.params;
  const width = Dimensions.get("window").width;
  useEffect(() => {
    switch (parent) {
      case "FilterView":
        const filterOpt = route.params?.filterOpt;
        console.log(filterOpt);
        filter(filterOpt)
          .then((data) => {
            setReady(true);
            setProducts(data);
          })
          .catch(({ message }) => alert(message));
        break;

      default:
        console.log("test");
        const collection = route.params?.collection;
        getItemsByCategory(collection, 10)
          .then((items) => {
            setReady(true);
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
      {ready ? (
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      ) : (
        <Progress.Bar
        color={COLORS.primary}
          indeterminate
          animationType='timing'
          width={width}
          height={8}
          style={{ marginTop: 8 }}
        />
      )}
    </View>
  );
}

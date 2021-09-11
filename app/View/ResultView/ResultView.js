import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, Share } from "react-native";
import Product from "../../Components/Product/Product";
import { getItemsByCategory, filter } from "../../API/APIFunctions";
import styles from "./ResultView.style";
import * as Progress from "react-native-progress";
import { COLORS, windowWidth } from "../../GlobalStyle";
import EmptyProducts from "../../SVG/EmptyProducts";
import { FAB } from "react-native-elements";
import { AntDesign } from "react-native-vector-icons";

export default function ResultView({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const [limit, setLimit] = useState(8);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const parent = route.params?.parent;
  let listRef;

  const shareTheApp = async () => {
    try {
      const result = await Share.share({
        message:
          "MAXWIN | il s'agit d'une application puissante qui arrive lentement et régulièrement pour conquérir le marché",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.warn(error.message);
    }
  };


  useEffect(() => {
    switch (parent) {
      case "FilterView":
        const filterOpt = route.params?.filterOpt;
        setIsRefreshing(true)
        filter(filterOpt, limit)
          .then((data) => {
            setReady(true);
            setProducts(data);
            setIsRefreshing(false)
          })
          .catch(({ message }) => console.warn(message));
        break;

      default:
        const collection = route.params?.collection;
        getItemsByCategory(collection, limit)
          .then((items) => {
            setReady(true);
            setProducts(items);
          })
          .catch(({ message }) => console.warn(message));
        break;
    }

    return () => {};
  }, [limit]);

  const renderItem = useCallback(
    ({ item }) => (
      <Product
        numberImages={item.images.length}
        images={item.images}
        quartier={item.adresse}
        location={item.city}
        nbLikes={item.likes}
        title={item.title}
        price={item.price}
        onClick={() => navigation.navigate("ProductDetails", { product: item })}
      />
    ),
    []
  );
  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <View
      style={products.length < 1 ? styles.containerImage : styles.container}
    >
      <FAB
        onPress={shareTheApp}
        title="Application"
        titleStyle={{ fontSize: 15, fontWeight: "bold" }}
        color={COLORS.primary}
        style={styles.FAB}
        icon={<AntDesign name="sharealt" size={23} color="white" />}
      />
      {products.length < 1 && <EmptyProducts />}
      {ready ? (
        <FlatList
        ref={(ref)=>(listRef=ref)}
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          onEndReached={() => setLimit((prevLimit) => prevLimit + 10)}
          onEndReachedThreshold={0.3}
          refreshing={isRefreshing}
        />
      ) : (
        <Progress.Bar
          color={COLORS.primary}
          indeterminate
          animationType="timing"
          width={windowWidth}
          height={8}
          style={{ position: "absolute", top: 0 }}
        />
      )}
    </View>
  );
}

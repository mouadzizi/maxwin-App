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
  const parent = route.params?.parent;

  const shareTheApp = async () => {
    try {
      const result = await Share.share({
        message:
          "MAXWIN | Salut Je partage avec vous la nouvelle application d'achat et de vente au Maroc, N'hésitez pas à l'utiliser, pour télécharger l'application cliquez sur le lien suivant : ",
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
        console.log(filterOpt);
        filter(filterOpt)
          .then((data) => {
            console.log(data);
            setReady(true);
            setProducts(data);
          })
          .catch(({ message }) => console.warn(message));
        break;

      default:
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
          data={products}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
        />
      ) : (
        <Progress.Bar
          color={COLORS.primary}
          indeterminate
          animationType="timing"
          width={windowWidth}
          height={8}
          style={{ marginTop: 5 }}
        />
      )}
    </View>
  );
}

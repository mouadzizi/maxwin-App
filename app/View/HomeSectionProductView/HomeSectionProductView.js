import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, Share } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from "../../Components/HeaderCategories";
import { getItemsByCollection } from "../../API/APIFunctions";
import Skeleton from "./Skeleton";
import { FAB } from "react-native-elements";
import { COLORS } from "../../GlobalStyle";
import { AntDesign } from "react-native-vector-icons";

export default function HomeSectionProductView({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const collection = route.params?.collection;


  useEffect(() => {
    getItemsByCollection(collection, 10)
      .then((items) => {
        setProducts(items);
      })
      .catch(({ message }) => console.warn(message));
    return(()=> {})
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <Product
        numberImages={item.images.length}
        images={item.images}
        location={item.city}
        nbLikes={item.likes}
        title={item.title}
        quartier={item.adresse}
        price={item.price}
        onClick={() => navigation.navigate("ProductDetails", { product: item })}
      />
    ),
    []
  );

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
  const renderHeader = () => <HeaderCategories navigation={navigation} />;
  const keyExtractor = useCallback((item) => item.id, []);
  return (
    <View style={styles.container}>
      <FAB
        onPress={shareTheApp}
        title="Application"
        titleStyle={{ fontSize: 15, fontWeight: "bold" }}
        color={COLORS.primary}
        style={styles.FAB}
        icon={<AntDesign name="sharealt" size={23} color="white" />}
      />
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

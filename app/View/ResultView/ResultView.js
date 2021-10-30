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
import { Ionicons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function ResultView({ route, navigation }) {
  const [products, setProducts] = useState([]);
  const [ready, setReady] = useState(false);
  const [limit, setLimit] = useState(10);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const parent = route.params?.parent;

  const HeaderRight = () => {
    return (
      <View style={{ flexDirection: "row" }}>

        <TouchableWithoutFeedback
          onPress={() => navigation.replace("FilterView")}
        >
          <Ionicons
            name="options"
            size={36}
            color="#fff"
            style={{ marginRight: 20 }}
          />
        </TouchableWithoutFeedback>
      </View>
    );
  };

  const shareTheApp = async () => {
    try {
      const result = await Share.share({
        message:
        "Salut, Je partage avec vous Maxwin,la nouvelle application d'achat et de vente au Maroc, N'hésitez pas à utiliser l'application, elle est simple et gratuite, pour télécharger Maxwin cliquez sur le lien suivant : https://play.google.com/store/apps/details?id=com.us.maxwin"
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
            setProducts(data)
            setIsRefreshing(false)
          })
          .catch(({ message }) => console.warn(message));
        break;

      default:
        const collection = route.params?.collection;
        getItemsByCategory(collection, limit)
          .then((items) => {
            setReady(true);
            setProducts(items)
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
    
  useEffect(() => {
    navigation.setOptions({
      headerRight:()=> <HeaderRight/>
    })
    return () => {
      
    }
  }, [])
  

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
          onEndReached={() => setLimit((prevLimit) => prevLimit + 2)}
          onEndReachedThreshold={0.3}
          refreshing={isRefreshing}
          onRefresh={()=>{}}
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

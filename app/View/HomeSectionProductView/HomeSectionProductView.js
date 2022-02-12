 import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, Share,ToastAndroid } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from "../../Components/HeaderCategories";
import { getItemsByCollection, getItemsByCategory } from "../../API/APIFunctions";
import Skeleton from "./Skeleton";
import { FAB } from "react-native-elements";
import { COLORS } from "../../GlobalStyle";
import { AntDesign,Ionicons } from "react-native-vector-icons";
import { TouchableWithoutFeedback } from "react-native";


export default function HomeSectionProductView({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [limit, setLimit] = useState(2)
  const [noMoreItems, setnoMoreItems] = useState(false)
  const collection = route.params?.collection;

  useEffect(() => {
    console.log(collection);
    navigation.setOptions({
      headerRight:()=><HeaderRight navigation={navigation} />,
    })
    if (!noMoreItems) {
      setIsRefreshing(true)
      getItemsByCollection(collection, limit)
        .then((items) => {
          setnoMoreItems(items.length == products.length)
          setProducts(items)
          setIsRefreshing(false)
        })
        .catch(({ message }) => console.warn(message));
    }
    else ToastAndroid.show("il n'y a plus d'articles",ToastAndroid.SHORT)
    return(()=> {})
  }, [limit]);

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

  const HeaderRight = ({navigation}) => {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("SearchView")} >
          <Ionicons
            name="search"
            size={36}
            color="#fff"
            style={{ marginRight: 20 }}
          />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("FilterView")}
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
  const renderHeader = () => <HeaderCategories navigation={navigation} />;
  const handleRefresh= ()=>{
    setIsRefreshing(true)
    getItemsByCollection(collection,limit).then(res=>setProducts(res)).then(()=>setIsRefreshing(false))
  }
  const loadMore = ()=>{
    setLimit((prevLimit)=>prevLimit+2)
  }
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
      {products.length !== 0  ? (
        <FlatList
          data={products}
          keyExtractor={keyExtractor}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
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

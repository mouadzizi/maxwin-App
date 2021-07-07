import React, { useState, useEffect, useCallback } from "react";

import { View, ScrollView, FlatList } from "react-native";
import Product from "../../Components/Product/Product";
import styles from "./HomeSectionProductView.style";
import HeaderCategories from '../../Components/HeaderCategories';
import { getItemsByCollection } from '../../API/APIFunctions'
export default function HomeSectionProductView({ navigation, route }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const { collection } = route.params
    console.log(collection);
    getItemsByCollection(collection, 10)
      .then(items => {
        
        setProducts(items)})
      .catch(({ message }) => console.log(message))
    return () => {

    }
  }, [])
  const renderItem = useCallback(
    ({item}) => <Product
      numberImages={item.images.length} 
      images={item.images} 
      location={item.city} 
      nbLikes={55} 
      title={item.title}
      price={item.price} 
      onClick={() => navigation.navigate('ProductDetails')} />,
    [],
  )
  const renderHeader = ()=> <HeaderCategories />
  const keyExtractor = useCallback(
    (item) => item.id,
    [],
  )
  return (
    <View style={styles.container}>
      <FlatList 
      data={products}
      keyExtractor={keyExtractor}
      ListHeaderComponent = {renderHeader}
      renderItem={renderItem}
      />
    </View>
  );
}

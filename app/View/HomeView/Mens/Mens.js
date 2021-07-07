import React, {useCallback, useEffect, useState} from "react";
import { FlatList } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from '../../../API/APIFunctions'

export default function Mens({navigation}) {
  const collection = 'ESPACE HOMMES'
  
  const [products, setProducts] = useState([])
  useEffect(() => {
    getItemsByCollection(collection, 10).then(items => setProducts(items))
  }, [])

  const ItemRender = useCallback(({ item }) => (
    <ProductSection
      onClick={() => navigation.navigate("ProductDetails")}
      title={item.title}
      price={item.price}
      uri={item.images[0]}
    />
  ), [])
  const keyExtractor = React.useCallback((item) => item.id, [])
  return (
    <>
      <HeaderSection title={collection} navigation={navigation}/>
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={ItemRender}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </>
  );
}

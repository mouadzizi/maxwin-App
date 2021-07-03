import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from '../../../Components/HeaderSection';
import { getItemsByCollection } from '../../../API/APIFunctions'
export default function Decorations() {
  const collection = 'MAISON & DECO'
  const [products, setProducts] = useState([])
  React.useEffect(() => {
    getItemsByCollection(collection, 10).then(items => setProducts(items))
  }, [])

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Machine à laver Philips Automatic',
      price: "5600",
      imageCover: require("../../../../assets/ProductTest/product12.png")
    },
    {
      id: '3ac68afc-c60e8d3-a4f8-fbd91aa97f63',
      title: 'Canaper Jedid',
      price: "6500",
      imageCover: require("../../../../assets/ProductTest/product14.jpeg")
    },
  ];

  const ItemRender = React.useCallback(({ item }) => (
    <ProductSection
      onClick={() => Alert.alert(item.title)}
      title={item.title}
      price={item.price}
      uri={item.images[0]}
    />
  ), [])
  const keyExtractor = React.useCallback((item) => item.id, [])
  return (

    <>
      <HeaderSection title={collection} />
      <FlatList
        data={products}
        keyExtractor={keyExtractor}
        renderItem={ItemRender}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
    </>
  );
}

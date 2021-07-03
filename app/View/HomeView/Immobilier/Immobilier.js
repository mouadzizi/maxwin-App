import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from '../../../Components/HeaderSection'
import { getItemsByCollection } from '../../../API/APIFunctions'
export default function Immobilier({ navigation }) {
  const collection = 'IMMOBILIER'
  const [products, setProducts] = useState([])
  React.useEffect(() => {
    getItemsByCollection(collection, 10).then(items => setProducts(items))
  }, [])
  
  const ImageTest = require("../../../../assets/ProductTest/Product1.jpeg");
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Villa SAFAE",
      price: "5.000.000",
      imageCover: require("../../../../assets/ProductTest/product5.jpeg"),
    },
    {
      id: "3ac68afc-c60e8d3-a4f8-fbd91aa97f63",
      title: "Appartement Bouznika",
      price: "1.200.000",
      imageCover: require("../../../../assets/ProductTest/product6.jpeg"),
    },
    {
      id: "3ac68afc-c605-48dsa4f8-fbd91aa97f63",
      title: "Terrain Settat",
      price: "2.000.000",
      imageCover: require("../../../../assets/ProductTest/product7.jpeg"),
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

  const keyExtractor = React.useCallback(item => item.id, [])
  return (

    <>
      <HeaderSection title={collection} />
      <FlatList
        initialNumToRender={3}
        data={products}
        keyExtractor={keyExtractor}
        renderItem={ItemRender}
        horizontal={true}
        showsHorizontalScrollIndicator={false} />
    </>
  );
}

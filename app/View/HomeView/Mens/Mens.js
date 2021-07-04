import React from "react";
import { FlatList, Alert } from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from "../../../Components/HeaderSection";
import { getItemsByCollection } from '../../../API/APIFunctions'

export default function Mens() {
  const collection = 'ESPACE HOMMES'
  const [products, setProducts] = React.useState([])
  React.useEffect(() => {
    getItemsByCollection(collection, 10).then(items => setProducts(items))
  }, [])
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "MW X3 550",
      price: "50.000",
      imageCover: require("../../../../assets/ProductTest/product17.jpeg"),
    },
    {
      id: "3ac68afc-c60e8d3-a4f8-fbd91aa97f63",
      title: "SCamion Benz",
      price: "120.000",
      imageCover: require("../../../../assets/ProductTest/product15.jpeg"),
    },
    {
      id: "3ac68afc-c605-48dsa4f8-fbd91aa97f63",
      title: "Tesla model S",
      price: "1.120.000",
      imageCover: require("../../../../assets/ProductTest/product16.jpeg"),
    },
  ];

  const ItemRender = React.useCallback(({ item }) => (
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
      <HeaderSection title={collection} />
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

import React from "react";
import { FlatList, Alert} from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from '../../../Components/HeaderSection';

export default function Decorations() {

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

  const ItemRender = ({ item }) => (
    <ProductSection
        onClick={()=> Alert.alert(item.title)}
        title={item.title}
        price={item.price}
        imageCover={item.imageCover}
      />
  );

  return (
    
    <>
    <HeaderSection title="Decorations"/>
      <FlatList 
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={ItemRender}
      horizontal={true}
      showsHorizontalScrollIndicator={false}/>
    </>
  );
}

import React from "react";
import { FlatList, Alert} from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from '../../../Components/HeaderSection'
export default function Immobilier({navigation}) {
  const ImageTest = require("../../../../assets/ProductTest/Product1.jpeg");
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Villa SAFAE',
      price: "5.000.000",
      imageCover: require("../../../../assets/ProductTest/product5.jpeg")
    },
    {
      id: '3ac68afc-c60e8d3-a4f8-fbd91aa97f63',
      title: 'Appartement Bouznika',
      price: "1.200.000",
      imageCover: require("../../../../assets/ProductTest/product6.jpeg")
    },
    {
      id: '3ac68afc-c605-48dsa4f8-fbd91aa97f63',
      title: 'Terrain Settat',
      price: "2.000.000",
      imageCover: require("../../../../assets/ProductTest/product7.jpeg")
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
    <HeaderSection title="IMMOBILIER"/>
      <FlatList 
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={ItemRender}
      horizontal={true}
      showsHorizontalScrollIndicator={false}/>
    </>
  );
}

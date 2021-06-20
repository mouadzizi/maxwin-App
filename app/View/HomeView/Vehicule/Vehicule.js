import React from "react";
import { FlatList, Alert} from "react-native";
import ProductSection from "../../../Components/Product/ProductSection";
import HeaderSection from '../../../Components/HeaderSection'
export default function Vehicule({navigation}) {

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'MW X3 550',
      price: "50.000",
      imageCover: require("../../../../assets/ProductTest/Product1.jpeg")
    },
    {
      id: '3ac68afc-c60e8d3-a4f8-fbd91aa97f63',
      title: 'SCamion Benz',
      price: "120.000",
      imageCover: require("../../../../assets/ProductTest/product2.jpeg")
    },
    {
      id: '3ac68afc-c605-48dsa4f8-fbd91aa97f63',
      title: 'Tesla model S',
      price: "1.120.000",
      imageCover: require("../../../../assets/ProductTest/product3.jpeg")
    },
    {
      id: '3ac68afc-c605-48dsa4fd91aa97f63',
      title: 'T-Max',
      price: "250.000",
      imageCover: require("../../../../assets/ProductTest/product4.jpeg")
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
    <HeaderSection title="VEHICULE" navigation={navigation}/>
      <FlatList 
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={ItemRender}
      horizontal={true}
      showsHorizontalScrollIndicator={false}/>
    </>
  );
}

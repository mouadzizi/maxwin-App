import React, { useState, useFocusEffect } from "react";
import { View, FlatList } from "react-native";
import BoutiqueProduct from "../../Components/Product/BoutiqueProduct";
import { db, auth } from "../../API/Firebase";

export default function MyProductsView({ navigation }) {
  const [product, setProduct] = useState({});
  const DATA = [
    {
      title: "product 1",
      price: "5000",
      id: "214SDQsqGF332",
    },
    {
      title: "product 2",
      price: "32400",
      id: "214SDQsqGsfddSSDdqF332",
    },
    {
      title: "product 5",
      price: "3200",
      id: "214SDQsfddSFSDdqF332",
    },
    {
      title: "product 6",
      price: "3100",
      id: "214SDQsfddSSDdqF332",
    },
    {
      title: "product 5",
      price: "3200",
      id: "214SDQsfdSQdSSDdqF332",
    },
    {
      title: "product 6",
      price: "3100",
      id: "214SDQsfddQQSSDdqF332",
    },

    {
      title: "product 5A",
      price: "3200",
      id: "214SDQsfdSQdQSDSSDdqF332",
    },
    {
      title: "product 6",
      price: "3100",
      id: "214SDQsfddQQSDQSSDdqF332",
    },
  ];


  const Item = ({ item }) => {
    return (
      <View style={{ width: "45%", marginRight: 10 }}>
        <BoutiqueProduct
          title={item.title}
          price={item.price}
          onClick={() => navigation.navigate("EditProduct")}
          image={require("../../../assets/ProductTest/product4.jpeg")}
        />
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={Item}
      />
    </>
  );
}

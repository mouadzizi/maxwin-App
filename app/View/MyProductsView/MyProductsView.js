import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getUserItems } from "../../API/APIFunctions";
import BoutiqueProduct from "../../Components/Product/BoutiqueProduct";

export default function MyProductsView({ navigation }) {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getUserItems().then((items) => setProducts(items));
    }, [])
  );
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
          onClick={() => navigation.navigate("EditProduct", { product: item })}
          image={item.images[0]}
        />
      </View>
    );
  };
  return (
    <>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={Item}
      />
    </>
  );
}

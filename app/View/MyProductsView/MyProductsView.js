import { useFocusEffect } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { getUserItems } from "../../API/APIFunctions";
import BoutiqueProduct from "../../Components/Product/BoutiqueProduct";
import { db, auth } from "../../API/Firebase";

export default function MyProductsView({ navigation }) {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      getUserItems().then((items) => setProducts(items));
    }, [])
  );

  const Item = ({ item }) => {
    return (
      <View style={{ width: "45%", marginRight: 10 }}>
        <BoutiqueProduct
          title={item?.title.substring(0,11)}
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

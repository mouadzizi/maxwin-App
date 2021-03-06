import React, { useCallback, useState } from "react";
import { View, ActivityIndicator, FlatList, Alert } from "react-native";
import FavoriteProduct from "../../Components/Product/FavoritProduct";
import EmptyFavorite from "../../SVG/EmptyFavorite";
import { removeFavorite } from "../../API/APIFunctions";
import { useFocusEffect } from "@react-navigation/native";
import { db, auth } from "../../API/Firebase";

import styles from "./FavoriteView.style";

export default function FavoriteView({ navigation }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const uid = auth.currentUser?.uid;
      if (uid) {
        db.collection("users")
          .doc(uid)
          .collection("favorite")
          .onSnapshot((snapShot) => {
            var array = [];
            array = snapShot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            setItems(array);
            setReady(true);
          });
      } else {
        setReady(true);
        showAlert();
      }
      return () => {
        //  _unsub();
      };
    }, [])
  );

  const removeItem = (id) => {
    Alert.alert(
      "Suprimer",
      "Êtes-vous sûr de bien vouloir supprimer cet élément",
      [
        {
          text: "Suprimer",
          style: "default",
          onPress: () => removeFavorite(id),
        },
        {
          text: "Annuler",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }) => {
    return (
      <View style={{ width: "45%", marginRight: 10 }}>
        <FavoriteProduct
          fav={item}
          onClick={() => removeItem(item.id)}
          navigation={navigation}
        />
      </View>
    );
  };

  const keys = useCallback((item) => item.id, []);

  const showAlert = () => {
    Alert.alert("Avez-vous un compte ?", "Veuillez vous connecter", [
      {
        text: "S'identifier",
        style: "default",
        onPress: () => navigation.navigate("SignIn"),
      },
      {
        text: "Annuler",
        onPress: () => navigation.goBack(),
      },
    ]);
  };

  return (
    <View style={items.length < 1 ? styles.containerImage : styles.container}>
      {items.length < 1 && <EmptyFavorite />}
      {ready ? (
        <FlatList
          data={items}
          keyExtractor={keys}
          renderItem={renderItem}
          numColumns={2}
        />
      ) : (
        <ActivityIndicator size="large" animating color="black" />
      )}
    </View>
  );
}

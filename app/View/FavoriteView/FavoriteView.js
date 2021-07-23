import React, { useCallback, useEffect, useState } from "react";
import { View, ActivityIndicator, FlatList, Alert } from "react-native";
import styles from "./FavoriteView.style";
import FavoriteProduct from "../../Components/Product/FavoritProduct";
import { removeFavorite } from "../../API/APIFunctions";
import { useFocusEffect } from "@react-navigation/native";
import { db, auth } from "../../API/Firebase";
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
        // _unsub();
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

  const renderItem = useCallback(
    ({ item }) => (
      <FavoriteProduct fav={item} onClick={() => removeItem(item.id)} />
    ),
    []
  );
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
    <View style={styles.container}>
      {ready ? (
        <FlatList data={items} keyExtractor={keys} renderItem={renderItem} />
      ) : (
        <ActivityIndicator size="large" animating color="black" />
      )}
    </View>
  );
}

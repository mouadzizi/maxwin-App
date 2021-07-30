import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Alert,
  Linking,
  Share,
} from "react-native";
import { FAB } from "react-native-elements";

import ImageSwiper from "./ImageSwiper";
import ProductInformation from "./ProductInformation";
import ButtonFill from "../../Components/Button/ButtonFill";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import SellerInformations from "./SellerInformations";

import { auth, db } from "../../API/Firebase";
import {
  addToFavorite,
  removeFavorite,
  addToLikedProducts,
  removeLiked,
} from "../../API/APIFunctions";

import { FontAwesome, AntDesign } from "react-native-vector-icons";
import styles from "./ProductDetails.style";
import { COLORS } from "../../GlobalStyle";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const uid = auth.currentUser?.uid;

  const showAlert = () => {
    Alert.alert("Avez-vous un compte ?", "Veuillez vous connecter svp", [
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

  useEffect(() => {
    let _unsub = db
      .collection("users")
      .doc(uid)
      .collection("favorite")
      .onSnapshot((snapShot) => {
        const isFav = snapShot.docs.some(({ id }) => id === product.id);
        setIsFavorite(isFav);
      });
    return () => {
      _unsub();
    };
  }, []);

  useEffect(() => {
    let _unsub = db
      .collection("users")
      .doc(uid)
      .collection("liked")
      .onSnapshot((snapShot) => {
        const isLiked = snapShot.docs.some(({ id }) => id === product.id);
        setIsLiked(isLiked);
      });
    return () => {
      _unsub();
    };
  }, []);

  const addOrRemoveFavorite = () => {
    if (isFavorite) {
      removeFavorite(product.id);
    } else if (uid) {
      addToFavorite(uid, product).catch((err) => console.warn(err.message));
    } else showAlert();
  };

  const addOrRemoveLikedProduct = () => {
    if (isLiked) {
      removeLiked(product.id);
    } else if (uid) {
      addToLikedProducts(uid, product).catch((err) =>
        console.warn(err.message)
      );
    } else showAlert();
  };

  const messageToWhatsApp = () => {
    let ProductName = "Iphone 12 Pro";
    let Message =
      "Bonjour, je vous contacte pour le produit : " +
      ProductName +
      "que vous vendez chez Maxwin, est-il toujours disponible ?";
    let PhoneNumber = "+212626617611"; //need to be replaced with the product owner number.
    Linking.openURL(`whatsapp://send?text=${Message}&phone=${PhoneNumber}`);
  };

  const shareTheApp = async () => {
    try {
      const result = await Share.share({
        message:
          "MAXWIN | il s'agit d'une application puissante qui arrive lentement et régulièrement pour conquérir le marché ",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.warn(error.message);
    }
  };
  return (
    <SafeAreaView>
      <FAB
        style={{ top: 100, right: 20, zIndex: 1, position: "absolute" }}
        color={COLORS.primary}
        icon={
          <FontAwesome name="whatsapp" size={28} color={COLORS.secondary} />
        }
        onPress={messageToWhatsApp}
      />
      <FAB
        icon={<AntDesign name="sharealt" size={25} color="white" />}
        color={COLORS.primary}
        style={{ top: 180, right: 20, zIndex: 1, position: "absolute" }}
        onPress={shareTheApp}
      />
      <FAB
        icon={
          isFavorite ? (
            <AntDesign name="heart" size={23} color="#D11111" />
          ) : (
            <AntDesign name="hearto" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 260, right: 20, zIndex: 1, position: "absolute" }}
        onPress={addOrRemoveFavorite}
      />
      <FAB
        icon={
          isLiked ? (
            <AntDesign name="like1" size={23} color={COLORS.secondary} />
          ) : (
            <AntDesign name="like2" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 340, right: 20, zIndex: 1, position: "absolute" }}
        onPress={addOrRemoveLikedProduct}
      />
      <ScrollView>
        <ImageSwiper
          images={product.images}
          onClick={() =>
            navigation.navigate("ImagePreview", {
              images: product.images,
            })
          }
        />
        <ProductInformation product={product} />
        <SellerInformations product={product}/>

        <View style={styles.container}>
          <ButtonFill
            title="Apple vendeur "
            loading={false}
            style={{ marginVertical: 10 }}
            onClick={() => alert("appel")}
          />
          <ButtonOutlined
            title="Messagerie"
            style={{ marginVertical: 10 }}
            onClick={() => alert("Messages")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

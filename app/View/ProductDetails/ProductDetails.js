import React, { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Alert,
  Linking,
  Share,
  ToastAndroid,
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
  getLikes,
} from "../../API/APIFunctions";

import { FontAwesome, AntDesign } from "react-native-vector-icons";
import styles from "./ProductDetails.style";
import { COLORS } from "../../GlobalStyle";
import AuthModal from "../../Components/AuthModal/AuthModal";

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const uid = auth.currentUser?.uid;
  let Modal = null;
  const showAlert = () => {
    Alert.alert("Avez-vous un compte ?", "Veuillez vous connecter svp", [
      {
        text: "S'identifier",
        style: "default",
        onPress: () => navigation.navigate("SignIn"),
      },
      {
        text: "Annuler",
        style: "cancel",
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
      ToastAndroid.show(
        "Cet article a été supprimé à vos favoris !",
        ToastAndroid.SHORT
      );
    } else if (uid) {
      addToFavorite(uid, product).catch((err) => console.warn(err.message));
      ToastAndroid.show(
        "Cet article a été ajouté à vos favoris !",
        ToastAndroid.SHORT
      );
    } else Modal.openModal()
  };

  const addOrRemoveLikedProduct = () => {
    if (isLiked) {
      removeLiked(product.id);
    } else if (uid) {
      addToLikedProducts(uid, product).catch((err) =>
        console.warn(err.message)
      );
    } else Modal.openModal()
  };

  const messageToWhatsApp = () => {
    let ProductName = product.title;
    let ownerName = product.owner?.firstName;
    let Message =
      "Salut " +
      ownerName +
      ", je vous contacte à propos de votre annonce sur Maxwin : " +
      ProductName +
      " , est ce que cet article est-il toujours disponible ?";
    let CountryCode = "212";
    let phoneOwner = product?.phoneNumber;
    let PhoneNumber = CountryCode.concat(phoneOwner);
    Linking.openURL(`whatsapp://send?text=${Message}&phone=${PhoneNumber}`);
  };

  const CallOwner = () => {
    let Phone = product?.phoneNumber;
    Linking.openURL(`tel:${Phone}`);
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
  const handleNavigation = () => {
    if (uid) {
      const { owner, title, images } = product;
      if (owner.uid != uid)
        navigation.navigate("ChatView", {
          seller: owner,
          postTitle: title,
          postId: product.id,
          pic: images[0],
        });
      else
        Alert.alert(
          "Désolé(e)",
          "vous êtes le propriétaire de ce produit, vous ne pouvez pas vous envoyer de message"
        );
    } else {
      Modal.openModal()
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {product?.phoneNumber && (
          <FAB
            style={{ top: 80, right: 20, zIndex: 1, position: "absolute" }}
            color="white"
            icon={
              <FontAwesome name="whatsapp" size={28} color={COLORS.secondary} />
            }
            onPress={messageToWhatsApp}
          />
        )}

        <FAB
          icon={<AntDesign name="sharealt" size={25} color="white" />}
          color={COLORS.primary}
          style={{ top: 140, right: 20, zIndex: 1, position: "absolute" }}
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
          style={{ top: 200, right: 20, zIndex: 1, position: "absolute" }}
          onPress={addOrRemoveFavorite}
        />
        <FAB
          icon={
            isLiked ? (
              <AntDesign name="like1" size={23} color="#8BB1E7" />
            ) : (
              <AntDesign name="like2" size={23} color="white" />
            )
          }
          color={COLORS.primary}
          style={{ top: 260, right: 20, zIndex: 1, position: "absolute" }}
          onPress={addOrRemoveLikedProduct}
        />

        <ImageSwiper
          images={product.images}
          onClick={() =>
            navigation.navigate("ImagePreview", {
              images: product.images,
            })
          }
        />
        <ProductInformation product={product} />

        <SellerInformations product={product} />

        <View style={styles.container}>
          {product?.phoneNumber && (
            <ButtonFill
              title="Apple vendeur "
              loading={false}
              style={{ marginVertical: 10 }}
              onClick={CallOwner}
            />
          )}

          <ButtonOutlined
            title="Messagerie"
            style={{ marginVertical: 10 }}
            onClick={handleNavigation}
          />
        </View>
      </ScrollView>
      <AuthModal ref={(el) => (Modal = el)} onClick={()=>{
        Modal.closeModal()
        navigation.navigate("SignIn")}} />
    </SafeAreaView>
  );
}

import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  SafeAreaView,
  Alert,
  Linking,
  Share,
  ToastAndroid,
  Text,
  Dimensions,
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
import AuthModal from "../../Components/AuthModal/AuthModal";

const { width } = Dimensions.get("window");

export default function ProductDetails({ route, navigation }) {
  const { product } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(false)
  const uid = auth.currentUser?.uid;
  let Modal = null;

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
    } else Modal.openModal();
  };

  const addOrRemoveLikedProduct = async() => {
    setLoading(true)
    if (isLiked) {
     removeLiked(product.id).then(()=>setLoading(false));
    } else if (uid) {
     addToLikedProducts(uid, product).then(()=>setLoading(false))
    } else Modal.openModal();
  };

  const messageToWhatsApp = () => {
    let ProductName = product.title;
    let ProductPrice = product.price;
    let ProductCity = product.city;
    let ownerName = product.owner?.username;
    let Message =
      "Salam " +
      ownerName +
      " est ce que votre article " +
      ProductName + ", " + ProductPrice + "dhs sur : " + ProductCity +
      " publié sur l'application Maxwin est toujours disponible ?";
    let CountryCode = "212";
    let phoneOwner = product.owner?.phone;
    let PhoneNumber = CountryCode.concat(phoneOwner);
    Linking.openURL(`whatsapp://send?text=${Message}&phone=${PhoneNumber}`);
  };

  const CallOwner = () => {
    let Phone = product.owner?.phone;
    Linking.openURL(`tel:${Phone}`);
  };

  const shareTheApp = async () => {
    try {
      const result = await Share.share({
        message:
        "Salut, Je partage avec vous Maxwin,la nouvelle application d'achat et de vente au Maroc, N'hésitez pas à utiliser l'application, elle est simple et gratuite, pour télécharger Maxwin cliquez sur le lien suivant : https://play.google.com/store/apps/details?id=com.us.maxwin"
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
      Modal.openModal();
    }
  };
  const renderContent = () => {
    return (
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: "#333",
            marginBottom: 10,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Avez vous un compte ?
        </Text>
        <Text
          style={{
            marginBottom: 2,
            fontSize: 16,
            fontWeight: "600",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Pour completer cette action,veuillez nous connecter s'il vous plait
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <ButtonFill
            loading={false}
            style={{ width: width * 0.4 }}
            title="S'identifier"
            onClick={() => {
              Modal.closeModal();
              navigation.navigate("SignIn");
            }}
          />
          <ButtonOutlined
            style={{ width: width * 0.4 }}
            title="Annuler"
            onClick={()=>Modal.closeModal()}
          />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <ScrollView>
        {product.owner.phone !== "" && (
          <FAB
            style={{ top: 180, right: 20, zIndex: 1, position: "absolute" }}
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
          style={{ top: 240, right: 20, zIndex: 1, position: "absolute" }}
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
          style={{ top: 300, right: 20, zIndex: 1, position: "absolute" }}
          onPress={addOrRemoveFavorite}
        />
        <FAB
        loading={loading}
          icon={
            isLiked ? (
              <AntDesign name="like1" size={23} color="#8BB1E7" />
            ) : (
              <AntDesign name="like2" size={23} color="white" />
            )
          }
          color={COLORS.primary}
          style={{ top: 360, right: 20, zIndex: 1, position: "absolute" }}
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
          {product.owner.phone !== "" && (
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
      <AuthModal ref={(el) => (Modal = el)}>{renderContent()}</AuthModal>
    </SafeAreaView>
  );
}

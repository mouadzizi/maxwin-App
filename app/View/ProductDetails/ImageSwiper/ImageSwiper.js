import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, Image,Alert } from "react-native";
import { FAB } from "react-native-elements";
import { FontAwesome, AntDesign } from "react-native-vector-icons";
import Swiper from "react-native-swiper";
import styles from "./ImageSwiper.style";
import { COLORS } from "../../../GlobalStyle";
import { auth, db } from "../../../API/Firebase";
import { addToFavorite, removeFavorite } from "../../../API/APIFunctions";

export default function ImageSwiper({ images, onClick, post,navigation }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const uid = auth.currentUser?.uid;

  useEffect(() => {
    const _unsub = db
      .collection("users")
      .doc(uid)
      .collection("favorite")
      .onSnapshot((snapShot) => {
        const isFav = snapShot.docs.some(({ id }) => id == post.id);
        setIsFavorite(isFav);
      });
    return () => {
      _unsub();
    };
  }, []);

  const addOrRemoveFavorite = () => {
    if (isFavorite) {
      removeFavorite(post.id);
    } else if (uid) {
      addToFavorite(uid, post).catch((err) => alert(err.message));
    } else showAlert();
  };

  const showAlert=()=>{
    Alert.alert('Info','Authentication Required',[
      {
        text:'Login',
        style:'default',
        onPress:()=>navigation.navigate('SignUp')
      },
      {
        text:'Annuler',
        // onPress:()=>navigation.goBack()
        style:"cancel"
      }
    ])
  }
  return (
    <>
      <Swiper activeDotColor={COLORS.secondary} style={styles.imageContainer}>
        {images.map((item, index) => (
          <TouchableWithoutFeedback key={index} onPress={onClick}>
            <Image
              key={index}
              source={{ uri: item }}
              resizeMode="cover"
              style={styles.imageSlider}
            />
          </TouchableWithoutFeedback>
        ))}
      </Swiper>

      <FAB
        style={{ top: 190, right: 20, zIndex: 1, position: "absolute" }}
        color="rgba(255, 255, 255, 0.8)"
        icon={
          <FontAwesome name="whatsapp" size={28} color={COLORS.secondary} />
        }
        onPress={() => alert("Whats app")}
      />
      <FAB
        icon={<AntDesign name="sharealt" size={25} color="white" />}
        color={COLORS.primary}
        style={{ top: 250, right: 20, position: "absolute" }}
        onPress={() => alert("Partagé")}
      />
      <FAB
        icon={
          isFavorite ? (
            <AntDesign name="heart" size={23} color={COLORS.third} />
          ) : (
            <AntDesign name="hearto" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 310, right: 20, position: "absolute" }}
        onPress={addOrRemoveFavorite}
      />
      <FAB
        icon={
          isLiked ? (
            <AntDesign name="like1" size={23} color={COLORS.third} />
          ) : (
            <AntDesign name="like2" size={23} color="white" />
          )
        }
        color={COLORS.primary}
        style={{ top: 370, right: 20, position: "absolute" }}
        onPress={() => setIsLiked(!isLiked)}
      />
    </>
  );
}

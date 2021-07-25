import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS } from "../../GlobalStyle";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

import { ScrollView, View, Text, Alert } from "react-native";

import styles from "./AddProductView.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextView from "../../Components/TextView/TextView";
import ImageModal from "./Modals/ImageModal";
import AddProductStep from "../../Components/AddProductStep";
import ButtonFill from "../../Components/Button/ButtonFill";
import CategoryModal from "./Modals/CategoryModal";
import { auth } from "../../API/Firebase";

export default function AddProductView({ navigation }) {
  const [product, setProduct] = useState({});
  let Modals = [];
  const getPhotos = async () => {
    return await AsyncStorage.getItem("selectedImage");
  };

  useFocusEffect(
    useCallback(() => {
      const user = auth.currentUser;
      if (user) {
        console.log(user.email);
      } else showAlert();
      getPhotos().then((items) => {
        const imgs = JSON.parse(items);
        if (imgs) {
          setProduct({ ...product, images: imgs });
        }
      });
      return () => {
        setProduct({});
        AsyncStorage.removeItem("selectedImage");
      };
    }, [])
  );

  const openModalCategory = () => {
    Modals[1].openModal();
  };

  const chooseCategory = (category, { title }) => {
    setProduct({ ...product, category: [title, category] });
    Modals[1].closeModal();
  };

  const NextHandler = () => {
    navigation.navigate("InformationStep", {
      product: product,
    });
  };

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
    <View style={{ marginBottom: 70 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={15}
          style={styles.title}
        >
          veuillez sélectionner des images
        </TextView>

        <AddProductStep
          nbImages={product.images ? product.images.length : 0}
          onclick={() => Modals[0].openModal()}
          title="Choisir des images"
          iconName="camera"
        />

        <TextView
          fontFamily="Source-Regular"
          fontSize={15}
          style={styles.title}
        >
          veuillez sélectionner votre Categorie
        </TextView>

        <AddProductStep
          categorySelected={product.category ? product.category[1] : null}
          onclick={openModalCategory}
          title="Choisir votre Categorie"
          iconName="list"
        />

        <TextView
          fontFamily="Source-Regular"
          fontSize={15}
          style={styles.title}
        >
          Informations genérales
        </TextView>

        <Input
          label="Titre *"
          placeholder="Merci d'entrer le Nom exact de votre article"
          containerStyle={{ marginTop: 20 }}
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
          onChangeText={(value) => setProduct({ ...product, title: value })}
          value={product.title}
        />

        <Input
          label="Prix *"
          keyboardType="phone-pad"
          placeholder="Merci d'entrer le prix de votre article"
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary, fontSize: 15 }}
          onChangeText={(value) =>{
            try {
              setProduct({ ...product, price: parseFloat(value) })
            } catch (error) {
              alert(error)
            }
          }}
          value={product.price}
        />

        {/* Picker for city */}
        <View style={styles.pickerView}>
          <Text style={styles.label}>Ville *</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
            selectedValue={product.city}
            onValueChange={(value) => setProduct({ ...product, city: value })}
          >
            <Picker.Item
              label="Choisissez une Ville"
              value=""
              color={COLORS.Grey[400]}
            />
            <Picker.Item label="AL Hoceima" value="ALHoceima" />
            <Picker.Item label="Agadir" value="Agadir" />
            <Picker.Item label="Casablanca" value="Casablanca" />
            <Picker.Item label="Dakhla" value="Dakhla" />
            <Picker.Item label="Fès" value="Fès" />
            <Picker.Item label="Kénitra" value="Kénitra" />
            <Picker.Item label="Marrakech" value="Marrakech" />
            <Picker.Item label="Meknès" value="Meknès" />
            <Picker.Item label="Ouajda" value="Ouajda" />
            <Picker.Item label="Rabat" value="Rabat" />
            <Picker.Item label="Tanger" value="Tanger" />
            <Picker.Item label="Tetouan" value="Tetouan" />
          </Picker>
        </View>

        <ButtonFill
          disable={
            !product.title ||
            !product.price ||
            !product.city ||
            !product.category ||
            !product.images ||
            product.images.length === 0
          }
          title="Suivant"
          style={{ marginBottom: 40 }}
          onClick={()=>console.log(product)}
          loading={false}
        />
      </ScrollView>

      <ImageModal
        ref={(el) => (Modals[0] = el)}
        data={product.images}
        onClick={() => navigation.navigate("ImageBrowser")}
      />
      <CategoryModal ref={(el) => (Modals[1] = el)} onClick={chooseCategory} />
    </View>
  );
}

import React, { useRef, useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS } from "../../GlobalStyle";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

import { ScrollView, SafeAreaView, View, Text } from "react-native";
import { Modalize } from "react-native-modalize";

import styles from "./AddProductView.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextView from "../../Components/TextView/TextView";
import ImageModal from "./Modals/ImageModal";
import AddProductStep from "../../Components/AddProductStep";
import ButtonFill from "../../Components/Button/ButtonFill";
import CategoryModal from "./Modals/CategoryModal";

export default function AddProductView({ navigation }) {
  const [product, setProduct] = useState({});
  const [imagesArr, setImages] = useState([]);

  let Modals = [];


  const getPhotos = async () => {
    return await AsyncStorage.getItem("selectedImage");
  };

  useFocusEffect(
    useCallback(() => {
      getPhotos().then((items) => {
        const imgs = JSON.parse(items);
        setImages(imgs);
      });
      return () => {
        AsyncStorage.clear();
        setImages([]);
        setProduct({})
      };
    }, [])
  );

  const openModalCategory = () => {
    Modals[1].openModal();
  };

  const chooseCategory = (category) => {
    setProduct({ ...product, category: category })
     Modals[1].closeModal();
  }

  const NextHandler = () => {
    navigation.navigate("InformationStep", {
      CategoryName: product.category,
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerHeight}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <TextView
            fontFamily="Source-Regular"
            fontSize={15}
            style={styles.title}
          >
            veuillez sélectionner des images
          </TextView>

          <AddProductStep
            nbImages={imagesArr ? imagesArr.length : 0}
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
            categorySelected={product.category}
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
            errorMessage="this is an error"
            labelStyle={{ color: COLORS.primary }}
          />
          <Input
            label="Prix *"
            placeholder="Merci d'entrer le prix de votre article"
            style={{ fontSize: 15 }}
            labelStyle={{ color: COLORS.primary, fontSize: 15 }}
          />

          {/* Picker for city */}
          <View style={styles.pickerView}>
            <Text style={styles.label}>Ville *</Text>
            <Picker
              style={styles.pickerInput}
              mode="dialog"
              dropdownIconColor={COLORS.primary}
              selectedValue={product.city}
              onValueChange={(itemValue) => setProduct({...product,city:itemValue})}
            >
              <Picker.Item
                label="Choisissez une Ville"
                value=""
                color={COLORS.Grey[400]}
              />
              <Picker.Item label="Tanger" value="Tanger" />
              <Picker.Item label="Agadir" value="Agadir" />
              <Picker.Item label="Merakech" value="Merakech" />
              <Picker.Item label="Casablanca" value="Casablanca" />
              <Picker.Item label="Rabat" value="Rabat" />
              <Picker.Item label="Tetouan" value="Tetouan" />
            </Picker>
          </View>

          <ButtonFill
            title="Suivant"
            style={{ marginBottom: 40 }}
            onClick={NextHandler}
          />
        </ScrollView>
      </View>

      <ImageModal
        ref={(el) => (Modals[0] = el)}
        data={imagesArr}
        onClick={() => navigation.navigate("ImageBrowser")}
      />
      <CategoryModal
        ref={(el) => (Modals[1] = el)}
         onClick={chooseCategory}
      />
    </SafeAreaView>
  );
}

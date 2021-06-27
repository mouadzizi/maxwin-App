import React, { useState, useCallback, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { COLORS } from "../../GlobalStyle";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";

import { ScrollView, View, Text, KeyboardAvoidingView } from "react-native";

import styles from "./AddProductView.style";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextView from "../../Components/TextView/TextView";
import ImageModal from "./Modals/ImageModal";
import AddProductStep from "../../Components/AddProductStep";
import ButtonFill from "../../Components/Button/ButtonFill";
import CategoryModal from "./Modals/CategoryModal";


export default function AddProductView({ navigation }) {
  const [product, setProduct] = useState({});
  let Modals = [];

  const getPhotos = async () => {
    return await AsyncStorage.getItem("selectedImage");
  };

  useFocusEffect(
    useCallback(() => {
      getPhotos().then((items) => {
        const imgs = JSON.parse(items);
        if (imgs) {
          setProduct({ ...product, images: imgs });
        }
      });
      return () => {
        setProduct({});
        AsyncStorage.clear();
      };
    }, [])
  );

  const openModalCategory = () => {
    Modals[1].openModal();
  };

  const chooseCategory = (category) => {
    setProduct({ ...product, category: category });
    Modals[1].closeModal();
  };

  const NextHandler = () => {
    navigation.navigate("InformationStep", {
      product: product,
    });
  };

  return (
    <View>
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
          labelStyle={{ color: COLORS.primary }}
          onChangeText={(input) => setProduct({ ...product, title: input })}
        />
        <Input
          label="Prix *"
          keyboardType="numeric"
          placeholder="Merci d'entrer le prix de votre article"
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary, fontSize: 15 }}
          onChangeText={(input) =>
            setProduct({ ...product, price: Number.parseFloat(input) })
          }
        />

        {/* Picker for city */}
        <View style={styles.pickerView}>
          <Text style={styles.label}>Ville *</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
            selectedValue={product.city}
            onValueChange={(itemValue) =>
              setProduct({ ...product, city: itemValue })
            }
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
          disable={!product.title || !product.price || !product.city || !product.category}
          title="Suivant"
          style={{ marginBottom: 40 }}
          onClick={NextHandler}
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

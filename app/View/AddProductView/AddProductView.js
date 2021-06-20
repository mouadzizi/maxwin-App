import React, { useRef } from "react";
import styles from "./AddProductView.style";
import ImageStep from "./ImageStep";
import CategoryStep from "./CategoryStep";
import InformationStep from "./InformationStep";

import { Modalize } from "react-native-modalize";
import TextView from '../../Components/TextView/TextView'
import AddProductStep from '../../Components/AddProductStep';
import { ScrollView } from "react-native-gesture-handler";
import { View } from "react-native";
import { SafeAreaView } from "react-native";

export default function AddProductView() {

  const ModalImageRef = useRef();
  const ModalCategoryRef = useRef();


  const openModalImage = () => {
    ModalImageRef.current.open();
  };

  const openModalCategory = () => {
    ModalCategoryRef.current.open();
  };


  return (
    <ScrollView style={styles.container}>
      <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}> veuillez sélectionner des images </TextView>
      <AddProductStep onclick={openModalImage} title="Choisir des images" iconName="camera"/>
      <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}>veuillez sélectionner votre Categorie </TextView>
      <AddProductStep onclick={openModalCategory} title="Choisir votre Categorie" iconName="list"/>
      <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}>pouvez-vous saisir des informations les informations de votre produit</TextView>

      <InformationStep/>
      <Modalize ref={ModalImageRef}  >
        <ImageStep />
      </Modalize>

      <Modalize ref={ModalCategoryRef}  >
        <CategoryStep/>
      </Modalize>


    </ScrollView>
  );
}

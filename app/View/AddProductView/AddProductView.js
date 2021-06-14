import React, { useRef } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./AddProductView.style";
import ImageStep from "./ImageStep";
import CategoryStep from "./CategoryStep";
import InformationStep from "./InformationStep";

import { Modalize } from "react-native-modalize";
import { GlobalStyle } from '../../GlobalStyle'
import TextView from '../../Components/TextView/TextView'

export default function AddProductView() {

  const ModalRef = useRef();

  const openModal = () => {
    ModalRef.current.open();
  };


  return (
    <View style={styles.container}>
      <TextView style={GlobalStyle.H3}> veuillez sélectionner des images </TextView>

      <TouchableOpacity
        style={{ backgroundColor: "#CCC", height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
        onPress={openModal}>
        <Text >choisir des images</Text>
      </TouchableOpacity>

      <TextView style={[GlobalStyle.H3, { marginTop: 25 }]}> veuillez sélectionner votre Categorie</TextView>

      <TouchableOpacity
        style={{ backgroundColor: "#CCC", height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
        onPress={openModal}>
        <Text>Categories</Text>
      </TouchableOpacity>

      <Modalize ref={ModalRef}  >
        <ImageStep />
      </Modalize>

      <InformationStep />

    </View>
  );
}

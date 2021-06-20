import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text, ScrollView, SafeAreaView } from "react-native";
import { useFocusEffect } from '@react-navigation/native'
import styles from "./AddProductView.style";
import InformationStep from "./InformationStep";
import AsyncStorage from '@react-native-async-storage/async-storage'
import TextView from '../../Components/TextView/TextView';
import ImageModal from './Modals/ImageModal'
import AddProductStep from '../../Components/AddProductStep';
import { Modalize } from "react-native-modalize";
import CategoryStep from "./CategoryStep";

export default function AddProductView({ navigation }) {
  const [imagesArr, setImages] = useState([])
  const ModalImage = React.forwardRef((props, ref) => <ImageModal ref={ref} {...props} />);

  const ModalCategoryRef = useRef();
  let ModalImageRef = React.createRef()

  React.useEffect(() => {
  }, [])

  const getPhotos = async () => {
    return await AsyncStorage.getItem('selectedImage');
  };

  useFocusEffect(React.useCallback(() => {
    getPhotos().then(items => {
      const imgs = JSON.parse(items)
      setImages(imgs)
    })
    return () => {
      AsyncStorage.clear()
      setImages([])
    }
  }, []))

  const openModalCategory = () => {
    ModalCategoryRef.current.open();
  };


  return (
    <SafeAreaView style={{ flex: 1 }} >
      <ScrollView  style={styles.container}>
        <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}> veuillez sélectionner des images </TextView>
        <AddProductStep nbImages={imagesArr ? imagesArr.length : 0} onclick={() => ModalImageRef.openModal()} title="Choisir des images" iconName="camera" />
        <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}>veuillez sélectionner votre Categorie </TextView>
        <AddProductStep onclick={openModalCategory} title="Choisir votre Categorie" iconName="list" />
        <TextView fontFamily="Source-Regular" fontSize={15} style={styles.title}>pouvez-vous saisir des informations les informations de votre produit</TextView>
        <InformationStep />
      </ScrollView>
      <ModalImage ref={el => ModalImageRef = el} data={imagesArr} onClick={() => navigation.navigate('ImageBrowser')} />
      <Modalize ref={ModalCategoryRef}  >
        <CategoryStep />
      </Modalize>
    </SafeAreaView>
  );
}

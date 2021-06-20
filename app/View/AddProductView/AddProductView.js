import React, { useRef, useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useFocusEffect } from '@react-navigation/native'
import styles from "./AddProductView.style";
import InformationStep from "./InformationStep";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GlobalStyle } from '../../GlobalStyle'
import TextView from '../../Components/TextView/TextView';
import ImageModal from './Modals/ImageModal'

export default function AddProductView({ navigation, route }) {
  const [imagesArr, setImages] = useState([])
  const  MyComponent = React.forwardRef((props, ref) => <ImageModal ref={ref} {...props}/>);

  let modal = React.createRef()
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


  return (
    <View style={styles.container}>
      <TextView style={GlobalStyle.H3}> veuillez sélectionner des images </TextView>
      <TouchableOpacity
        style={{ backgroundColor: "#CCC", height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
        onPress={()=>modal.openModal()}
        >
        <Text >choisir des images</Text>
      </TouchableOpacity>

      <TextView style={[GlobalStyle.H3, { marginTop: 25 }]}> veuillez sélectionner votre Categorie</TextView>

      <TouchableOpacity
        style={{ backgroundColor: "#CCC", height: 50, borderRadius: 15, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}
        >
        <Text>Categories</Text>
      </TouchableOpacity>
      <InformationStep />
      <MyComponent data={imagesArr} onClick={()=>navigation.navigate('ImageBrowser')} ref={el=>modal=el} />

    </View>
  );
}

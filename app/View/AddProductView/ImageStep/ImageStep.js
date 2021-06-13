import React from "react";
import { View, Text, Alert, FlatList } from "react-native";
import styles from "./ImageStep.style";
import ImagePickerHolder from "../../../Components/ImagePicker";
import {GlobalStyle} from '../../../GlobalStyle';

export default function ImageStep() {
  const DATA =[
    { 
      id: 'zSFsdDQSf3564',
      image: "https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg"
    },
    {
      id: 'zSFSFh356423dsSQD',
      image: "https://www.focus2move.com/wp-content/uploads/2020/08/Tesla-Roadster-2020-1024-03.jpg"
    },
    {
      id: 'zSFSFh356423dsSQD',
      image: undefined,
    },
    
  ]

  const ItemRender = ({item}) => {
    return(
      <ImagePickerHolder
        uri={item.image}
        onClick={()=> Alert.alert('Image Picker')}
      />
    )
  }
  return (
    <View style={styles.container}>
      
      <FlatList
      style={{marginTop: 20}}
      data={DATA}
      keyExtractor={(item)=>item.id}
      renderItem={ItemRender}
      numColumns={2}
      />
      


    </View>
  );
}

import React from "react";
import { View, Text, Alert, FlatList } from "react-native";
import styles from "./ImageStep.style";
import ImagePickerHolder from "../../../Components/ImagePicker";
import { GlobalStyle } from '../../../GlobalStyle';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export default function ImageStep({ onClick, data }) {
  const DATA = [

    {
      id: 'zSFSFh356423dsSQD',
      image: undefined,

    },

  ]
  const ItemRender = ({ item }) => {
    return (
      <ImagePickerHolder
        uri={item.uri}
        onClick={onClick}
      />
    )
  }
  return (
    <View style={styles.container}>

      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={ItemRender}
        numColumns={2}
        ListFooterComponent={
        <ImagePickerHolder
          uri={null}
          onClick={onClick} /> }
        />
    </View>
  );
}

import React from "react";
import { View, FlatList } from "react-native";
import styles from "./ImageStep.style";
import ImagePickerHolder from "../../../Components/ImagePicker";

export default function ImageStep({ onClick, data }) {
  
  const ItemRender = ({ item }) => {
    return <ImagePickerHolder uri={item.uri} onClick={onClick} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={ItemRender}
        numColumns={2}
        ListFooterComponent={<ImagePickerHolder uri={null} onClick={onClick} />}
      />
    </View>
  );
}

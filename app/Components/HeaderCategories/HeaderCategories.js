import React from "react";
import { Alert, FlatList } from "react-native";
import {Feather} from "react-native-vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './HeaderCategories.style'
import Category from "../Button/CategoryButton";
import { COLORS } from "../../GlobalStyle";

export default function HeaderCategories() {
  const DATA = [
    {
      id: "SDSDgf25677984",
      categoryName: "Voiture",
      iconName: "Car",
    },
    {
      id: "SDSDgf2933R84",
      categoryName: "Appartement",
      iconName: "Apartment",
    },

    {
      id: "SDSDgf6782984",
      categoryName: "Decoration",
      iconName: "Lamp",
    },

    {
      id: "SDSDgfss2984",
      categoryName: "Villa",
      iconName: "Villa",
    },

    {
      id: "SDSDgf26984",
      categoryName: "Télévisions",
      iconName: "Tv",
    },
    {
      id: "SDSDgf2fff6984",
      categoryName: "Vêtements Homme",
      iconName: "MenClothes",
    },
  ];

  const Footer = ()  => {
      return(
        <TouchableOpacity 
        style={styles.footer}
        onPress={() => Alert.alert('Filter')}>
            <Feather name="more-vertical" size={30} color= {COLORS.primary}/>
        </TouchableOpacity>
      
      )
  }

  return (
    <>
      <FlatList
        style={{ marginTop: 10 }}
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <Category
            iconName={item.iconName}
            onClick={() => Alert.alert(item.categoryName)}
          />
        )}
        ListFooterComponent={<Footer/>}
      />
    </>
  );
}

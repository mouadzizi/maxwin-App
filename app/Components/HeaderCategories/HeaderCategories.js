import React from "react";
import { Alert, FlatList } from "react-native";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./HeaderCategories.style";
import Category from "../Button/CategoryButton";
import { COLORS } from "../../GlobalStyle";

export default function HeaderCategories({ navigation }) {
  const DATA = [
    {
      id: "SDSDgf25677984",
      categoryName: "Voitures",
      iconName: "Car",
    },
    {
      id: "SDSDgfss2984",
      categoryName: "Maisons & Villas",
      iconName: "Villa",
    },
    {
      id: "SDSDgf2933R84",
      categoryName: "Appartements",
      iconName: "Apartment",
    },

    {
      id: "SDSDgf6782984",
      categoryName: "Meubles et déco",
      iconName: "Lamp",
    },
    {
      id: "SDSDgf2fqFFdDA6984",
      categoryName: "Téléphones",
      iconName: "Phone",
    },
    {
      id: "SDSDgf2asCC6984",
      categoryName: "Ordinateurs",
      iconName: "Laptop",
    },
    {
      id: "SDSDgf26984",
      categoryName: "Télévisions",
      iconName: "Tv",
    },
    {
      id: "SDSDgf2fff6984",
      categoryName: "Vêtements Hommes",
      iconName: "MenClothes",
    },
  ];

  const Footer = () => {
    return (
      <TouchableOpacity
        style={styles.footer}
        onPress={() => navigation.navigate("FilterView")}
      >
        <Feather name="more-vertical" size={30} color={COLORS.primary} />
      </TouchableOpacity>
    );
  };

  return ( 
    <>
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <Category
            iconName={item.iconName}
            onClick={() =>
              navigation.navigate("ResultView", { collection: item.categoryName })
            }
          />
        )}
        ListFooterComponent={<Footer />}
      />
    </>
  );
}

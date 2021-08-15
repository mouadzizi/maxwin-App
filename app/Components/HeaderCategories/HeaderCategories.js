import React from "react";
import { FlatList } from "react-native";
import { Feather } from "react-native-vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./HeaderCategories.style";
import Category from "../Button/CategoryButton";
import { COLORS } from "../../GlobalStyle";

export default function HeaderCategories({ navigation }) {
  // Voiture ----Done
  // Accessoires auto ----Done
  // Appartement ----Done
  // Électroménagers ----Done
  // Meubles & déco ----Done
  // Téléphones ----Done
  // Ordinateurs ----Done
  // Télévisions ----Done
  // Vêtements hommes ----Done
  // Chaussures hommes ----Done
  // Vêtements femmes ----Done
  // Chaussures femmes ----Done
  // Montres bijoux & accessoires ----Done
  // Vêtements enfants
  // Matériels Pro
  // Services & travaux
  const DATA = [
    {
      id: "SDSDgf2567984",
      categoryName: "Voitures",
      iconName: "Car",
    },
    {
      id: "SDSDgf25677984",
      categoryName: "ccessoires Auto",
      iconName: "carAccesory",
    },
    {
      id: "SDSDgf28993R84",
      categoryName: "Appartements",
      iconName: "Villa",
    },
    {
      id: "SDSDgf289933R84",
      categoryName: "Electroménagers",
      iconName: "ElectroMenage",
    },
    {
      id: "SDSDgf456782984",
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
      id: "SDSDgfFDSQF2ff6984",
      categoryName: "Vêtements Hommes",
      iconName: "MenClothes",
    },
    {
      id: "SDSDgfFDSQF2ff3f6984",
      categoryName: "haussures Hommes",
      iconName: "MenShoes",
    },
    
    {
      id: "SDSDgf32421F4246984",
      categoryName: "Vêtements Femmes",
      iconName: "WomenClothes",
    },
    {
      id: "SDSDgf2D21344246984",
      categoryName: "Chaussures Femmes",
      iconName: "WomenShoes",
    },
    {
      id: "Ssdqf224246984",
      categoryName: "Montres, Bijoux et accessoires",
      iconName: "MakeUp",
    },
    {
      id: "Ssdqf2242469AF384",
      categoryName: "Matériels professionnels",
      iconName: "MaterialPro",
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
              navigation.navigate("ResultView", {
                collection: item.categoryName,
              })
            }
          />
        )}
        ListFooterComponent={<Footer />}
      />
    </>
  );
}

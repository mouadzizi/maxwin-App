import React, { useRef } from "react";
import { View, Text } from "react-native";
import { Modalize } from "react-native-modalize";

export default function CategoryStep() {
  const modalRef = useRef();

  const DATA = [
    {
      title: "VEHICULES",
      data: [
        "Voitures",
        "Location de Voiture",
        "Motos & vélos",
        "Véhicules professionnels",
        "Accessoires Auto",
      ],
    },
    {
      title: "IMMOBILIER",
      data: [
        "Appartements",
        "Maisons & Villas",
        "Terrains",
        "Commerces & Bureaux",
        "Location courte durée (vacances)",
        "Location long durée",
      ],
    },

    {
      title: "MAISON & DECO",
      data: ["Electroménagers", "Meubles et déco"],
    },

    {
      title: "INFORMATIQUE ET ELECTRONIQUE",
      data: [
        "Téléphones",
        "Tablettes",
        "Ordinateurs",
        "Jeux vidéo & Consoles",
        "Télévisions",
        "Appareils photo",
        "Accessoires informatique",
        "Accessoires H-TECH",
      ],
    },

    {
      title: "ESPACE HOMMES",
      data: [
        "Vêtements Hommes",
        "Chaussures Hommes",
        "Montres et accessoires",
        "Produits de bien être",
      ],
    },

    {
      title: "ESPACE FEMMES",
      data: [
        "Vêtements Femmes",
        "Chaussures Femmes",
        "Montres, Bijoux et accessoires",
        "Maquillage et produits de bien être",
      ],
    },

    {
      title: "ESPACE BEBES ET ENFANTS",
      data: ["Vêtements bébés & enfants", "Equipments bébés & enfants"],
    },

    {
      title: "MATERIELS ET SERVICES",
      data: [
        "Matériels professionnels",
        "Services et travaux professionnels",
        "Formations & autres",
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        setItem({ categorie: item });
        catModRef.current.close();
      }}
      style={styles.item}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  );
  const renderSectionHeader = ({ section }) => (
    <View style={styles.header}>
      <Text style={styles.header__name}>{section.title.toUpperCase()}</Text>
    </View>
  );

  return (
    <Modalize
      snapPoint={350}
      ref={modalRef}
      sectionListProps={{
        sections: DATA,
        renderItem: renderItem,
        renderSectionHeader: renderSectionHeader,
        keyExtractor: (item, index) => `${item.title}-${index}`,
        showsVerticalScrollIndicator: false,
      }}
    />
  );
}

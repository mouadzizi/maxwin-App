import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Modalize } from 'react-native-modalize';
import styles from './AddProductView.style'
import Categorie from './Blocks/ChooseCategorie/Categorie'
import ImagesView from './Blocks/Images/Images';
import { ImageBrowser } from 'expo-image-picker-multiple'


export default function AddProductView() {
    const [item, setItem] = useState({
        categorie: ''
    })
    const catModRef = React.createRef()
    const imgModRef = React.createRef()
    const DATA = [
        {
            title: 'VEHICULES',
            data: [
                'Voitures',
                'Location de Voiture',
                'Motos & vélos',
                'Véhicules professionnels'
            ]
        },

        {
            title: 'IMMOBILIER',
            data: [
                'Appartements',
                'Maisons & Villas',
                'Terrains',
                'Commerces & Bureaux',
                'Location courte durée (vacances)',
                'Location long durée',
            ]
        },

        {
            title: 'MAISON & DECO',
            data: ['Electroménagers', 'Meubles et déco']
        },

        {
            title: 'INFORMATIQUE ET ELECTRONIQUE',
            data: [
                'Téléphones',
                'Tablettes',
                'Ordinateurs',
                'Jeux vidéo & Consoles',
                'Télévisions',
                'Appareils photo',
                'Accessoires informatique',
                'Accessoires H-TECH',
            ]
        },

        {
            title: 'ESPACE HOMMES',
            data: [
                'Vêtements Hommes',
                'Chaussures Hommes',
                'Montres et accessoires',
                'Produits de bien être',
            ]
        },

        {
            title: 'ESPACE FEMMES',
            data: [
                'Vêtements Femmes',
                'Chaussures Femmes',
                'Montres, Bijoux et accessoires',
                'Maquillage et produits de bien être',
            ]
        },

        {
            title: 'ESPACE BEBES ET ENFANTS',
            data: [
                'Vêtements bébés & enfants',
                'Equipments bébés & enfants',
            ]
        },

        {
            title: 'MATERIELS ET SERVICES',
            data: [
                'Matériels professionnels',
                'Services et travaux professionnels',
                'Formations & autres'
            ]
        }
    ];

    const openModal = () => {
        catModRef.current.open()
    }
    const openImagesModal = () => {
        imgModRef.current.open()
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => {
            setItem({ categorie: item })
            catModRef.current.close()
        }} style={styles.item} >
            <Text >{item}</Text>
        </TouchableOpacity>
    );
    const renderSectionHeader = ({ section }) => (
        <View style={styles.header}>
            <Text style={styles.header__name}>{section.title.toUpperCase()}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Categorie categorie={item.categorie} onPress={openModal} />
            <Modalize ref={catModRef}
                sectionListProps={{
                    sections: DATA,
                    renderItem: renderItem,
                    renderSectionHeader: renderSectionHeader,
                    keyExtractor: (item, index) => `${item.title}-${index}`,
                }}
            />
            <ImagesView onPress={openImagesModal} />
            <Modalize adjustToContentHeight ref={imgModRef}>
                <ImageBrowser
                   
                />
            </Modalize>
        </View>
    )
}

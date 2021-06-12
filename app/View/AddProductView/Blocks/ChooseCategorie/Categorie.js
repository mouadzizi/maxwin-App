import React from 'react'
import {  Text, View, TouchableOpacity } from 'react-native';
import {s} from './Categorie.style'

export default function Categorie({categorie,onPress}) {
    return (
        <View style={s.container} >
            <Text style={s.title}> Categorie* </Text>
            <TouchableOpacity onPress={onPress} style={s.button} >
            <Text style={s.title}> Choisir une Categorie </Text>
            </TouchableOpacity>
            <Text style={s.cat}> {categorie || 'No categorie'  } </Text>
        </View>
    )
}



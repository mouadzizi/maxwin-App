import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { s } from './Images.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Images({ photos,onPress }) {

    const renderItem = ({ item, index }) => {
        <View style={{ margin: 10 }}>
            <MaterialCommunityIcons
                name='camera-plus'
                color='black'
                size={50}
            />
        </View>
    }
    return (
        <View style={s.conainer} >
            <Text style={s.title} > Images </Text>
            <TouchableOpacity onPress={onPress} >
                <MaterialCommunityIcons
                    name='camera-plus'
                    color='black'
                    size={50}
                    style={s.addIcon}
                />
            </TouchableOpacity>

        </View>
    )
}



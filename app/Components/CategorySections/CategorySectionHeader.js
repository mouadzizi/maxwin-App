import React from 'react'
import { View } from 'react-native'
import TextView from '../TextView/TextView'
import {styles} from './CategorySectionHeader.style'

export default function CategorySectionHeader({section}) {
    return (
        <View style={styles.header}>
            <TextView style={styles.header__name}>{section.title.toUpperCase()}</TextView>
        </View>
    )
}



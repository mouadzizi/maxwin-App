import React from 'react'
import { View } from 'react-native'
import TextView from '../TextView/TextView'
import styles from './CategorySectionHeader.style'

function CategorySectionHeader({section}) {
    return (
        <View style={styles.header}>
            <TextView style={styles.text} fontSize={20}>{section.title.toUpperCase()}</TextView>
        </View>
    )
}

export default React.memo(CategorySectionHeader)


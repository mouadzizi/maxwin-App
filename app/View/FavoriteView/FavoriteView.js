import React from 'react'
import { View, Text } from 'react-native'
import styles from './FavoriteView.style';
import FavoriteSection from './FavoriteSection'

export default function FavoriteView() {
    return (
        <View style={styles.container}>
            <FavoriteSection/>
        </View>
    )
}

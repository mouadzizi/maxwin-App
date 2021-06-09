import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './HeaderButton.style'

export default function HeaderButton() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>See All</Text>
        </TouchableOpacity>
    )
}

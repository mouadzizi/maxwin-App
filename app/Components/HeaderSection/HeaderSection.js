import React from 'react'
import { View, Text } from 'react-native'
import styles from './HeaderSection.style'
import HeaderButton from '../Button/HeaderButton'
export default function headerSection({
    title,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.container2}>
            <HeaderButton titleButton="Voir tout"/>
            </View>

            
        </View>
    )
}

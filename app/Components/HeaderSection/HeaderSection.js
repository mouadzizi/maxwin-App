import React from 'react'
import { View, Text } from 'react-native'
import styles from './HeaderSection.style'
import HeaderButton from '../Button/HeaderButton'
import TextView from '../../Components/TextView/TextView'
export default function headerSection({
    title,
}) {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            <TextView h1 bold s={styles.title}>{title}</TextView>
            </View>

            <View style={styles.container2}>
            <HeaderButton titleButton="Voir tout"/>
            </View>

            
        </View>
    )
}

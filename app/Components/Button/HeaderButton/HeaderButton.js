import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './HeaderButton.style'
import {Ionicons} from 'react-native-vector-icons'
import { COLORS } from '../../../GlobalStyle';
import TextView from '../../../Components/TextView/TextView'

export default function HeaderButton({
    titleButton,
}) {
    return (
        <TouchableOpacity style={styles.container}>
            <TextView h3 s={styles.title}>{titleButton}</TextView>
            <Ionicons name="arrow-forward" color={COLORS.primary} size={19} style={{marginLeft : 5}}/>
        </TouchableOpacity>
    )
}

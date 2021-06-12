import React from 'react'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './HeaderButton.style'
import {Ionicons} from 'react-native-vector-icons'
import { COLORS } from '../../../GlobalStyle'

export default function HeaderButton({
    titleButton,
}) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>{titleButton}</Text>
            <Ionicons name="arrow-forward" color={COLORS.primary} size={19} style={{marginLeft : 5}}/>
        </TouchableOpacity>
    )
}

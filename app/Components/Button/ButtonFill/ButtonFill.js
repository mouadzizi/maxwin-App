import React from 'react'
import TextView from '../../TextView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './ButtonFill.style'

export default function ButtonFill({onClick, title, style}) {
    return (
        <TouchableOpacity 
        style={[styles.container, style]}
        onPress={onClick}>
            <TextView fontFamily="Source-Regular"  fontSize={20} style={{color : 'white'}}>{title}</TextView>
        </TouchableOpacity>
    )
}

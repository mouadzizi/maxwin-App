import React from 'react'
import { StyleSheet,  TouchableOpacity, View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/Fontisto';
import {COLORS} from '../../GlobalStyle'
import {styles} from './DoneButton.style'

export default function DoneButton({onPress}) {
    return (
       <TouchableOpacity style={styles.container} onPress={onPress} >
            <FontAwesome  name='check' size={20} color={COLORS.light[100]} />
       </TouchableOpacity>
    )
}



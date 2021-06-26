import React from 'react'
import TextView from '../../TextView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './ButtonFill.style'

export default function ButtonFill({onClick, title, style, disable}) {
    const handlerClick = () => {
        if(!disable){
            onClick();
        }
    } 
    return (
        <TouchableOpacity 
        style={disable ? [styles.containerDisable, style] : [styles.container, style]}
        onPress={handlerClick}>
            <TextView fontFamily="Source-Regular"  fontSize={20} style={{color : 'white'}}>{title}</TextView>
        </TouchableOpacity>
    )
}

import React from 'react'
import TextView from '../../TextView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './ButtonOutlined.style'
import { COLORS } from '../../../GlobalStyle'

export default function ButtonFill({onClick, title, style, disable, fontSize}) {
    const handlerClick = () => {
        if(!disable){
            onClick();
        }
    } 
    return (
        <TouchableOpacity 
        style={disable ? [styles.containerDisable, style] : [styles.container, style]}
        onPress={handlerClick}>
            <TextView fontFamily="Source-Regular"  fontSize={fontSize ? fontSize : 18} style={{color : COLORS.primary}}>{title}</TextView>
        </TouchableOpacity>
    )
}

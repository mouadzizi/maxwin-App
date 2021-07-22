import React from 'react'
import TextView from '../../TextView'
import {ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './ButtonFill.style'

export default function ButtonFill({onClick, title, style, disable,loading}) {
    const handlerClick = () => {
        if(!disable || loading){
            onClick();
        }
    } 
    return (
        <TouchableOpacity 
    
        style={disable ? [styles.containerDisable, style] : [styles.container, style]}
        onPress={handlerClick}>
            <ActivityIndicator animating={loading} size='large' color='white' style={{position:'absolute', left:'10%'}} />
            <TextView fontFamily="Source-Regular"  fontSize={20} style={{color : 'white'}}>{title}</TextView>
        </TouchableOpacity>
    )
}

import React from 'react'
import { View } from 'react-native'
import styles from './Skeletone.style'
import {EvilIcons} from 'react-native-vector-icons'
export default function Skeletone() {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <EvilIcons name="image" size={130} color="#eee"/>
            </View>
            <View style={styles.containerText}>
                <View style={styles.text}></View>
                <View style={styles.price}></View>
            </View>
        </View>
    )
}

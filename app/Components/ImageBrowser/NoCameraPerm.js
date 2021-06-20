import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import TextView from '../TextView/TextView'

export default function NoCameraPerm() {
    return (
        <View  >
            <TextView>No Camera Permission</TextView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

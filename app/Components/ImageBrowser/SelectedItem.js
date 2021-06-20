import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {COLORS} from '../../GlobalStyle'

export default function SelectedItem({number}) {
    return (
        <View style={styles.countBadge}>
        <Text style={styles.countBadgeText}>{number}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    countBadge: {
        paddingHorizontal: 8.6,
        paddingVertical: 5,
        borderRadius: 50,
        position: 'absolute',
        right: 3,
        bottom: 3,
        justifyContent: 'center',
        backgroundColor: COLORS.secondary
      },
      countBadgeText: {
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 'auto',
        color: '#ffffff',
        fontSize:16
      }
})

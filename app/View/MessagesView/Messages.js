import React from 'react'
import { View, Text } from 'react-native'
import EmptyChats from '../../SVG/EmptyChats'
import styles from './MessagesView.style';

export default function MessagesView({ navigation}) {
    return (
        <View style={styles.container}>
            <EmptyChats />
        </View>
    )
}

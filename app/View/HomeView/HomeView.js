import React from 'react'
import { View, Text, StatusBar} from 'react-native'

import {COLORS} from '../../GlobalStyle'
import styles from './HomeView.style';

export default function HomeView() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.primary} />
            <Text>HomeView</Text>
        </View>
    )
}

import React from 'react'
import { View, Text, StatusBar} from 'react-native'

import {COLORS} from '../../GlobalStyle'
import Sections from './Sections'
import styles from './HomeView.style';

export default function HomeView() {
    return (
        <View>
            <StatusBar backgroundColor={COLORS.primary} />
            <Sections />
        </View>
    )
}

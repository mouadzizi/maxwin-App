import React from 'react'
import { View, Text } from 'react-native'

export default function ResultView({route}) {
    const category = route.params?.category;
    return (
        <View>
            <Text>Hello from {category}</Text>
        </View>
    )
}

import React from 'react'
import { View, Text } from 'react-native'
import { COLORS } from '../../GlobalStyle'

export default function Divider({width, style}) {
    return (
        <View
        style={[{backgroundColor: COLORS.Grey[100], height: 1, width: width, alignSelf: 'center'}, style]}>
        </View>
    )
}

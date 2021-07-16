import React from 'react'
import { View, Text } from 'react-native'
import styles from './MessagesView.style';

export default function MessagesView({ navigation}) {
    return (
        <View style={styles.container}>
            <Text onPress={()=>navigation.navigate('ChatView')}  >MessagesView</Text>
        </View>
    )
}

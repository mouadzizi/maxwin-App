import React from 'react'
import { Text } from 'react-native'
import {styles} from "./SeeAllList.stylesheet"
import {COLORS} from "../../GlobalStyle"
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from "react-native-vector-icons";

export default function SeeAllList({title, navigation, collection}) {
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={() => navigation.navigate("HomeSectionProductView",{collection: collection})}>
        <Text style={styles.text}>{title}</Text>
        <Ionicons
        name="arrow-forward-circle"
        color= {COLORS.primary}
        size={65}
        style={{ marginLeft: 5 }}
      />

        </TouchableOpacity>
    )
}

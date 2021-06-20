import React, {useState, useEffect} from 'react'
import { ScrollView } from 'react-native'
import { View, Text } from 'react-native'
import Product from '../../Components/Product/Product'
import styles from './HomeSectionProductView.style'
export default function HomeSectionProductView() {

    return (
        <ScrollView
        style={styles.container}>
                <Product/>
                <Product/>

                <Product/>

                <Product/>
        </ScrollView>
    )
}

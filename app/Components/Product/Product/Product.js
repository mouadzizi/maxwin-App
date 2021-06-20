import React from 'react'
import { Image } from 'react-native'
import { View, Text } from 'react-native'
import styles from './Product.style'

//Must have as component
//Title and Price on the first section
//Voir details, City, Likes

export default function Product() {
    return (
        <View style={styles.container}>
            <View 
            style={styles.titleContainer}>
                <Text style={styles.title}>Camion Test 1</Text>
            </View>
            <View
            style={styles.imageContainer}>
                <View style={{flex: 1}}>
                <Image 
                source={require('../../../../assets/ProductTest/product3.jpeg')}
                style={{height: '100%', width: "100%"}}
                resizeMode="stretch"/>
                </View>
                <View style={{flex: 1}}>
                <Image 
                source={require('../../../../assets/ProductTest/product6.jpeg')}
                style={{height: '50%', width: "100%"}}
                resizeMode="stretch"/>
                <Image 
                source={require('../../../../assets/ProductTest/product4.jpeg')}
                style={{height: '50%', width: "100%"}}
                resizeMode="stretch"/>
                </View>
                
            </View>
            <View
            style={styles.informationContainer}>
                <Text>Camion Test 1</Text>
            </View>
        </View>
    )
}

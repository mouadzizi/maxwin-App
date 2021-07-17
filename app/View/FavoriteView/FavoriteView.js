import React from 'react'
import { View } from 'react-native'
import styles from './FavoriteView.style';
import FavoriteProduct from '../../Components/Product/FavoritProduct'
export default function FavoriteView() {
    return (
        <View style={styles.container}>
            <FavoriteProduct/>
        </View>
    )
}

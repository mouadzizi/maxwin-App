import React from 'react'

import styles from './CategoryButton.style'

import Car from '../../../icons/Car'
import Apartment from '../../../icons/Apartment'
import Villa from '../../../icons/Villa'
import Lamp from '../../../icons/Lamp'
import Tv from '../../../icons/Tv'
import MenClothes from '../../../icons/MenClothes'

import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CategoryButton({
    iconName,
    onClick,
}) {

    const RenderIcon = () => {
        switch (iconName) {
            case 'Car':
                return <Car />;
            case 'Apartment':
                return <Apartment />;
            case 'Villa':
                return <Villa />;
            case 'Lamp':
                    return <Lamp />;
            case 'Tv':
                    return <Tv />;
            case 'MenClothes':
                    return <MenClothes />;
          default:
            return <Car />;;
        }
    };
    
    return (
        <TouchableOpacity 
        style={styles.container}
        onPress={onClick}>
            <RenderIcon/>
        </TouchableOpacity>
    )
}

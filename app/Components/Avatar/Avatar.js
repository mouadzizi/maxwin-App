import React from 'react'
import { View, Text } from 'react-native'
import styles from './Avatar.style'
import {FontAwesome, Feather} from 'react-native-vector-icons'
export default function Avatar({iconName}) {
    const RenderIcon = () => {

        switch (iconName) {
            case 'Mail':
                return <Feather name="mail" color="white" size={30}/>;
            
            case 'Bell':
                    return <Feather name="bell" color="white" size={30}/>;

            case 'FAQ':
                    return <Feather name="help-circle" color="white" size={40}/>;
          default:
            return <FontAwesome name="user" color="white" size={30}/> ;
        }
    };
    return (
        <View
        style={styles.container}>
            <RenderIcon/> 
        </View>
    )
}

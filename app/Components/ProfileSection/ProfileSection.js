import React from 'react'
import { View, Text, Alert } from 'react-native'
import Avatar from '../Avatar';
import ProfileSeeAll from '../Button/ProfileSeeAll'
import styles from './ProfileSection.style'

export default function ProfileSection({onClick, title, subTitle, iconName}) {

    return (
    
        
        <View
        style={styles.container}>

        <View style={styles.containerImage}>

        <Avatar iconName={iconName}/>
            </View>
            <View style={styles.containerText}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
            </View>

            <View style={styles.containerButton}>
            <ProfileSeeAll onClick={onClick} />
            </View>
            
        </View>
    )
}

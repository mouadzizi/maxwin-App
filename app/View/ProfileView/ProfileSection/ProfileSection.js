import React from "react";
import { View, Text } from "react-native";
import Avatar from "../../../Components/Avatar";
import ProfileSeeAll from "../../../Components/Button/ProfileSeeAll";
import TextView from '../../../Components/TextView'
import styles from "./ProfileSection.style";

export default function ProfileSection({ onClick, title, subTitle, iconName }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Avatar iconName={iconName} />
      </View>
      <View style={styles.containerText}>
        <TextView style={styles.title} fontSize={16} >{title}</TextView>
        <TextView style={styles.subTitle} fontSize={13} >{subTitle}</TextView>
      </View>

      <View style={styles.containerButton}>
        <ProfileSeeAll onClick={onClick} />
      </View>
    </View>
  );
}

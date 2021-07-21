import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "./ProfileView.style";
import ProfileSection from "./ProfileSection";
import {GlobalStyle} from '../../GlobalStyle'
import { auth } from "../../API/Firebase";
export default function ProfileView() {
  return (
    <View style={styles.container}>

      <Text style={GlobalStyle.H1}>Profile</Text>
      <ProfileSection
        subTitle="Informations personnelles"
        title="MOAD El MOUSAWI"
        onClick={() => Alert.alert("Informations personnelles")}
      />

      <Text style={[GlobalStyle.H1, {marginTop: 20}]}>Settings</Text>
      <ProfileSection
        title="Contacter Nous"
        subTitle="E-Mail"
        onClick={() => Alert.alert("Contacter Nous Page")}
        iconName="Mail"
      />
      <ProfileSection
        title="Notification"
        subTitle="Votre Dernier Notifications"
        onClick={() => Alert.alert("Notifications Page")}
        iconName="Bell"
      />
      <ProfileSection
        title="FAQ"
        subTitle="Questions fréquemment"
        onClick={()=>auth.signOut()}
        iconName="FAQ"
      />
    </View>
  );
}

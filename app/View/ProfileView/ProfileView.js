import React from "react";
import { View, Text, Alert } from "react-native";
import styles from "./ProfileView.style";
import ProfileSection from "./ProfileSection";
export default function ProfileView() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Profile</Text>
      <ProfileSection
        subTitle="Informations personnelles"
        title="MOAD El MOUSAWI"
        onClick={() => Alert.alert("Informations personnelles")}
      />

      <Text style={styles.headerTitle}>Settings</Text>
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
        onClick={() => Alert.alert("Web View for the FAQ")}
        iconName="FAQ"
      />
    </View>
  );
}

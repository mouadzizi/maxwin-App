import React, { useCallback, useState } from "react";
import { View, Text, Alert } from "react-native";

import ProfileSection from "./ProfileSection";
import Devider from "../../Components/Divider";

import styles from "./ProfileView.style";
import { COLORS, GlobalStyle } from "../../GlobalStyle";
import { auth } from "../../API/Firebase";
import { useFocusEffect } from "@react-navigation/core";

export default function ProfileView({ navigation }) {
  const [user, setUser] = useState(false);
  useFocusEffect(
    useCallback(() => {
      const user = auth.currentUser;
      setUser(!!user);
    }, [user])
  );

  const SignOut = () => {
    auth.signOut();
    Alert.alert("You have been Sign out");
  };

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Text style={GlobalStyle.H1}>Profile</Text>
          <ProfileSection
            subTitle="Informations personnelles"
            title="MOAD El MOUSAWI"
            onClick={() => navigation.navigate("ProfileInformationView")}
          />
        </>
      )}

      <Text style={[GlobalStyle.H1, { marginTop: 20 }]}>Settings</Text>
      <ProfileSection
        title="Contacter Nous"
        subTitle="E-Mail"
        onClick={() => navigation.navigate("ContactView")}
        iconName="Mail"
      />
      {user && (
        <>
          <ProfileSection
            title="Notification"
            subTitle="Votre Dernier Notifications"
            onClick={() => navigation.navigate("NotificationView")}
            iconName="Bell"
          />
        </>
      )}

      <ProfileSection
        title="FAQ"
        subTitle="Questions fréquemment"
        onClick={() => navigation.navigate("FAQView")}
        iconName="FAQ"
      />
      {user && (
        <>
          <Devider
            width="100%"
            style={{ marginVertical: 20, backgroundColor: COLORS.third }}
          />
          <ProfileSection
            title="Se déconnecter"
            subTitle="Se déconnecter"
            onClick={SignOut}
            iconName="LogOut"
          />
        </>
      )}
    </View>
  );
}

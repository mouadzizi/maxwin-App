import React, { useCallback, useEffect, useState } from "react";
import { View, Text, Alert } from "react-native";

import ProfileSection from "./ProfileSection";
import Devider from "../../Components/Divider";

import styles from "./ProfileView.style";
import { COLORS, GlobalStyle } from "../../GlobalStyle";

import { auth } from "../../API/Firebase";
import { useFocusEffect } from "@react-navigation/core";
import { getUser } from "../../API/APIFunctions";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";

export default function ProfileView({ navigation }) {
  const [user, setUser] = useState({});
  const [isSignIn, setIsSignIn] = useState(false);

  useFocusEffect(
    useCallback(() => {
      const cleanup = auth.onAuthStateChanged((FB_user) => {
        if (FB_user) {
          getUser()
            .then((theUser) => setUser(theUser))
            .then(() => setIsSignIn(true));
        } else setIsSignIn(false);
      });
      return () => {
        cleanup();
      };
    }, [])
  );

  const SignOut = () => {
    auth
      .signOut()
      .then(() => setUser({}))
      .then(() => Alert.alert("You have been Sign out"));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.containerMain}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1 }}>
          {isSignIn && (
            <>
              <Text style={GlobalStyle.H1}>Profile</Text>
              <ProfileSection
                subTitle="Informations personnelles"
                title={user.firstName + " " + user.lastName}
                onClick={() =>
                  navigation.navigate("ProfileInformationView", {
                    profile: user,
                  })
                }
              />

              <ProfileSection
                subTitle="Mes produits"
                title="Ma boutique"
                iconName="Shop"
                onClick={() =>
                  navigation.navigate("MyProductsView", { profile: user })
                }
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
          {/* {user && (
        <>
          <ProfileSection
            title="Notification"
            subTitle="Votre Dernier Notifications"
            onClick={() => navigation.navigate("NotificationView")}
            iconName="Bell"
          />
        </>
      )} */}

          <ProfileSection
            title="FAQ"
            subTitle="Questions fréquemment"
            onClick={() => navigation.navigate("FAQView")}
            iconName="FAQ"
          />

          <ProfileSection
            title="Conditions générales"
            subTitle="conditions Maxwin"
            onClick={() => navigation.navigate("FAQView")}
            iconName="FAQ"
          />

          {isSignIn && (
            <>
              <Devider
                width="100%"
                style={{ marginVertical: 20, backgroundColor: COLORS.primary }}
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
      </ScrollView>
    </SafeAreaView>
  );
}

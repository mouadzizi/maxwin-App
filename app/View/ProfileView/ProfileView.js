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
import { signOutAsync } from "expo-google-sign-in";
import { logOutAsync } from "expo-facebook";

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
    const authProider = auth.currentUser.providerData[0].providerId;
    auth
      .signOut()
      .then(async () => {
        setUser({});
        switch (authProider) {
          case "google.com":
            await signOutAsync();
            break;
          case "facebook.com":
            await logOutAsync();
            break;
        }
      })
      .then(() => setIsSignIn(false));
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
              <Text style={GlobalStyle.H1}>Profil</Text>
              <ProfileSection
                subTitle="Informations personnelles"
                title={user.username || "utilisateur"}
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
            title="Contactez nous"
            subTitle="E-Mail"
            onClick={() => navigation.navigate("ContactView")}
            iconName="Mail"
          />

          <ProfileSection
            title="Conditions générales"
            subTitle="conditions Maxwin"
            onClick={() => navigation.navigate("ConditionsView")}
            iconName="FAQ"
          />

          {!isSignIn && (
            <>
              <Devider
                width="100%"
                style={{ marginVertical: 20, backgroundColor: COLORS.primary }}
              />
              <ProfileSection
                title="Connecter"
                subTitle="Connecter au maxwin"
                onClick={() => navigation.navigate("SignIn")}
                iconName="LogIn"
              />
            </>
          )}

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

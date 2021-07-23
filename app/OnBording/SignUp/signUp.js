import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, ScrollView } from "react-native";
import { Input } from "react-native-elements";
import { createUser } from "../../API/APIFunctions";

import styles from "./signUp.style";
import { Fontisto, Entypo } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";

import ButtonFill from "../../Components/Button/ButtonFill";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";

import Devider from "../../Components/Divider";
import TextView from "../../Components/TextView";

export default function signUp({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(
    "Votre email/mot de passe n'est pas correct"
  );
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const createNewUser = () => {
    setLoading(true);
    createUser(user)
      .then(() => {
        navigation.navigate("BottomNavigation");
        setLoading(false);
      })
      .catch(({ message }) => {
        alert(message);
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/headerIcon.png")}
          style={{ height: "100%", width: "60%" }}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.container}>
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          renderErrorMessage={false}
          labelStyle={{ color: COLORS.primary }}
          placeholder="Entrer votre e-mail"
          rightIcon={<Fontisto name="email" size={24} color={COLORS.primary} />}
          label="Email"
          onChangeText={(e) => setUser({ ...user, email: e })}
        />

        <Input
          placeholder="Mot de passe"
          label="Mot de passe"
          onChangeText={(e) => setUser({ ...user, password: e })}
          renderErrorMessage={false}
          labelStyle={{ color: COLORS.primary }}
          containerStyle={{ marginTop: 10 }}
          rightIcon={<Entypo name="lock" size={24} color={COLORS.primary} />}
          secureTextEntry
        />

        <Input
          label="Répéter le mot de passe "
          placeholder="Mot de passe"
          onChangeText={(e) => setUser({ ...user, password: e })}
          rightIcon={<Entypo name="lock" size={24} color={COLORS.primary} />}
          labelStyle={{ color: COLORS.primary }}
          containerStyle={{ marginTop: 10 }}
          secureTextEntry
          renderErrorMessage={false}
        />

        <ButtonFill
          title="INSCRIVEZ-VOUS"
          loading={false}
          onClick={createNewUser}
          style={{ marginTop: 20 }}
        />

        <Devider
          width="100%"
          style={{ backgroundColor: COLORS.primary, marginTop: 10 }}
        />
        <TextView style={styles.welcomeText} fontFamily="Source-Regular">
          Si vous déja un utilisateur sur Maxwin, veuillez vous s'identifier ici
        </TextView>

        <ButtonOutlined
          title="S'identifier "
          style={{ marginTop: 20 }}
          onClick={() => navigation.navigate("SignIn")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

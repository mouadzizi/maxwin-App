import React, { useState } from "react";
import { SafeAreaView, Image, View, ScrollView, Text } from "react-native";
import { Input } from "react-native-elements";
import { signIn } from "../../API/APIFunctions";
import ButtonFill from "../../Components/Button/ButtonFill";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import Devider from "../../Components/Divider";
import TextView from "../../Components/TextView";

import styles from "./SignIn.styles";
import { Fontisto, Entypo } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";

export default function SignIn({ navigation }) {
  const [isError, setIsError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false)

  const logIn = () => {
    setIsError()
    setLoading(true)
    signIn(user.email, user.password)
      .then(navigation.goBack)
      .catch(({ code }) => {
        setLoading(false)
        switch (code) {
          case "auth/invalid-email":
            setIsError("Email incorrect");
            break;
          case "auth/user-not-found":
            setIsError("Email ou bien mot passe incorrect");
            break;
          case "auth/wrong-password":
            setIsError("Mot de passe incorrect");
            break;
          default:
            break;
        }
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
          autoCapitalize="none"
          rightIcon={<Fontisto name="email" size={24} color={COLORS.primary} />}
          placeholder="Enter votre Email"
          label="Email"
          errorMessage={
            user.email.length > 12 && !user.email.includes("@")
              ? "Votre email n'est pas correct"
              : ""
          }
          onChangeText={(e) => setUser({ ...user, email: e.trim() })}
        />
        <Input
          placeholder="Mot de passe"
          autoCapitalize="none"
          label="Password"
          containerStyle={{ marginTop: 10 }}
          errorMessage={
            user.password.length < 7 && user.password.length > 0
              ? "Votre Mot de Pass est très court"
              : ""
          }
          rightIcon={<Entypo name="lock" size={24} color={COLORS.primary} />}
          onChangeText={(e) => setUser({ ...user, password: e.trim() })}
          secureTextEntry
        />

        {isError && <Text style={styles.errorMessage}>{isError}</Text>}

        <ButtonFill
        disable={loading}
          title="SE CONNECTER"
          loading={loading}
          onClick={logIn}
          style={{ marginTop: 20 }}
        />

        <Devider
          width="100%"
          style={{ backgroundColor: COLORS.primary, marginTop: 10 }}
        />
        <TextView style={styles.welcomeText} fontFamily="Source-Regular">
          Si vous n'êtes pas encore utilisateur, veuillez vous inscrire avec
        </TextView>

        <ButtonOutlined
          title="Créer un compte"
          style={{ marginTop: 20 }}
          onClick={() => navigation.replace("SignUp")}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

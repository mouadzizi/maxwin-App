import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  ScrollView,
  Text,
  Alert,
  Dimensions,
} from "react-native";
import { Input, SocialIcon } from "react-native-elements";
import {
  signIn,
  hasAllInfo,
  getUser,
  updateUser,
} from "../../API/APIFunctions";
import ButtonFill from "../../Components/Button/ButtonFill";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import Devider from "../../Components/Divider";
import TextView from "../../Components/TextView";

import styles from "./SignIn.styles";
import { Fontisto, Entypo } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";

import * as GoogleSignIn from "expo-google-sign-in";
import * as Facebook from "expo-facebook";
import * as Updates from "expo-updates";
import { auth } from "../../API/Firebase";
import firebase from "firebase";
import AuthModal from "../../Components/AuthModal/AuthModal";

const { width } = Dimensions.get("window");
var Modal;
export default function SignIn({ navigation }) {
  const [isError, setIsError] = useState();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState({
    email: false,
    google: false,
    facebook: false,
  });

  useEffect(() => {
    update();
  }, []);

  const logIn = () => {
    setIsError();
    setLoading({ ...loading, email: true });
    signIn(user.email, user.password)
      .then(() => navigation.goBack())
      .catch(({ code, message }) => {
        setLoading({ ...loading, email: false });
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
            setIsError(message);
            break;
        }
      });
  };
  const loginWithGoogle = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === "success") {
        setLoading({ ...loading, google: true });
        onSignIn(user);
      } else {
        Alert.alert("Login with google ", type);
      }
    } catch (e) {
      Alert.alert("Google Error", e.message);
    }
  };

  const update = async () => {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        Alert.alert("INFO", "New updates Available", [
          {
            text: "Update",
            style: "default",
            onPress: async () => {
              await Updates.fetchUpdateAsync();
              // ... notify user of update ...
              await Updates.reloadAsync();
            },
          },
        ]);
      }
    } catch (e) {
      alert("Update Error " + e.message);
    }
  };
  const onSignIn = (googleUser) => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    var unsubscribe = auth.onAuthStateChanged(function () {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      // Build Firebase credential with the Google ID token.
      var credential = firebase.auth.GoogleAuthProvider.credential(
        googleUser.auth.idToken,
        googleUser.auth.accessToken
      );
      // Sign in with credential from the Google user.
      auth
        .signInWithCredential(credential)
        .then(async () => {
          const dbUser = await getUser();
          if (hasAllInfo(dbUser)) navigation.goBack();
          else Modal.openModal();
        })
        .catch((error) => {
          // Handle Errors here.
          setLoading({ ...loading, google: false });
          Alert.alert("BACK_END_ERROR", JSON.stringify(error.message));
        });
    });
  };
  async function signInWithFacebook() {
    setLoading({ ...loading, facebook: true });
    try {
      await Facebook.initializeAsync("424654075104803", "v9.0");
      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });
      if (type === "success") {
        await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
        const credential = firebase.auth.FacebookAuthProvider.credential(token);
        await auth
          .signInWithCredential(credential)
          .then((userCredential) => {
            const fbID = userCredential.user.providerData[0].uid;
            setLoading({ ...loading, facebook: false });
            fetch(
              `https://graph.facebook.com/${fbID}/picture?type=normal`
            ).then(async (response) => {
              await userCredential.user.updateProfile({
                photoURL: response.url,
              });
              const dbUser = await getUser();
              if (hasAllInfo(dbUser)) navigation.goBack();
              else Modal.openModal();
            });
          })
          .catch((e) => Alert.alert("Firebase err", JSON.stringify(e)));
      }
      if (type === "cancel") {
        setLoading({ ...loading, facebook: false });
      }
    } catch (e) {
      Alert.alert("Facebook Login Error:", JSON.stringify(e));
      setLoading({ ...loading, facebook: false });
    }
  }
  const renderContent = () => {
    return (
      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "600",
            color: "#333",
            marginBottom: 10,
            alignSelf: "center",
            fontWeight: "bold",
          }}
        >
          Completé votre profile
        </Text>
        <Text
          style={{
            marginBottom: 2,
            fontSize: 16,
            fontWeight: "600",
            alignSelf: "center",
            textAlign: "center",
          }}
        >
          Compléter votre profil vous permettre d'ajouter des produits
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 5,
          }}
        >
          <ButtonFill
            loading={false}
            style={{ width: width * 0.4 }}
            title="Completé"
            onClick={() => {
              navigation.navigate("CompleteProfile");
            }}
          />
          <ButtonOutlined
            style={{ width: width * 0.4 }}
            title="Passer"
            onClick={() => navigation.navigate("CompleteProfile")}
          />
        </View>
      </View>
    );
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
        <SocialIcon
          loading={loading.facebook}
          title="Se connecter avec Facebook"
          button
          type="facebook"
          onPress={signInWithFacebook}
          style={{ borderRadius: 10 }}
        />

        <SocialIcon
          title="Se connecter avec Google"
          button
          type="google"
          onPress={loginWithGoogle}
          style={{ borderRadius: 10 }}
        />

        <Devider
          width="100%"
          style={{ backgroundColor: COLORS.primary, marginVertical: 15 }}
        />

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
          disable={loading.email}
          title="SE CONNECTER"
          loading={loading.email}
          onClick={logIn}
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
      <AuthModal onClose={() => navigation.goBack()} ref={(el) => (Modal = el)}>
        {renderContent()}
      </AuthModal>
    </SafeAreaView>
  );
}

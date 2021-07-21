import React, { useState } from "react";
import { View, Text } from "react-native";
import styles from "./signUp.style";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";
import { createUser } from "../../API/APIFunctions";

export default function signUp({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Input
            keyboardType="email-address"
            label="Email"
            placeholder="Entrer votre e-mail"
            autoCapitalize="none"
            onChangeText={(e) => setUser({ ...user, email: e })}
          />
        </View>

        <View style={styles.input}>
          <Input
            placeholder="Password"
            label="Entrer votre mot de passe"
            secureTextEntry
            onChangeText={(e) => setUser({ ...user, password: e })}
          />
        </View>
        <ButtonFill
          onClick={createNewUser}
          loading={loading}
          style={styles.button}
          title="Sinscrire"
        />
        <ButtonFill
          onClick={()=>navigation.navigate('BottomNavigation')}
          loading={false}
          style={styles.button}
          title="Sinscrire"
        />
      </View>
    </View>
  );
}

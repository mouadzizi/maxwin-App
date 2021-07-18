import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import styles from "./SignIn.styles";
import { Input, Button } from "react-native-elements";
import { signIn } from "../../API/APIFunctions";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <Input
      style={styles.input}
        autoCapitalize="none"
        placeholder="enter your Email"
        label="Email"
        onChangeText={(e) => setUser({ ...user, email: e.trim() })}
      />
      <Input
        placeholder="Password"
        label="Password"
        onChangeText={(e) => setUser({ ...user, password: e.trim() })}
        secureTextEntry
      />
      <Button
        title="sign in"
        onPress={() =>
          signIn(user.email, user.password).then((user) => console.log(user))
        }
      />
    </View>
  );
}

import React, { useState } from "react";
import {
  View,
  Image,
  ScrollView,
  SafeAreaView,
  ToastAndroid,
} from "react-native";
import { Input } from "react-native-elements/dist/input/Input";

import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import TextView from "../../Components/TextView";

import styles from "./ContactView.style";

export default function ContactView({ navigation }) {
  const [message, setMessage] = useState("");

  const showToast =  () => {
     ToastAndroid.show("YVotre message a été envoyé. Merci !", ToastAndroid.SHORT);
     setTimeout(()=> navigation.goBack(), 1700)
  };

  return (
    <SafeAreaView>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/headerIcon.png")}
          style={{ height: "100%", width: "60%" }}
          resizeMode="contain"
        />
      </View>

      <ScrollView style={styles.container}>
        <TextView style={styles.welcomeText} fontFamily="Source-Regular">
          Vous pouvez nous contacter pour toute difficulté que vous rencontrez
          ou toute suggestion que vous souhaitez voir dans l'application
        </TextView>

        <Input
          placeholder="Votre Message"
          label="Message"
          containerStyle={{
            marginTop: 40,
          }}
          multiline={true}
          onChangeText={(e) => setMessage(e)}
        />

        <ButtonOutlined
          title="Envoyer mon message "
          style={{ marginTop: 20 }}
          onClick={showToast}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

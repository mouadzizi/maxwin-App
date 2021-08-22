import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";
import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./CompleteProfile.style";
import { Picker } from "@react-native-picker/picker";
import { db, auth } from "../../API/Firebase";
import { registerForPushNotification } from "../../API/APIFunctions";

export default function CompleteProfile({ navigation }) {
  const user = auth.currentUser;
  const [additionalInfo, setAdditionalInfo] = useState({});
  const [loading, setLoading] = useState(false);

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    registerForPushNotification().then((token) =>
      setAdditionalInfo({
        expoPushNotif: token,
        firstName: "Prenom",
        lastName: "Nom",
        gender: "Homme",
        type: "Particullier",
        email: user.email,
        creationDate: date,
      })
    );
  }, []);

  const complete = () => {
    setLoading(true);
    db.collection("users")
      .doc(user.uid)
      .set(additionalInfo)
      .then(() => navigation.navigate("BottomNavigation"))
      .catch(({ message }) => {
        setLoading(false);
        console.warn(message);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>A propo de vous</Text>
          <Input
            placeholder="Nom"
            label="Nom"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
            onChangeText={(e) =>
              setAdditionalInfo({ ...additionalInfo, lastName: e })
            }
            value={additionalInfo.nom}
          />
          <Input
            placeholder="Prénom"
            label="Prénom"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 10 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
            onChangeText={(e) =>
              setAdditionalInfo({ ...additionalInfo, firstName: e })
            }
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}> Genre </Text>
          {/* Picker for city */}
          <View style={styles.pickerView}>
            <Picker
              style={styles.pickerInput}
              mode="dropdown"
              dropdownIconColor={COLORS.primary}
              onValueChange={(e) =>
                setAdditionalInfo({ ...additionalInfo, gender: e })
              }
              selectedValue={additionalInfo?.gender}
            >
              <Picker.Item
                label="Choisissez votre sexe"
                color={COLORS.Grey[400]}
              />
              <Picker.Item label="Homme" value="Homme" />
              <Picker.Item label="Femme" value="Femme" />
            </Picker>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Où habitez-vous ?</Text>
          <Input
            placeholder="Adresse"
            label="Adresse"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Fontisto
                name="map-marker-alt"
                size={24}
                color={COLORS.primary}
              />
            }
            onChangeText={(e) =>
              setAdditionalInfo({ ...additionalInfo, address: e })
            }
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Contact</Text>
          <Input
            keyboardType="phone-pad"
            placeholder="Numéro du téléphone"
            label="Numéro du téléphone"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={<Entypo name="phone" size={24} color={COLORS.primary} />}
            onChangeText={(e) =>
              setAdditionalInfo({ ...additionalInfo, phone: e })
            }
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>(Professionnel ou Particulier) </Text>
          {/* Picker for city */}
          <View style={styles.pickerView}>
            <Picker
              style={styles.pickerInput}
              mode="dropdown"
              dropdownIconColor={COLORS.primary}
              onValueChange={(e) =>
                setAdditionalInfo({ ...additionalInfo, type: e })
              }
              selectedValue={additionalInfo?.type}
            >
              <Picker.Item
                label="Choisissez votre Occupation"
                color={COLORS.Grey[400]}
              />
              <Picker.Item label="Particullier" value="Particullier" />
              <Picker.Item label="Professionelle" value="Professionelle" />
            </Picker>
          </View>
        </View>

        <View style={styles.container}>
          <ButtonFill title="Compléter" loading={loading} onClick={complete} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

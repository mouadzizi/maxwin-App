import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";
import { Entypo } from "react-native-vector-icons";
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
  today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear(); 

  useEffect(() => {
    registerForPushNotification().then((token) => {
      setAdditionalInfo({
        expoPushNotif: token,
        username: user.displayName?.split(' ')[0] ||  "",
        firstName: user.displayName?.split(' ')[0] ||  "",
        lastName: user.displayName?.split(' ')[1] || "",
        gender: "Homme",
        type: "Particullier",
        email: user.email,
        creationDate: date,
        phone: user.phoneNumber || "",
        ville: "",
        picUrl: user.photoURL
      });
    });
  }, [user]);

  const complete = () => {
    setLoading(true);
    db.collection("users")
      .doc(user.uid)
      .set(additionalInfo)
      .then(() => navigation.navigate("BottomNavigation"))
      .catch(({ message }) => {
        setLoading(false);
        alert("database error" + message);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>A propo de vous</Text>
          <Input
            placeholder="Nom d'utilisateur"
            label="Nom d'utilisateur"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
            onChangeText={(e) =>
              setAdditionalInfo({ ...additionalInfo, username: e })
            }
            value={additionalInfo.username}
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
          {/* Picker for city */}
          <View style={styles.pickerView}>
            <Text style={styles.label}>Ville *</Text>
            <Picker
              style={styles.pickerInput}
              mode="dialog"
              dropdownIconColor={COLORS.primary}
              selectedValue={additionalInfo.city}
              onValueChange={(value) =>
                setAdditionalInfo({ ...additionalInfo, city: value })
              }
            >
              <Picker.Item
                label="Choisissez une Ville"
                value=""
                color={COLORS.Grey[400]}
              />
              <Picker.Item label="AL Hoceima" value="ALHoceima" />
              <Picker.Item label="Agadir" value="Agadir" />
              <Picker.Item label="Casablanca" value="Casablanca" />
              <Picker.Item label="Dakhla" value="Dakhla" />
              <Picker.Item label="Fès" value="Fès" />
              <Picker.Item label="Kénitra" value="Kénitra" />
              <Picker.Item label="Marrakech" value="Marrakech" />
              <Picker.Item label="Meknès" value="Meknès" />
              <Picker.Item label="Ouajda" value="Ouajda" />
              <Picker.Item label="Rabat" value="Rabat" />
              <Picker.Item label="Tanger" value="Tanger" />
              <Picker.Item label="Tetouan" value="Tetouan" />
            </Picker>
          </View>
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

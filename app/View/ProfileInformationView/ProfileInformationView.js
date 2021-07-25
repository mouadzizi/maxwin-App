import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";

import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./ProfileInformationView.style";
import { Picker } from "@react-native-picker/picker";

export default function ProfileInformation({ route }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const theUser = route.params?.profile;
    setUser(theUser);
    return () => {};
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>A propo de vous</Text>
          <Input
            disabled={true}
            value={user.firstName}
            placeholder="Nom"
            label="Nom"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
          <Input
            disabled={true}
            value={user.lastName}
            placeholder="Prénom"
            label="Prénom"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 10 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
          <Input
            disabled={true}
            value={user.email}
            placeholder="E-Mail"
            label="E-Mail"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 10 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Où habitez-vous ?</Text>
          <Input
            disabled={true}
            value={user.address}
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
          />
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Contact</Text>
          <Input
            disabled={true}
            value={user.phone}
            placeholder="Numéro du téléphone"
            label="Numéro du téléphone"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={<Entypo name="phone" size={24} color={COLORS.primary} />}
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
              selectedValue={user.type}
            >
              <Picker.Item
                label="Choisissez votre Occupation"
                value={user.type}
                color={COLORS.Grey[400]}
              />
              <Picker.Item  label="Particullier" value="Particullier" />
              <Picker.Item label="Professionelle" value="Professionelle" />
            </Picker>
          </View>
        </View>

        <View style={styles.container}>
          <ButtonFill title="compléter" loading={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

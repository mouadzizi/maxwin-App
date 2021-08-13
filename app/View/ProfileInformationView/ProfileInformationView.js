import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";

import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./ProfileInformationView.style";
import { Picker } from "@react-native-picker/picker";
import { updateUser } from "../../API/APIFunctions";
import { auth } from "../../API/Firebase";

export default function ProfileInformation({ route, navigation }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const theUser = route.params?.profile;
    setUser(theUser);
    return () => {};
  }, []);

  const updateAction = () => {
    setLoading(true);
    updateUser(user)
      .then(() => {
        setLoading(false);
        navigation.goBack();
      })
      .catch(({ message }) => {
        setLoading(false);
        alert(message);
      });
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>A propo de vous</Text>

          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {user.firstName && user.lastName && (
                <Text style={styles.avatarText}>
                  {user?.firstName.charAt(0)}
                  {user?.lastName.charAt(0)}
                </Text>
              )}
            </View>
          </View>
          <Input
            onChangeText={(e) => setUser({ ...user, firstName: e })}
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
            onChangeText={(e) => setUser({ ...user, lastName: e })}
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
            onChangeText={(e) => setUser({ ...user, address: e })}
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
            onChangeText={(e) => setUser({ ...user, phone: e })}
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

          {/* Picker */}
          <View style={styles.pickerView}>
            <Picker
              style={styles.pickerInput}
              mode="dropdown"
              dropdownIconColor={COLORS.primary}
              selectedValue={user.type}
              onValueChange={(val) => setUser({ ...user, type: val })}
            >
              <Picker.Item
                label="Choisissez votre Occupation"
                value={user.type}
                color={COLORS.Grey[400]}
              />
              <Picker.Item label="Particullier" value="Particullier" />
              <Picker.Item label="Professionelle" value="Professionelle" />
            </Picker>
          </View>
        </View>

        <View style={styles.container}>
          <ButtonFill
            disable={loading}
            onClick={updateAction}
            title="Modifier"
            loading={loading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

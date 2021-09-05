import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Input } from "react-native-elements";
import ButtonFill from "../../Components/Button/ButtonFill";
import { Entypo } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./ProfileInformationView.style";
import { Picker } from "@react-native-picker/picker";
import { updateUser } from "../../API/APIFunctions";
import { auth } from "../../API/Firebase";
import * as ImagePicker from 'expo-image-picker';

export default function ProfileInformation({ route, navigation }) {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState()
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

  async function openImagePicker() {
			let result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				allowsEditing: true,
				aspect: [1, 1],
				quality: .3,
				allowsMultipleSelection:true
				
			  });
			  if (!result.cancelled) {
				setImage(result.uri);
			  }
			  if(result.cancelled)console.log('cancelled');
	}
 
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.avatarContainer}>

            <TouchableOpacity style={styles.avatar} onPress={openImagePicker}>
            <Entypo name="camera" style={{position : 'absolute', bottom: 0, right: 0}} size={30} color={COLORS.primary
            }/>
              {user.firstName && user.lastName && (
                <Text style={styles.avatarText}>
                  {user?.firstName.charAt(0)}
                  {user?.lastName.charAt(0)}
                </Text>
              )}
            </TouchableOpacity>

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
              <Entypo name="user" size={24} color={COLORS.primary} />
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
              <Entypo name="user" size={24} color={COLORS.primary} />
            }
          />
          <Input
            disabled={true}
            value={user.email || auth.currentUser.email}
            placeholder="E-Mail"
            label="E-Mail"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 10 }}
            rightIcon={
              <Entypo name="email" size={24} color={COLORS.primary} />
            }
          />
        </View>

        <View style={styles.container}>
          {/* Picker for city */}
        <View style={styles.pickerView}>
          <Text style={styles.label}>Ville *</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
            selectedValue={user.city}
            onValueChange={(value) => setUser({ ...user, city: value })}
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
          <Input
            onChangeText={(e) => setUser({ ...user, phone: e })}
            value={user.phone}
            keyboardType="numeric"
            placeholder="Numéro du téléphone"
            label="Numéro du téléphone"
            maxLength={10}
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

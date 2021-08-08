import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

import { Input } from "react-native-elements";

import ButtonFill from "../../Components/Button/ButtonFill";

import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./EditProduct.style";

export default function EditProduct({ navigation }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.label}>Information basic</Text>
          <Input
            placeholder="Titre"
            label="Titre de produit"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
          <Input
            placeholder="prix de produit"
            label="Prix"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
           <Input
              placeholder="Description"
              label="Description"
              renderErrorMessage={false}
              labelStyle={{ color: COLORS.primary }}
              containerStyle={{ marginTop: 20 }}
              numberOfLines={5}
              multiline={true}
              rightIcon={
                <Entypo name="v-card" size={24} color={COLORS.primary} />
              }
            />

          <View style={styles.container}>
            <Text style={styles.label}>Etat de produit</Text>

            {/* Picker */}
            <View style={styles.pickerView}>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
              >
                <Picker.Item
                  label="Choisissez votre Occupation"
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="Neuf" value="Neuf" />
                <Picker.Item label="Utilisé" value="Utilisé" />
              </Picker>
            </View>

           
          </View>
        </View>

        <View style={styles.container}>
          <ButtonFill title="Valider"
          loading={false} 
          onClick={() => navigation.goBack()}/>

          <ButtonFill
            title="Suprimer produit"
            loading={false}
            style={{ backgroundColor: "red", marginTop: 15 }}
          onClick={() => navigation.goBack()}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

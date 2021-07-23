import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import ButtonFill from "../../Components/Button/ButtonFill";

import { COLORS } from "../../GlobalStyle";
import styles from "./FilterView.style";

export default function FilterView({ navigation, route }) {
  return (
    <View style={{ marginTop: 20, flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.pickerView}>
          <Text style={styles.label}>Choisissez la Ville</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
            selectedValue={""}
            onValueChange={() => console.log("hey")}
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

        <ButtonOutlined
          title="Choisissez une categorie"
          onClick={() => alert("modal for category")}
          style={{ marginBottom: 20 }}
        />

        <Text style={styles.label}>Prix</Text>

        <View style={styles.row}>
          <Input
            keyboardType="numeric"
            placeholder="Prix MIN"
            containerStyle={{ width: "50%" }}
            labelStyle={{ color: COLORS.primary }}
          />
          <Input
            keyboardType="numeric"
            placeholder="Prix MAX"
            containerStyle={{ width: "50%" }}
            labelStyle={{ color: COLORS.primary }}
          />
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.label}>Marque de Voiture</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
          >
            <Picker.Item
              label="Choisissez une marque"
              value=""
              color={COLORS.Grey[400]}
            />
            <Picker.Item label="AUDI" value="AUDI" />
            <Picker.Item label="BMW" value="BMW" />
            <Picker.Item label="CHEVROLET" value="CHEVROLET" />
          </Picker>
        </View>

        <Text style={styles.label}>Kilométrage</Text>

        <View style={styles.row}>
          <Input
            keyboardType="numeric"
            placeholder="MIN"
            containerStyle={{ width: "50%" }}
            labelStyle={{ color: COLORS.primary }}
          />
          <Input
            keyboardType="numeric"
            placeholder="MAX"
            containerStyle={{ width: "50%" }}
            labelStyle={{ color: COLORS.primary }}
          />
        </View>

        <View style={styles.pickerView}>
          <Text style={styles.label}>Carburant</Text>
          <Picker
            style={styles.pickerInput}
            mode="dropdown"
            dropdownIconColor={COLORS.primary}
          >
            <Picker.Item
              label="Choisissez le carburant"
              value=""
              color={COLORS.Grey[400]}
            />
            <Picker.Item label="Diesel" value="Diesel" />
            <Picker.Item label="Essence" value="Essence" />
          </Picker>
        </View>

        <Input
          label="Kilométrage"
          placeholder="Merci d'entrer le Nom exact de votre article"
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
        />

        <Input
          label="Kilométrage"
          placeholder="Merci d'entrer le Nom exact de votre article"
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
        />

        <Input
          label="Kilométrage"
          placeholder="Merci d'entrer le Nom exact de votre article"
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
        />
      </ScrollView>

      <ButtonFill
        title="Validé"
        style={{ marginHorizontal: 20, marginBottom: 20 }}
        loading={false}
      />
    </View>
  );
}

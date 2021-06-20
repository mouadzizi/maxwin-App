import React from "react";
import { View, Text } from "react-native";
import { Input } from "react-native-elements";
import {Picker} from '@react-native-picker/picker';
import styles from "./InformationStep.style";
import {COLORS} from "../../../GlobalStyle"
export default function InformationStep({ CategoryName }) {
  return (
    <View style={styles.container}>
      <Input label="Titre *" placeholder="Merci d'entrer le Nom exact de votre article" containerStyle={{marginTop : 5}} style={{fontSize: 15}} labelStyle={{color: COLORS.primary}}/>
      <Input label="Prix *" placeholder="Merci d'entrer le prix de votre article"   style={{fontSize: 15}} labelStyle={{color: COLORS.primary, fontSize: 15}}/>
      
      {/* Picker for city */}
      <View style={styles.pickerView}>
        <Text style={styles.label}>Ville</Text>
      <Picker
      style={styles.pickerInput}
      mode="dialog"
      dropdownIconColor={COLORS.primary}
      >
        <Picker.Item label="Choisissez une Ville" value="" color={COLORS.Grey[400]} />
        <Picker.Item label="Tanger" value="Tanger" />
        <Picker.Item label="Agadir" value="Agadir" />
        <Picker.Item label="Merakech" value="Merakech" />
        <Picker.Item label="Casablanca" value="Casablanca" />
        <Picker.Item label="Rabat" value="Rabat" />
        <Picker.Item label="Tetouan" value="Tetouan" />
      </Picker>
      </View>

      {/* Picker for State */}
      <View style={styles.pickerView}>
        <Text style={styles.label}>État</Text>
      <Picker
      style={styles.pickerInput}
      mode="dropdown"
      dropdownIconColor={COLORS.primary}
      >
        <Picker.Item label="Choisissez l'état de produit" value="" color={COLORS.Grey[400]} />
        <Picker.Item label="Neuf" value="Neuf" />
        <Picker.Item label="Utilisé" value="Utilisé" />
      </Picker>
      </View>
            
      
      {/* Car Specifications inputs */}

      {CategoryName === 'Voiture' ? 
      <>

      {/* Picker for State */}
      <View style={styles.pickerView}>
        <Text style={styles.label}>Marque</Text>
      <Picker
      style={styles.pickerInput}
      mode="dialog"
      dropdownIconColor={COLORS.primary}
      >
        <Picker.Item label="Choisissez une marque" value="" color={COLORS.Grey[400]} />
        <Picker.Item label="AUDI" value="AUDI" />
        <Picker.Item label="BMW" value="BMW" />
        <Picker.Item label="CHEVROLET" value="CHEVROLET" />
      </Picker>
      </View>

      <Input label="Kilométrage" placeholder="Kilométrage" style={{fontSize: 15}} labelStyle={{color: COLORS.primary}} keyboardType="number-pad" maxLength={8}/>
      <Input label="Année de fabrication" placeholder="Année de fabrication" style={{fontSize: 15}} labelStyle={{color: COLORS.primary}} keyboardType="number-pad" maxLength={4}/>
      
      {/* Picker for State */}
      <View style={styles.pickerView}>
        <Text style={styles.label}>Carburant</Text>
      <Picker
      style={styles.pickerInput}
      mode="dropdown"
      dropdownIconColor={COLORS.primary}
      >
        <Picker.Item label="Choisissez le carburant" value="" color={COLORS.Grey[400]} />
        <Picker.Item label="Diesel" value="Diesel" />
        <Picker.Item label="Essence" value="Essence" />
      </Picker>
      </View>

      <Input label="Puissance fiscale" placeholder="CH" style={{fontSize: 15}} labelStyle={{color: COLORS.primary}} keyboardType="number-pad" maxLength={8}/>
    {/* Picker for State */}
    <View style={styles.pickerView}>
          <Text style={styles.label}>Transaction</Text>
        <Picker
        style={styles.pickerInput}
        mode="dropdown"
        dropdownIconColor={COLORS.primary}
        >
          <Picker.Item label="Choisissez le carburant" value="" color={COLORS.Grey[400]} />
          <Picker.Item label="Diesel" value="Diesel" />
          <Picker.Item label="Essence" value="Essence" />
        </Picker>
      </View>
      </>
      : null}
      
    </View>
  );
}

import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import TextView from "../../../Components/TextView";
import ButtonFill from "../../../Components/Button/ButtonFill";
import Chip from "../../../Components/Chip";
import styles from "./InformationStep.style";
import { COLORS } from "../../../GlobalStyle";
import { addProduct, uploadImages } from "../../../API/APIFunctions";
import { auth } from "../../../API/Firebase";

export default function InformationStep({ navigation, route }) {
  const prevProduct = route.params?.product;
  const [product, setProduct] = useState(prevProduct);
  const [loading, setLoading] = useState(false);

  const user = auth.currentUser;

  useEffect(() => {
    console.log(product);
    return () => {};
  }, []);
  const submit = () => {
    setLoading(true);
    addProduct(product)
      .then((docRef) => {
        uploadImages(product.images, docRef.id, "user.uid").then((links) => {
          docRef.update({ images: links }).then(() => {
            setLoading(false);
            navigation.navigate("Home");
          });
        });
      })
      .catch(({ message }) => {
        setLoading(false);
        alert(message);
      });
  };
  return (
    <View>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <TextView
          fontFamily="Source-Regular"
          fontSize={16}
          style={styles.title}
        >
          Merci d'entrer le max d'information possible de votre produit
        </TextView>
        {product.category === ("Voitures" || "Location de Voiture") ? (
          <View style={{ marginTop: 30 }}>
            {/* Picker for State */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>État</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.etat}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, etat: itemValue })
                }
              >
                <Picker.Item
                  label="Choisissez l'état de produit"
                  value=""
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="Neuf" value="Neuf" />
                <Picker.Item label="Utilisé" value="Utilisé" />
              </Picker>
            </View>

            {/* Picker for brand */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>Marque</Text>
              <Picker
                style={styles.pickerInput}
                mode="dialog"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.marqueVoiture}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, marqueVoiture: itemValue })
                }
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

            <Input
              label="Kilométrage"
              placeholder="Kilométrage"
              keyboardType="number-pad"
              maxLength={6}
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input) =>
                setProduct({
                  ...product,
                  kilometrage: input,
                })
              }
            />

            <Input
              label="Année de fabrication"
              placeholder="Année de fabrication"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              errorMessage={
                product.anneeFabrication > 2021 ||
                product.anneeFabrication < 1900
                  ? "veuillez choisir une année valide"
                  : null
              }
              onChangeText={(input) =>
                setProduct({
                  ...product,
                  anneeFabrication: input,
                })
              }
              maxLength={4}
            />

            {/* Picker for Fuel */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>Carburant</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.carburant}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, carburant: itemValue })
                }
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
              label="Puissance fiscale"
              placeholder="CH"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              errorMessage={
                product.puissanceFiscale > 50
                  ? "veuillez choisir une Puissance fiscale valide"
                  : null
              }
              onChangeText={(input) =>
                setProduct({ ...product, puissanceFiscale: input })
              }
              maxLength={8}
            />

            {/* Picker for Transaction */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>Transaction</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.transaction}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, transaction: itemValue })
                }
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
          </View>
        ) : null}

        {product.category ===
        ("Appartements" ||
          "Maisons & Villas" ||
          "Location long durée" ||
          "Location courte durée (vacances)" ||
          "Commerces & Bureaux") ? (
          <View style={{ marginTop: 30 }}>
            <Input
              label="Superficie"
              placeholder="m²"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              onChangeText={(input) =>
                setProduct({ ...product, superficie: input })
              }
              maxLength={6}
            />

            <Input
              label="nbPiece"
              placeholder="Nombre de piece"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              onChangeText={(input) =>
                setProduct({ ...product, nbPiece: input })
              }
              maxLength={3}
            />
          </View>
        ) : null}

        {product.category === ("Téléphones" || "Tablettes" || "Ordinateurs") ? (
          <View style={{ marginTop: 30 }}>
            <Input
              label="RAM"
              placeholder="Gb"
              style={{ fontSize: 15 }}
              numberOfLines={2}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input) =>
                setProduct({ ...product, RamTelephone: input })
              }
            />

            <Input
              label="ROM"
              placeholder="Gb"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input) =>
                setProduct({ ...product, RomTelephone: input })
              }
            />
          </View>
        ) : null}

        {product.category !==
        ("Appartements" ||
          "Maisons & Villas" ||
          "Terrains" ||
          "Commerces & Bureaux" ||
          "Location courte durée (vacances)" ||
          "Location long durée" ||
          "Maquillage et produits de bien être" ||
          "Matériels professionnels" ||
          "Services et travaux professionnels" ||
          "Formations & autres") ? (
          <View style={{ marginTop: 10 }}>
            <View style={styles.pickerView}>
              <Text style={styles.label}>État</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.etat}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, etat: itemValue })
                }
              >
                <Picker.Item
                  label="Choisissez l'état de produit"
                  value=""
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="Neuf" value="Neuf" />
                <Picker.Item label="Utilisé" value="Utilisé" />
              </Picker>
            </View>
          </View>
        ) : null}

        <Input
          label="Description"
          placeholder="écrire quelques lignes pour décrire le produit"
          style={{ fontSize: 15 }}
          containerStyle={{ marginTop: 20 }}
          numberOfLines={5}
          multiline={true}
          labelStyle={{ color: COLORS.primary }}
          onChangeText={(input) =>
            setProduct({ ...product, Description: input })
          }
        />
        
        {product.category === ("Voitures" || "Location de Voiture") ?
        <View style={styles.chipContainer}>
          <TextView
            fontFamily="Source-Regular"
            fontSize={16}
            style={{ marginBottom: 20 }}
          >
            Merci d'entrer les info suplémentaire de votre voiture
          </TextView>

          <View style={styles.chipRow}>
            <Chip
              title="Airbag"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="airbag"
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-seat-heater"
              style={{ marginLeft: 20 }}
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-windshield-outline"
              style={{ marginLeft: 20 }}
            />
          </View>

          <View style={styles.chipRow}>
            <Chip
              title="Airbag"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-wash"
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="card-account-mail-outline"
              style={{ marginLeft: 20 }}
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-seat-heater"
              style={{ marginLeft: 20 }}
            />
          </View>

          <View style={styles.chipRow}>
            <Chip
              title="Airbag"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="expansion-card"
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-traction-control"
              style={{ marginLeft: 20 }}
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-turbocharger"
              style={{ marginLeft: 20 }}
            />
          </View>

          <View style={styles.chipRow}>
            <Chip
              title="Airbag"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-seat-cooler"
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-esp"
              style={{ marginLeft: 20 }}
            />
            <Chip
              title="Clima"
              onClick={() => {
                alert("Airbag");
              }}
              iconName="car-brake-parking"
              style={{ marginLeft: 20 }}
            />
          </View>
        </View>

        : null }

        <ButtonFill
          loading={loading}
          onClick={submit}
          title="Valider"
          style={{ marginBottom: 40 }}
        />
      </ScrollView>
    </View>
  );
}

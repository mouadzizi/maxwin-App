import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, SafeAreaView, FlatList } from "react-native";
import { Input, CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import TextView from "../../../Components/TextView";
import ButtonFill from "../../../Components/Button/ButtonFill";
import ButtonOutlined from "../../../Components/Button/ButtonOutlined";

import styles from "./InformationStep.style";
import { COLORS } from "../../../GlobalStyle";
import { addProduct, uploadImages } from "../../../API/APIFunctions";
import ChipModal from "../Modals/ChipsModal";

export default function InformationStep({ navigation, route }) {
  const prevProduct = route.params?.product;
  const [product, setProduct] = useState(prevProduct);
  const [loading, setLoading] = useState(false);

  let modalRef;

  let selectedChips = [];

  const submit = () => {
    setLoading(true);
    addProduct({ ...product, chips: selectedChips })
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

  const addChip = (title, active) => {
    if (active) {
      selectedChips.push(title);
    } else {
      const index = selectedChips.indexOf(title);
      selectedChips.splice(index, 1);
    }
    selectedChips = [...new Set(selectedChips)];
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
        {product.category[1] === "Voitures" ||
        product.category[1] === "Location de Voiture" ? (
          <View style={{ marginTop: 30 }}>
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
                  label="Choisissez la Puissance Fiscale"
                  value=""
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="Manuelle" value="Manuelle" />
                <Picker.Item label="Automatique" value="Automatique" />
              </Picker>
            </View>
          </View>
        ) : null}

        {product.category[1] === "Appartements" ||
        product.category[1] === "Maisons & Villas" ||
        product.category[1] === "Location long durée" ||
        product.category[1] === "Location courte durée (vacances)" ||
        product.category[1] === "Commerces & Bureaux" ? (
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
              label="Nombre de piece"
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

        {product.category[1] ===
          (product.category[1] === "Tablettes" ||
            product.category[1] === "Téléphones" ||
            product.category[1] === "Ordinateurs") && (
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
        )}

        {product.category[1] !==
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

        {(product.category[1] === "Voitures" ||
          product.category[1] === "Location de Voiture") && (
          <View style={styles.chipContainer}>
            <TextView
              fontFamily="Source-Regular"
              fontSize={16}
              style={{ marginBottom: 20 }}
            >
              Merci d'entrer les equipements de votre Vehicule
            </TextView>
            <ButtonOutlined
              loading={false}
              onClick={() => modalRef.openModal()}
              title="Equipements"
              style={{ marginBottom: 40 }}
            />
          </View>
        )}

        {product.category[1] === "Télévisions" && (
          <View style={{ marginTop: 10 }}>
            <View style={styles.pickerView}>
              <Text style={styles.label}>Pouces</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={product.pouces}
                onValueChange={(itemValue) =>
                  setProduct({ ...product, Pouces: itemValue })
                }
              >
                <Picker.Item
                  label="Choisissez Pouces de Television"
                  value=""
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="32" value="32" />
                <Picker.Item label="40" value="40" />
                <Picker.Item label="42" value="42" />
              </Picker>
            </View>
          </View>
        )}

        <View style={{ flexDirection: "row" }}>
          <CheckBox
            containerStyle={{ width: "50%" }}
            title="En bonne état    "
            iconRight
            checkedColor={COLORS.secondary}
            checked={product.goodState}
            onPress={() =>
              setProduct({ ...product, goodState: !product.goodState })
            }
          />

          <CheckBox
            containerStyle={{ width: "50%" }}
            title="Negociable"
            iconRight
            checkedColor={COLORS.secondary}
            checked={product.negotiable}
            onPress={() =>
              setProduct({ ...product, negotiable: !product.negotiable })
            }
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <CheckBox
            containerStyle={{ width: "50%" }}
            title="Cash on delevry"
            iconRight
            checkedColor={COLORS.secondary}
            checked={product.cashOnDelivery}
            onPress={() =>
              setProduct({
                ...product,
                cashOnDelivery: !product.cashOnDelivery,
              })
            }
          />

          <CheckBox
            containerStyle={{ width: "50%" }}
            title="Laivraison  "
            iconRight
            checkedColor={COLORS.secondary}
            checked={product.delivery}
            onPress={() =>
              setProduct({ ...product, delivery: !product.delivery })
            }
          />
        </View>

        <Input
          containerStyle={{ marginTop: 20 }}
          value=""
          onChangeText={(value) =>
            setProduct({ ...product, phoneNumber: value })
          }
          placeholder="Numéro de télephone"
          rightIcon={{ type: "Feather", name: "phone", color: COLORS.primary }}
        />

        <ButtonFill
          loading={loading}
          onClick={submit}
          title="Valider"
          style={{ marginBottom: 40, marginTop: 20 }}
        />
      </ScrollView>
      <ChipModal ref={(curRef) => (modalRef = curRef)} onClick={addChip} />
    </View>
  );
}

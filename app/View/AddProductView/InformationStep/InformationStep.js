import React, { useState, useCallback } from "react";
import { View, Text, ScrollView } from "react-native";
import { Input, CheckBox } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import TextView from "../../../Components/TextView";
import ButtonFill from "../../../Components/Button/ButtonFill";
import ButtonOutlined from "../../../Components/Button/ButtonOutlined";

import styles from "./InformationStep.style";
import { COLORS } from "../../../GlobalStyle";
import { addProduct, uploadImages, getUser } from "../../../API/APIFunctions";
import ChipModal from "../Modals/ChipsModal";
import { auth } from "../../../API/Firebase";
import { useFocusEffect } from "@react-navigation/core";

export default function InformationStep({ navigation, route }) {
  const prevProduct = route.params?.product;
  const [product, setProduct] = useState(prevProduct);
  const [selectedChips, setSelectedChips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  let modalRef;

  useFocusEffect(
    useCallback(() => {
      getUser().then((firebaseUser) => setUser(firebaseUser));
      if(user.phone && user.phone !== "" ){
        setProduct({ ...product, phoneNumber: user.phone });
      }
    }, [])
  );
  console.log(user);
  const submit = () => {
    setLoading(true);
    addProduct({ ...product, chips: selectedChips, owner: user, likes: 0 })
      .then((docRef) => {
        uploadImages(product.images, docRef.id, user.uid).then((links) => {
          docRef.update({ images: links }).then(() => {
            setLoading(false);
            navigation.navigate("Home");
          });
        });
      })
      .catch(({ message }) => {
        setLoading(false);
        console.warn(message);
      });
  };

  const addChip = (title, active) => {
    if (active) {
      setSelectedChips((prevChips) => [...prevChips.concat(title)]);
    } else {
      const index = selectedChips.indexOf(title);
      selectedChips.splice(index, 1);
    }
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

        <Input
          label="Ville"
          value={product.city}
          containerStyle={{ marginTop: 20 }}
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
          disabled={true}
        />

        <Input
          label="Votre quartier"
          placeholder="Cela vous aidera à gagner plus de confiance"
          maxLength={19}
          containerStyle={{ marginTop: 20 }}
          style={{ fontSize: 15 }}
          labelStyle={{ color: COLORS.primary }}
          onChangeText={(value) => setProduct({ ...product, adresse: value })}
          value={product.adresse}
        />

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
                <Picker.Item label="DACIA" value="DACIA" />
                <Picker.Item label="FIAT" value="FIAT" />
                <Picker.Item label="FORD" value="FORD" />
                <Picker.Item label="HYUNDAI" value="HYUNDAI" />
                <Picker.Item label="INFINITI" value="INFINITI" />
                <Picker.Item label="JAGUAR" value="JAGUAR" />
                <Picker.Item label="KIA " value="KIA" />
                <Picker.Item label="LANDROVER" value="LANDROVER" />
                <Picker.Item label="MASERATI" value="MASERATI" />
                <Picker.Item label="MAZDA" value="MAZDA" />
                <Picker.Item label="MERCEDES" value="MERCEDES" />
                <Picker.Item label="MINI" value="MINI" />
                <Picker.Item label="MITSUBISHI" value="MITSUBISHI" />
                <Picker.Item label="NISSAN" value="NISSAN" />
                <Picker.Item label="OPEL" value="OPEL" />
                <Picker.Item label="PEUGEOT" value="PEUGEOT" />
                <Picker.Item label="PORSCHE" value="PORSCHE" />
                <Picker.Item label="RENAULT" value="RENAULT" />
                <Picker.Item label="ROVER" value="ROVER" />
                <Picker.Item label="SEAT" value="SEAT" />
                <Picker.Item label="SKODA" value="SKODA" />
                <Picker.Item label="SUZUKI" value="SUZUKI" />
                <Picker.Item label="TOYOTA" value="TOYOTA" />
                <Picker.Item label="VOLSWAGEN" value="VOLSWAGEN" />
                <Picker.Item label="VOLVO" value="VOLVO" />
                <Picker.Item label="AUTRE" value="AUTRE" />
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
                  label="Choisissez la Transaction"
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

        {(product.category[1] === "Tablettes" ||
          product.category[1] === "Téléphones" ||
          product.category[1] === "Ordinateurs") && (
          <View style={{ marginTop: 30 }}>
            <Input
              label="RAM"
              placeholder="Gb"
              style={{ fontSize: 15 }}
              keyboardType="numeric"
              numberOfLines={2}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input) => setProduct({ ...product, RAM: input })}
            />

            <Input
              label="ROM"
              placeholder="Gb"
              keyboardType="numeric"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input) => setProduct({ ...product, ROM: input })}
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
            setProduct({ ...product, description: input })
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
                  setProduct({ ...product, pouces: itemValue })
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
          keyboardType="numeric"
          value={product.phoneNumber}
          onChangeText={(value) =>
            setProduct({ ...product, phoneNumber: value })
          }
          placeholder="numéro de téléphone"
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

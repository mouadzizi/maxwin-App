import React,{useState,useEffect} from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import TextView from "../../../Components/TextView";
import ButtonFill from "../../../Components/Button/ButtonFill";
import styles from "./InformationStep.style";
import { COLORS } from "../../../GlobalStyle";
import {addProduct,uploadImages} from '../../../API/APIFunctions'
import {useNavigation} from '@react-navigation/native'
import {auth} from '../../../API/Firebase'

export default function InformationStep({ navigation, route }) {
  const prevProduct = route.params?.product;
  const [product, setProduct] = useState(prevProduct)
  const user = auth.currentUser
  const RenderCategoryInfo = () => {
    switch (product.category) {
      case "Voitures" || "Location de Voiture":
        return (
          <View style={{ marginTop: 30 }}>
            {/* Picker for State */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>État</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
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
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={8}
            />

            <Input
              label="Année de fabrication"
              placeholder="Année de fabrication"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={4}
            />

            {/* Picker for Fuel */}
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
              label="Puissance fiscale"
              placeholder="CH"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={8}
            />

            {/* Picker for Transaction */}
            <View style={styles.pickerView}>
              <Text style={styles.label}>Transaction</Text>
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
              label="Description"
              placeholder="écrire quelques lignes pour décrire le produit"
              style={{ fontSize: 15 }}
              numberOfLines={5}
              labelStyle={{ color: COLORS.primary }}
            />
          </View>
        );

      case "Appartements" || "Maisons & Villas" || "Location long durée" || "Location courte durée (vacances)":
        return (
          <View style={{ marginTop: 30 }}>
            <Input
              label="Superficie"
              placeholder="m²"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={5}
            />
            <Input
              label="Nombre de piéces"
              placeholder="personnes"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={2}
            />

            <Input
              label="Description"
              placeholder="écrire quelques lignes pour décrire le produit"
              style={{ fontSize: 15 }}
              numberOfLines={5}
              labelStyle={{ color: COLORS.primary }}
            />
          </View>
        );

        case "Appartements" || "Maisons & Villas" || "Location long durée" || "Location courte durée (vacances)":
        return (
          <View style={{ marginTop: 30 }}>
            <Input
              label="Superficie"
              placeholder="m²"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={5}
            />
            <Input
              label="Nombre de piéces"
              placeholder="personnes"
              style={{ fontSize: 15 }}
              labelStyle={{ color: COLORS.primary }}
              keyboardType="number-pad"
              maxLength={2}
            />
            <Input
              label="Description"
              placeholder="écrire quelques lignes pour décrire le produit"
              style={{ fontSize: 15 }}
              numberOfLines={5}
              labelStyle={{ color: COLORS.primary }}
            />
          </View>
        );
      default:
        return (
          <>
          <View style={styles.pickerView}>
              <Text style={styles.label}>État</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                onValueChange={(itemValue) => setProduct({...product,state:itemValue})}
                selectedValue={product.state}
              >
                <Picker.Item
                  label="Choisissez l'état de produit"
                  value=""
                  color={COLORS.Grey[400]
                  }
                />
                <Picker.Item label="Neuf" value="Neuf" />
                <Picker.Item label="Utilisé" value="Utilisé" />
              </Picker>
            </View>

            <Input
              label="Description"
              placeholder="écrire quelques lignes pour décrire le produit"
              style={{ fontSize: 15 }}
              numberOfLines={5}
              labelStyle={{ color: COLORS.primary }}
              onChangeText={(input)=>setProduct({...product,description:input})}
            />
          </>
        );
    }
  };

  useEffect(() => {
    console.log('this is information step');
    console.log(product.images);
    return () => {
      
    }
  }, [])
  const submit = ()=>{
      addProduct(product).then(docRef=> {
        uploadImages(product.images,docRef.id,user.uid).then(links=>{
          docRef.update({images:links}).then(()=>navigation.navigate('Home')
          )
        })
      }).catch(({message})=>alert(message))
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.containerHeight}>
        <ScrollView
          style={styles.container}
          showsVerticalScrollIndicator={false}
        >
          <TextView
            fontFamily="Source-Regular"
            fontSize={16}
            style={styles.title}
          >
            Merci d'entrer le max d'information possible sur votre produit
          </TextView>

          <RenderCategoryInfo />

          <ButtonFill onClick={submit} title="Valider" style={{ marginBottom: 40 }} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

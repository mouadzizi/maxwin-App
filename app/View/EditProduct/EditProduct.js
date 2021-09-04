import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

import { Input } from "react-native-elements";

import ButtonFill from "../../Components/Button/ButtonFill";

import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./EditProduct.style";
import { editProduct, deleteProduct,deleteProdImages } from "../../API/APIFunctions";
import ConfirmationModal from "./Modal/ConfirmationModal";

export default function EditProduct({ navigation, route }) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [ready, setReady] = useState(false);

  let Modal = null;
  useEffect(() => {
    const passedProduct = route.params?.product;
    setProduct(passedProduct);
  }, []);

  useEffect(() => {
    setReady(true);
    return () => { };
  }, [product]);

  const update = () => {
    setLoading(true);
    editProduct(product)
    .catch(({ message }) => {
      setLoading(false);
      alert(message);
    }).then(navigation.goBack)
      .then(() => setLoading(false))

  };

  const remove = () => {
    setLoading(true);
    deleteProduct(product.key)
      .then(() => setLoading(false))
      .then(() => {
        deleteProdImages(product.key).then(navigation.goBack).catch(({message})=>alert(message))
      })
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {ready ? (
        <ScrollView>
          <View style={styles.container}>
            <Input
              onChangeText={(e) => setProduct({ ...product, title: e })}
              value={product.title}
              placeholder="Titre"
              label="Titre de produit"
              maxLength={22}
              renderErrorMessage={false}
              labelStyle={{ color: COLORS.primary }}
              containerStyle={{ marginTop: 20 }}
            />
            <Input
              value={!isNaN(product.price) ? product.price.toString() : ""}
              placeholder="prix de produit"
              label="Prix"
              maxLength={9}
              keyboardType="numeric"
              renderErrorMessage={false}
              labelStyle={{ color: COLORS.primary }}
              containerStyle={{ marginTop: 20 }}
              onChangeText={(e) =>
                setProduct({ ...product, price: parseFloat(e) })
              }
            />
            <Input
              value={product.description}
              placeholder="Description"
              label="Description"
              renderErrorMessage={false}
              labelStyle={{ color: COLORS.primary }}
              containerStyle={{ marginTop: 20 }}
              numberOfLines={5}
              multiline={true}
              onChangeText={(e) => setProduct({ ...product, description: e })}
            />

            <View style={styles.container}>
              <Text style={styles.label}>Etat de produit</Text>

              {/* Picker */}
              <View style={styles.pickerView}>
                <Picker
                  selectedValue={product.etat}
                  style={styles.pickerInput}
                  mode="dropdown"
                  dropdownIconColor={COLORS.primary}
                  onValueChange={(e) => setProduct({ ...product, etat: e })}
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
            <ButtonFill
              disable={
                !product.price ||
                !product.title ||
                !product.description ||
                !product.etat
              }
              title="Valider"
              loading={loading}
              onClick={update}
            />

            <ButtonFill
              title="Suprimer produit"
              loading={false}
              style={{ backgroundColor: "red", marginTop: 15 }}
              onClick={() => Modal.openModal()}
            />
          </View>
        </ScrollView>
      ) : null}
      <ConfirmationModal
        onClick={remove}
        loading={loading}
        ref={(el) => (Modal = el)}
      >
        
      </ConfirmationModal>
    </SafeAreaView>
  );
}

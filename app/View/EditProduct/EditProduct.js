import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Picker } from "@react-native-picker/picker";

import { Input } from "react-native-elements";

import ButtonFill from "../../Components/Button/ButtonFill";

import { Entypo, Fontisto } from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";
import styles from "./EditProduct.style";

export default function EditProduct({navigation}) {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
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
            placeholder="prix"
            label="Prix de produit"
            renderErrorMessage={false}
            labelStyle={{ color: COLORS.primary }}
            containerStyle={{ marginTop: 20 }}
            rightIcon={
              <Entypo name="v-card" size={24} color={COLORS.primary} />
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

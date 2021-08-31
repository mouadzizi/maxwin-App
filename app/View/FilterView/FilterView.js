import React, {  useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Input } from "react-native-elements";
import ButtonOutlined from "../../Components/Button/ButtonOutlined";
import ButtonFill from "../../Components/Button/ButtonFill";
import CategoryModal from "../AddProductView/Modals/CategoryModal";
import { COLORS } from "../../GlobalStyle";
import styles from "./FilterView.style";


export default function FilterView({ navigation, route }) {
  const [data, setData] = useState({
    minPrice: 0,
    maxPrice: Number.POSITIVE_INFINITY,
    minKM: 0,
    maxKM: Number.POSITIVE_INFINITY,
    fuel: "*",
    state: "*",
    brand: "*",
    city: "*",
    category: "Toutes les catégories",
  });
  let modals = [];

  const selectCategory = (selCategory) => {
    setData({ ...data, category: selCategory });
    modals[0].closeModal();
  };

  const setPriceMin = (value) => {
    value == ""
      ? setData({ ...data, minPrice: 0 })
      : setData({ ...data, minPrice: parseFloat(value) });
  };
  const setPriceMax = (value) => {
    value == ""
      ? setData({ ...data, maxPrice: Number.POSITIVE_INFINITY })
      : setData({ ...data, maxPrice: parseFloat(value) });
  };
  return (
    <View style={{ marginTop: 20, flex: 1 }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.pickerView}>
          <Text style={styles.label}>Choisissez la Ville</Text>
          <Picker
            style={styles.pickerInput}
            mode="dialog"
            dropdownIconColor={COLORS.primary}
            selectedValue={data.city}
            onValueChange={(e) => setData({ ...data, city: e })}
          >
            <Picker.Item
              label="Choisissez une Ville"
              value="*"
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
          title={data.category || "tous les catégories"}
          onClick={() => modals[0].openModal()}
          style={{ marginBottom: 20 }}
        />

        {data.category && (
          <>
            <Text style={styles.label}>Prix</Text>

            <View style={styles.row}>
              <Input
                keyboardType="numeric"
                placeholder="Prix MIN"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={setPriceMin}
              />
              <Input
                keyboardType="numeric"
                placeholder="Prix MAX"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={setPriceMax}
              />
            </View>
          </>
        )}

        {(data.category === "Voitures" ||
          data.category === "Location de Voiture") && (
          <>
            <View style={styles.pickerView}>
              <Text style={styles.label}>Marque de Voiture</Text>
              <Picker
                style={styles.pickerInput}
                mode="dialog"
                selectedValue={data.brand}
                onValueChange={(e) => setData({ ...data, brand: e })}
                dropdownIconColor={COLORS.primary}
              >
                <Picker.Item
                  label="Choisissez une marque"
                  value="*"
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

            <Text style={styles.label}>Kilométrage</Text>

            <View style={styles.row}>
              <Input
                keyboardType="numeric"
                placeholder="MIN"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, minKM: parseFloat(e) || 0 })
                }
              />
              <Input
                keyboardType="numeric"
                placeholder="MAX"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({
                    ...data,
                    maxKM: parseFloat(e) || Number.POSITIVE_INFINITY,
                  })
                }
              />
            </View>

            <View style={styles.pickerView}>
              <Text style={styles.label}>Carburant</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                selectedValue={data.fuel}
                onValueChange={(e) => setData({ ...data, fuel: e })}
                dropdownIconColor={COLORS.primary}
              >
                <Picker.Item
                  label="Choisissez le carburant"
                  value="*"
                  color={COLORS.Grey[400]}
                />
                <Picker.Item label="Diesel" value="Diesel" />
                <Picker.Item label="Essence" value="Essence" />
              </Picker>
            </View>
            {/* THIS IS NEW ADDED START --------------------*/}
            <View style={styles.pickerView}>
              <Text style={styles.label}>Transaction</Text>
              <Picker
                style={styles.pickerInput}
                mode="dropdown"
                dropdownIconColor={COLORS.primary}
                selectedValue={data.transaction}
                onValueChange={(itemValue) =>
                  setData({ ...data, transaction: itemValue })
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
          </>
        )}

        {(data.category === "Appartements" ||
          data.category === "Maisons & Villas" ||
          data.category === "Location long durée" ||
          data.category === "Location courte durée (vacances)" ||
          data.category === "Commerces & Bureaux") && (
          <>
            <Text style={styles.label}>Superficie</Text>

            <View style={styles.row}>
              <Input
                keyboardType="numeric"
                placeholder="Superficie MIN"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, superficieMin: parseFloat(e) || 0 })
                }
              />
              <Input
                keyboardType="numeric"
                placeholder="Superficie MAX"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({
                    ...data,
                    superficieMax: parseFloat(e) || Number.POSITIVE_INFINITY,
                  })
                }
              />
            </View>
          </>
        )}

        {(data.category === "Tablettes" ||
          data.category === "Téléphones" ||
          data.category === "Ordinateurs") && (
          <>
            <Text style={styles.label}>RAM</Text>

            <View style={styles.row}>
              <Input
                keyboardType="numeric"
                placeholder="RAM MIN"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, RamMin: parseFloat(e) || 0 })
                }
              />
              <Input
                keyboardType="numeric"
                placeholder="RAM MAX"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, RamMax: parseFloat(e) || Number.POSITIVE_INFINITY })
                }
              />
            </View>

            <Text style={styles.label}>ROM</Text>
            <View style={styles.row}>
              <Input
                keyboardType="numeric"
                placeholder="ROM MIN"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, RomMin: parseFloat(e) || 0 })
                }
              />
              <Input
                keyboardType="numeric"
                placeholder="ROM MAX"
                containerStyle={{ width: "50%" }}
                labelStyle={{ color: COLORS.primary }}
                onChangeText={(e) =>
                  setData({ ...data, RomMax: parseFloat(e) || Number.POSITIVE_INFINITY })
                }
              />
            </View>
          </>
        )}
      </ScrollView>

      <ButtonFill
        title="Chercher"
        style={{ marginHorizontal: 20, marginBottom: 20 }}
        loading={false}
        onClick={() =>
          navigation.navigate("ResultView", {
            filterOpt: data,
            parent: route.name,
          })
        }
      />
      <ButtonFill
        title="Réinitialiser le filtre"
        style={{
          marginHorizontal: 20,
          marginBottom: 20,
          backgroundColor: COLORS.third,
        }}
        loading={false}
        onClick={() =>
          setData({
            minPrice: 0,
            maxPrice: Number.POSITIVE_INFINITY,
            minKM: 0,
            maxKM: Number.POSITIVE_INFINITY,
            fuel: "*",
            state: "*",
            brand: "*",
            category: "Toutes les catégories",
            city: "*",
          })
        }
      />

      <CategoryModal
        ref={(el) => (modals[0] = el)}
        onClick={(cat) => selectCategory(cat)}
      />
    </View>
  );
}

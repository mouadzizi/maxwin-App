import { Picker } from "@react-native-picker/picker";
import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { COLORS } from "../../GlobalStyle";
import styles from "./FilterView.style";
import ButtonOutlined from "../../Components/Button/ButtonOutlined"
export default function FilterView() {
  return (
    <View style={{marginTop : 20}}>
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

        <ButtonOutlined title="Choisissez une categorie" onClick={()=> alert('modal for category')}/>
      </ScrollView>
    </View>
  );
}

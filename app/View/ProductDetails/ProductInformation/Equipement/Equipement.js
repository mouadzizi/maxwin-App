import React from "react";
import { View } from "react-native";
import { COLORS } from "../../../../GlobalStyle";
import styles from "./Equipement.style";
import TextView from "../../../../Components/TextView";

//importing Icons
import Wheels from "../../../../icons/CarSpecifications/Wheels";
import Airbags from "../../../../icons/CarSpecifications/Airbags";
import CarSeat from "../../../../icons/CarSpecifications/CarSeat";
import Gps from "../../../../icons/CarSpecifications/Gps";
import CarAirConditioner from "../../../../icons/CarSpecifications/CarAirConditioner";
import Divider from "../../../../Components/Divider";
import RadarRedcule from "../../../../icons/CarSpecifications/RadarRecule";
import { Entypo, MaterialCommunityIcons } from "react-native-vector-icons";

export default function Equipement({ chips }) {
  const renderChip = (title, index) => {
    switch (title) {
      case "Premier main":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <Entypo name="news" size={40} color={COLORS.primary} />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Premier main
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "GPS":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <Gps />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                GPS
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "Climatisation":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <CarAirConditioner />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Climatisation
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "Radar de Recul":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <RadarRedcule />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Radar de Recul
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "Airbag":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <Airbags />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Airbags
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "Jantes":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <Wheels />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Jantes
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "Salon en cuir":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <CarSeat />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                Salon en cuir
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
      case "ABS":
        return (
          <View key={index}>
            <View key={index} style={styles.row}>
              <MaterialCommunityIcons
                name="car-brake-abs"
                color={COLORS.primary}
                size={40}
              />
              <TextView
                fontFamily="Source-Regular"
                fontSize={17}
                style={styles.textInfo}
              >
                ABS
              </TextView>
            </View>
            <Divider width="95%" />
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <TextView
        fontFamily="Source-Regular"
        fontSize={20}
        style={styles.headerSt}
      >
        Équipement Voiture
      </TextView>
      <Divider width="95%" />
      {chips.map((chip, index) => renderChip(chip, index))}
    </View>
  );
}

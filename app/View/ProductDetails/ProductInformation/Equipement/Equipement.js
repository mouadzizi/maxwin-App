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
import { Entypo } from "react-native-vector-icons";

export default function Equipement() {
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

      <View style={styles.row}>
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
      <View style={styles.row}>
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
      <View style={styles.row}>
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
      <View style={styles.row}>
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
      <View style={styles.row}>
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
      <View style={styles.row}>
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
      <View style={styles.row}>
        <Gps />
        <TextView
          fontFamily="Source-Regular"
          fontSize={17}
          style={styles.textInfo}
        >
          GPS
        </TextView>
      </View>
    </View>
  );
}

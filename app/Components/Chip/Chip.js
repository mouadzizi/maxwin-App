import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./Chip.style";
import TextView from "../TextView";
import {
  MaterialCommunityIcons,
  Entypo,
  MaterialIcons,
} from "react-native-vector-icons";
import { COLORS } from "../../GlobalStyle";

import RadarRedcule from "../../icons/CarSpecifications/RadarRecule";
import Gps from "../../icons/CarSpecifications/Gps";
import Wheels from "../../icons/CarSpecifications/Wheels";
import KeyCar from "../../icons/CarSpecifications/KeyCar";
import CarWheel from "../../icons/CarSpecifications/CarWheel";

import CarAirConditioner from "../../icons/CarSpecifications/CarAirConditioner";

export default function Chip({ title, onClick, iconName, style }) {
  const [active, setActive] = useState(false);
  const callBack = () => {
    setActive(!active);
    onClick(title, !active);
  };

  const Icon = () => {
    switch (iconName) {
      case "news":
        return (
          <Entypo
            name="news"
            size={40}
            color={active ? "white" : COLORS.primary}
          />
        );

      case "carSeat":
        return (
          <MaterialCommunityIcons
            size={40}
            color={active ? "white" : COLORS.primary}
            name="car-seat"
          />
        );

      case "gps":
        return <Gps width={40} white={active ? true : false} />;

      case "Jantes":
        return <Wheels width={40} white={active ? true : false} />;

      case "Airbag":
        return (
          <MaterialCommunityIcons
            name="airbag"
            color={active ? "white" : COLORS.primary}
            size={35}
          />
        );

      case "Climatisation":
        return <CarAirConditioner width={36} white={active ? true : false} />;

      case "RadarRedcule":
        return <RadarRedcule width={33} white={active ? true : false} />;

      case "ABS":
        return (
          <MaterialCommunityIcons
            name="car-brake-abs"
            color={active ? "white" : COLORS.primary}
            size={35}
          />
        );
      case "Tactil":
        return (
          <MaterialIcons
            name="fit-screen"
            color={active ? "white" : COLORS.primary}
            size={35}
          />
        );
      case "keys":
        return <KeyCar white={active ? true : false} />;

      case "brake":
        return (
          <MaterialCommunityIcons
            name="car-brake-retarder"
            color={active ? "white" : COLORS.primary}
            size={25}
          />
        );
      case "car-wheels":
        return <CarWheel  white={active ? true : false} />;

      default:
        return (
          <MaterialCommunityIcons
            name="airbag"
            color={active ? "white" : COLORS.primary}
            size={35}
          />
        );
    }
  };
  return (
    <TouchableOpacity
      onPress={callBack}
      style={
        active
          ? [styles.containerFill, style]
          : [styles.containerOutlined, style]
      }
    >
      <TextView
        fontFamily="Source-Regular"
        fontSize={17}
        style={{ marginLeft: 10, color: active ? "white" : COLORS.primary }}
      >
        {title}
      </TextView>
      <Icon />
    </TouchableOpacity>
  );
}

import React from "react";
import styles from "./CategoryButton.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import Car from "../../../icons/Categories/Car";
import Apartment from "../../../icons/Categories/Apartment";
import Villa from "../../../icons/Categories/Villa";
import Lamp from "../../../icons/Categories/Lamp";
import Tv from "../../../icons/Categories/Tv";
import MenClothes from "../../../icons/Categories/MenClothes";
import Phone from "../../../icons/Categories/Phone";
import Laptop from "../../../icons/Categories/Laptop";
import Bike from "../../../icons/Categories/Bike";
import WomenClothes from "../../../icons/Categories/WomenCloth";
import MakeUp from "../../../icons/Categories/MakeUp";
import ElectroMenage from "../../../icons/Categories/ElectroMenage";
import MenShoes from "../../../icons/Categories/MenShoes";
import WomenShoes from "../../../icons/Categories/WomenShoes";
import MaterialPRo from "../../../icons/Categories/MaterialPro";

export default function CategoryButton({ iconName, onClick }) {
  const RenderIcon = () => {
    switch (iconName) {
      case "Car":
        return <Car />;
      case "Apartment":
        return <Apartment />;
      case "Villa":
        return <Villa />;
      case "Lamp":
        return <Lamp />;
      case "Tv":
        return <Tv />;
      case "MenClothes":
        return <MenClothes />; //WomenClothes
      case "WomenClothes":
        return <WomenClothes />;
      case "Phone":
        return <Phone />;
      case "Laptop":
        return <Laptop />;
      case "Bike":
        return <Bike />;
      case "MakeUp":
        return <MakeUp />;
      case "carAccesory":
        return (
          <MaterialCommunityIcons name="car-cog" color="white" size={35} />
        );
      case "ElectroMenage":
        return <ElectroMenage />;
      case "MenShoes":
        return <MenShoes />;
      case "WomenShoes":
        return <WomenShoes />;
      case "MaterialPro":
        return <MaterialPRo />;

      default:
        return <Car />;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <RenderIcon />
    </TouchableOpacity>
  );
}

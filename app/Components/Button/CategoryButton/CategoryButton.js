import React from "react";
import styles from "./CategoryButton.style";

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

import { TouchableOpacity } from "react-native-gesture-handler";

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

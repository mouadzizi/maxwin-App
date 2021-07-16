import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Entypo } from "react-native-vector-icons";

import styles from "./FAB.style";

export default function FAB() {
  return (
    <TouchableOpacity
    style={{backgroundColor: 'black', borderRadius: 50, height: 70, width: 70, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 0, zIndex: 2, right: 10}}>
        <Entypo name="price-ribbon" color="red" size={35} />
    </TouchableOpacity>
  );
}

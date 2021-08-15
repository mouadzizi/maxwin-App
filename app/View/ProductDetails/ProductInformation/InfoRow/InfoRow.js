import React from 'react'
import { View } from 'react-native'
import TextView from "../../../../Components/TextView"
import styles from "../ProductInformation.style"

export default function InfoRow({detail, value}) {
    return (
        <View style={styles.rowInfo}>
        <TextView
        fontFamily="Source-Regular"
        fontSize={16}
        style={styles.textSt}
      >
        {detail || " "}
      </TextView>

      <TextView
        fontFamily="Source-Regular"
        fontSize={17}
        style={styles.textInfo}
      >
        {value || " "}
      </TextView>
        </View>
    )
}

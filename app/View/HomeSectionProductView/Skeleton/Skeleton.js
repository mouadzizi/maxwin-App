import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import styles from "./Skeleton.style";
import { EvilIcons } from "react-native-vector-icons";
import { pulseAnimation } from "./Skelton.animation";

export default function Skeleton() {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    pulseAnimation(pulseAnim).start();
  }, [pulseAnim]);

  return (
    <Animated.View style={{ opacity: pulseAnim }}>
      <View style={styles.containerGlobal}>
        <View style={styles.containerSection1}>
          <View style={styles.title}></View>
        </View>
        <View style={styles.imageContainer}>
          <EvilIcons name="image" size={250} color="#eee" />
        </View>
        <View style={styles.informationContainer}>
          <View style={styles.info}></View>
        </View>
      </View>
    </Animated.View>
  );
}

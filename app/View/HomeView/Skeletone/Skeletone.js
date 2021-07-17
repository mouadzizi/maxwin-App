import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import styles from "./Skeletone.style";
import { EvilIcons } from "react-native-vector-icons";
import { pulseAnimation } from "./Skeleton.animation";

export default function Skeletone() {
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    pulseAnimation(pulseAnim).start();
  }, [pulseAnim]);
  return (
    <Animated.View style={{ opacity: pulseAnim }}>
      <View style={styles.container}>
        <View style={styles.containerImage}>
          <EvilIcons name="image" size={130} color="#eee" />
        </View>
        <View style={styles.containerText}>
          <View style={styles.text}></View>
          <View style={styles.price}></View>
        </View>
      </View>
    </Animated.View>
  );
}

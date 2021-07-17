import { Animated } from 'react-native';

const pulseAnimation = (pulseAnim) =>
  Animated.loop(
    Animated.sequence([
      Animated.timing(pulseAnim, {
        toValue: 0.65,
        duration: 750,
        useNativeDriver: true,
      }),
      Animated.timing(pulseAnim, {
        toValue: 1,
        duration: 750,
        useNativeDriver: true,
      }),
    ]),
  );

export { pulseAnimation };

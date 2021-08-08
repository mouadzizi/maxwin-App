import { StyleSheet } from "react-native";
import {COLORS, windowWidth, windowHeight} from '../../GlobalStyle'
export default StyleSheet.create({
  container: {
    padding: 2,
    flex: 1,
  },
  FAB: {
    position: "absolute",
    bottom: 50,
    right: 20,
    zIndex: 1,
    fontSize: 10,
  },
});

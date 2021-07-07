import { StyleSheet } from "react-native";
import { COLORS, windowHeight } from "../../../GlobalStyle";

export default StyleSheet.create({
  imageContainer: {
    backgroundColor: COLORS.primary,
    height: windowHeight*0.57,
  },
  imageSlider: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
});

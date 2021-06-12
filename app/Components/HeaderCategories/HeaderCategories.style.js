import { StyleSheet } from "react-native";
import { COLORS } from "../../GlobalStyle";

export default StyleSheet.create({
  footer: {
    height: 60,
    width: 60,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 15,
  },
});

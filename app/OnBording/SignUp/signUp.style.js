import { StyleSheet } from "react-native";
import { COLORS } from "../../GlobalStyle";
export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  imageContainer: {
    backgroundColor: COLORS.primary,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 100,
  },
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ddd",
  },
  welcomeText: {
    color: COLORS.text,
    fontSize: 17,
    textAlign: "center",
    marginTop: 20,
  },
  errorMessage: {
    color: "red",
    fontSize: 14,
    marginLeft: 10,
    alignSelf: "center",
  },
});

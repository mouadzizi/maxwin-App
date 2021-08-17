import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  FAB: {
    position: "absolute",
    bottom: 50,
    right: 20,
    zIndex: 1,
    fontSize: 10,
  },
});

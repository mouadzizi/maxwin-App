import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../GlobalStyle";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerTitle: {
    margin: 20,
    fontSize: 25,
  },
});

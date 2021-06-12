import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../GlobalStyle";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight,
    backgroundColor: 'white'
  },
  headerTitle: {
    margin: 20,
    fontSize: 25,
  },
});

import { StyleSheet} from "react-native";
import { COLORS, windowHeight, windowWidth} from "../../GlobalStyle";
export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    height: windowHeight,
    width: windowWidth
  },
  title: {
    color: COLORS.text,
    marginTop: 15,
    marginLeft: 10,
  },
});

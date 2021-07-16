import { StyleSheet } from "react-native";
import { COLORS } from "../../../../GlobalStyle";

export default StyleSheet.create({
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  textInfo:{
    marginHorizontal: 20,
    color: COLORS.primary
  }
});

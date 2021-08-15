import { StyleSheet } from "react-native";
import { COLORS } from "../../../GlobalStyle";

export default StyleSheet.create({
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  headerSt: {
    color: COLORS.secondary,
    marginTop: 5,
  },
  textSt: {
    color: COLORS.text,
    marginTop: 5,
    marginRight: 15,
    lineHeight: 28,
  },
  row: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
  },
  rowInfo: {
    flexDirection: "row",
    marginTop: 5,
    alignItems: "center",
    justifyContent: 'space-between'
  },
  textInfo:{
    color: COLORS.primary,
    textAlign: "center",
    marginRight: 15,
    lineHeight: 28,
  }
});

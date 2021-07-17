import { StyleSheet } from "react-native";
import { COLORS } from "../../../GlobalStyle";

export default StyleSheet.create({

  containerGlobal: {
    height: 340,
    backgroundColor: COLORS.Grey[100],
    marginVertical: 10,
    borderColor: COLORS.Grey[200],
  },
  containerSection1: {
    height: 40,
    paddingLeft: 10,
    flexDirection: "row",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: COLORS.Grey[200],

  },

  imageContainer: {
    height: 250,
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.Grey[300],

  },
  informationContainer: {
    height: 50,
    padding: 10,
    flexDirection: "row",
    backgroundColor: COLORS.Grey[200]
  },
  title:{
      height: 15,
      width: 100,
      backgroundColor: COLORS.Grey[400],
      borderRadius: 15
  },
  info:{
    height: 15,
    width: 240,
    backgroundColor: COLORS.Grey[400],
    borderRadius: 15
}
});

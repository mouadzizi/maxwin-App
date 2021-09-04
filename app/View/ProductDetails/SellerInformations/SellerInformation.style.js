import { StyleSheet } from "react-native";
import { COLORS, windowHeight, windowWidth } from "../../../GlobalStyle";

export default StyleSheet.create({
  container: {
    marginVertical: 7,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 15,
  },
  containerCard: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    width: "100%",
  },
  firstRow: {
    flex: 1,
    flexDirection: "row",
  },
  secondRow: {
    flex: 1,
    padding: 10,
  },
  avatarContainer: {
    flex: 1,
    backgroundColor: "#ccc",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  nameContainer: {
    flex: 2,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 20
  },
  name:{
    fontSize: 17,
    fontWeight: 'bold',
    color: COLORS.text
  },
  product:{
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.secondary
  },
  info :{
    fontSize: 15,
    color: COLORS.text,
  },
  infoID :{
    fontSize: 13,
    color: COLORS.text,
    textDecorationLine: 'underline'
  },
  value:{
    fontSize: 15,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  row:{
    flexDirection: 'row'
  },
  headerSt: {
    color: COLORS.secondary,
    marginTop: 5,
  },
});

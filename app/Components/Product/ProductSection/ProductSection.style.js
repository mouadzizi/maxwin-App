import { StyleSheet } from "react-native";
import { COLORS } from "../../../GlobalStyle";
export default StyleSheet.create({
  container: {
    width: 265,
    margin: 10,
    flexDirection: "column",
  },
  containerImage: {
    height: 200,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  containerInfo: {
    height: 45,
    backgroundColor: "#ccc",
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  containerTitle: {
    flex: 1,
    alignItems: "flex-start",
  },
  containerPrice: {
    flex: 1,
    justifyContent:'flex-end',
    flexDirection:'row',
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 15,
  },
  DHS:{
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    paddingEnd: 10
  },
  title: {
    paddingStart: 10,
    letterSpacing:1, 
  },
});

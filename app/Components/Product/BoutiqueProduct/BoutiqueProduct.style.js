import { StyleSheet } from "react-native";
import { COLORS } from "../../../GlobalStyle";

export default StyleSheet.create({
  container: {
    height: 230,
    width: "100%",
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  imageContainer: {
    height: 170,
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    borderRadius: 10,
  },
  image: {
    height: 170,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    height: 60,
    width: "100%",
    borderRadius: 10,
    flexDirection: "row",
  },
  textContainer: {
    padding: 5,
    flex: 3,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.secondary,
  },
  iconContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
});

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
    alignItems: "flex-end",
  },
  image: {
    height: "100%",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  price: {
    fontSize: 15,
    lineHeight: 16.5,
    color: COLORS.secondary,
  },
  title: {
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 16.5,
    fontWeight: "bold",
  },
  strong: {
    fontWeight: "bold",
  },
});

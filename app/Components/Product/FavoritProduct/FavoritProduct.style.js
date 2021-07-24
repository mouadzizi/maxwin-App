import { StyleSheet } from "react-native";
import { COLORS } from "../../../GlobalStyle";
export default StyleSheet.create({
  container: {
    height: 130,
    margin: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  containerImage: {
    flex: 2,
    borderColor: COLORS.third,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: "center",
  },
  containerInfo: {
    flex: 3,
    borderColor: COLORS.third,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  containerBin: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: COLORS.third,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "90%",
    height: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 5,
    marginLeft: 5,
  },
  info: {
    fontSize: 18,
    color: COLORS.third,
    fontWeight: "bold",
    textTransform: 'capitalize'
  },
  value: {
    fontSize: 18,
    color: COLORS.text,
    fontWeight: "bold",
  },
});

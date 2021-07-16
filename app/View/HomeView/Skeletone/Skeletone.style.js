import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    width: 265,
    height: 200,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  containerImage: {
    flex: 3,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    backgroundColor: "#aaa",
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerText: {
    flex: 1,
    flexDirection: 'row',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "#ccc",
    alignItems: 'center'
  },
  text:{
    height: 20,
    width: 120,
    backgroundColor: "#aaa",
    margin: 10,
    borderRadius: 10
  },
  price:{
    height: 10,
    width: 90,
    backgroundColor: "#aaa",
    margin: 10,
    borderRadius: 10
  }

});

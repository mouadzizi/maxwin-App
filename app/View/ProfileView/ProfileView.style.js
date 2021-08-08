import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../GlobalStyle";

export default StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal: 20,
   
    
  },
  headerTitle: {
    margin: 20,
    fontSize: 25,
  },
  containerMain:{
    marginBottom: windowHeight * 0.09,
    flex:1
  }
});

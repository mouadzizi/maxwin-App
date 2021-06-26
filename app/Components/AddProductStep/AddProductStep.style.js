import { StyleSheet } from "react-native";
import { fonts } from "react-native-elements/dist/config";
import { COLORS } from "../../GlobalStyle";

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.Grey[300],
    borderRadius: 15,
    height: 50,
    marginTop: 10,
    flexDirection: 'row'
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtext:{
      marginTop : 5,
      color: COLORS.primary,
    
      
  }
});

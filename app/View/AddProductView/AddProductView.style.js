import { StyleSheet} from "react-native";
import { COLORS, windowHeight, windowWidth} from "../../GlobalStyle";
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    width: windowWidth,
  },
  title: {
    color: COLORS.text,
    marginTop: 15,
    marginLeft: 10,
  },
  containerHeight:{
    height : windowHeight*0.87,
  },
  pickerView:{
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '100%',
    borderColor: COLORS.Grey[300],
},
pickerInput:{
    height: 50,
    width: '100%'
},
label:{
    color: COLORS.primary,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold'
}
});

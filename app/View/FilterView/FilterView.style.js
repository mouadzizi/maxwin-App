import { StyleSheet } from "react-native";
import { COLORS } from "../../GlobalStyle";
export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  pickerView: {
    borderBottomWidth: 1,
    marginBottom: 20,
    width: "100%",
    borderColor: COLORS.Grey[300],
  },
  pickerInput: {
    height: 50,
    width: "100%",
  },
  label: {
    color: COLORS.primary,
    fontSize: 16,
    marginLeft: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
});

import { StyleSheet } from "react-native";
import {COLORS} from "../../GlobalStyle";


export const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 245,
        borderRadius: 20,
        margin: 10,
        backgroundColor: COLORS.Grey[200],
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        fontSize: 22,
        color: COLORS.primary,
      },
})

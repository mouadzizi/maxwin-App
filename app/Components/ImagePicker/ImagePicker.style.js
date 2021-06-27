import { StyleSheet } from "react-native";
import { COLORS } from "../../GlobalStyle";
export default StyleSheet.create({
    container: {
        height: 170,
        width: 170,
        backgroundColor: COLORS.Grey[400],
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    image:{
        height: 170,
        width: 170,
        borderRadius: 15,
    }
});

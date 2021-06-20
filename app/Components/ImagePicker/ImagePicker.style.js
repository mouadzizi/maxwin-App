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
        marginHorizontal:5,
        marginVertical: 5,
    },
    image:{
        height: 170,
        width: 170,
        borderRadius: 15,
    }
});

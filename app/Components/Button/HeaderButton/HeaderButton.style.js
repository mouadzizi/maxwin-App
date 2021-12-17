import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary ,
        borderRadius: 20,
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title:{
        color: "white",
    }
});
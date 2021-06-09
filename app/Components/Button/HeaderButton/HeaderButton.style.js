import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.secondary ,
        width: 100,
        height: 35,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize: 15,
        color: COLORS.secondary,
    }
});
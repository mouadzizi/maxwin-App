import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.primary ,
        width: 100,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    title:{
        fontSize: 15,
        color: COLORS.primary,
    }
});
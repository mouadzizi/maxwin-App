import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDisable:{
        height: 50,
        borderRadius: 10,
        backgroundColor: COLORS.Grey[400],
        justifyContent: 'center',
        alignItems: 'center'
    }
});
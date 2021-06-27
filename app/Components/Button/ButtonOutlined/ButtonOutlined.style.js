import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        height: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDisable:{
        height: 50,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.Grey[400],
        justifyContent: 'center',
        alignItems: 'center',
    }
});
import {StyleSheet} from 'react-native';
import { COLORS } from '../../../GlobalStyle';

export default StyleSheet.create({
    container: {
        height: 60,
        width: 60,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15,
    },
});
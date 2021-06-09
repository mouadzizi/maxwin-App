import {StyleSheet} from 'react-native';
import { COLORS } from '../../GlobalStyle';
export default StyleSheet.create({
    container: {
        height: 50,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    container1:{
        flex: 1,
        alignItems: 'flex-start'
    },
    container2:{
        flex: 1,
        alignItems: 'flex-end',
    },
    title:{
        fontSize: 20,
        color: COLORS.secondary,
        fontWeight: 'bold'
    }
});